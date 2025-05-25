import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState<Record<string, string>>({});
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  // Responsive top/padding styles based on route and screen width
  useEffect(() => {
    const updateSidebarStyle = () => {
      const width = window.innerWidth;
      const isAuthPage = ["/register", "/signin", "/index"].includes(router.pathname);

      let top = "0px";
      let paddingTop = "50px";

      if (width <= 480) {
        top = isAuthPage ? "71px" : "60px";
        paddingTop = isAuthPage ? "10px" : "30px";
      } else if (width <= 768) {
        top = isAuthPage ? "80px" : "60px";
        paddingTop = isAuthPage ? "15px" : "30px";
      } else {
        top = isAuthPage ? "73px" : "67px";
        paddingTop = isAuthPage ? "20px" : "50px";
      }

      setSidebarStyle({ top, paddingTop });
    };

    updateSidebarStyle();
    window.addEventListener('resize', updateSidebarStyle);
    return () => window.removeEventListener('resize', updateSidebarStyle);
  }, [router.pathname]);

  // Close sidebar when clicking outside
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
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <header className={styles.header}>
      <Link href="/signin" passHref>
        <button className={styles.signIn}>Sign In</button>
      </Link>

      <Link href="/" passHref>
        <div className={styles.logo} style={{ cursor: "pointer" }}>
          VID-PERSONAL
        </div>
      </Link>

      <input
        type="text"
        className={styles.search}
        placeholder="Search here..."
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyPress}
      />

      <span className={styles["toggle-btn"]} onClick={toggleSidebar}>
        ☰
      </span>

      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        style={sidebarStyle}
      >
        <span className={styles["close-btn"]} onClick={toggleSidebar}>
          &times;
        </span>
        <nav className={styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/models">Models</Link>
          <Link href="#">Series</Link>
          <Link href="#">Sites</Link>
        </nav>
      </div>
    </header>
  );
}
