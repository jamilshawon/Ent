import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState({});
  const [genresOpen, setGenresOpen] = useState(false); // dropdown state
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleGenres = () => {
    setGenresOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateSidebarStyle = () => {
      const width = window.innerWidth;
      const isAuthPage = ["/register", "/signin", "/index"].includes(router.pathname);

      let top = "0px";
      let paddingTop = "50px";

      if (width <= 480) {
        top = isAuthPage ? "80px" : "72px";
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      if (
        sidebarOpen &&
        !event.target.closest(`.${styles.sidebar}`) &&
        !event.target.closest(`.${styles["toggle-btn"]}`)
      ) {
        setSidebarOpen(false);
        setGenresOpen(false); // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [sidebarOpen]);

  useEffect(() => {
    const handleRouteChange = () => {
      setSidebarOpen(false);
      setGenresOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <header className={styles.header}>
      <Link href="/signin">
        <button className={styles.signIn}>Sign In</button>
      </Link>

      <Link href="/" legacyBehavior>
        <a className={styles.logo}>VID-LAB</a>
      </Link>

      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
      />
      <span className={styles["toggle-btn"]} onClick={toggleSidebar}>
        ☰
      </span>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}
        style={sidebarStyle}
      >
        <span className={styles["close-btn"]} onClick={toggleSidebar}>
          &times;
        </span>
        <div
          className={styles.navLinks}
          onClick={(e) => e.stopPropagation()}
        >
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>

          <Link href="#">TVShows</Link>

          <div className={styles.dropdown}>
            <span className={styles.dropdownToggle} onClick={toggleGenres}>
              Genres ▾
            </span>
            {genresOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/genres/bollywood">Bollywood</Link>
                <Link href="/genres/hollywood">Hollywood</Link>
                <Link href="/genres/bengali">Bengali</Link>
                <Link href="/genres/thriller">Thriller</Link>
                <Link href="/genres/horror">Horror</Link>
                 <Link href="/genres/mysterious">Mysterious</Link>
              </div>
            )}
          </div>

          <Link href="#">A-Z</Link>
          <Link href="#">4k</Link>
        </div>
      </div>
    </header>
  );
}
