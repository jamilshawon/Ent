import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const [sidebarStyle, setSidebarStyle] = useState({});

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Update sidebar style based on the current route (Register or Sign In)
  useEffect(() => {
    if (router.pathname === "/register" || router.pathname === "/signin") {
      // Set style for both Register and Sign In pages
      setSidebarStyle({
        top: "109px", // Adjust the vertical position
        paddingTop: "20px" // Adjust the padding inside the sidebar
      });
    } else {
      // Default style for other pages
      setSidebarStyle({
        top: "0px",
        paddingTop: "50px"  // default padding inside the box
      });
    }
  }, [router.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (
        sidebarOpen &&
        !event.target.closest(`.${styles.sidebar}`) &&
        !event.target.closest(`.${styles["toggle-btn"]}`)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <header className={styles.header}>
      <Link href="/signin">
        <button className={styles.signIn}>Sign In</button>
      </Link>
      <div className={styles.logo}>VID-LAB</div>
      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
      />

      <span className={styles["toggle-btn"]} onClick={toggleSidebar}>
        ☰
      </span>

      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        style={sidebarStyle} // Apply dynamic top and paddingTop based on route
      >
        <span className={styles["close-btn"]} onClick={toggleSidebar}>
          &times;
        </span>
        <div className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="#">Popular</Link>
          <Link href="#">Upcoming</Link>
          <Link href="#">Latest</Link>
        </div>
      </div>
    </header>
  );
}
