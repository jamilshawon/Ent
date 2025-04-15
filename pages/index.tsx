import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar if clicked outside of the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Ensure the target is an Element before using closest()
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
    <div>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>VID-LAB</div>
        <input type="text" className={styles.search} placeholder="Search..." />
        <button className={styles.signIn}>Sign In</button>
        {/* Toggle Sidebar Button on Left */}
        <span className={styles["toggle-btn"]} onClick={toggleSidebar}>
          ☰
        </span>
      </header>

      {/* Sidebar */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <span className={styles["close-btn"]} onClick={toggleSidebar}>
          &times;
        </span>
        <div className={styles.navLinks}>
          <Link href="#">Home</Link>
          <Link href="#">Popular</Link>
          <Link href="#">Upcoming</Link>
          <Link href="#">Latest</Link>
        </div>
      </div>

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.category}>Latest</div>
        <div className={styles.category}>Popular</div>
        <div className={styles.category}>Upcoming</div>
        <div className={styles.category}>Most Engaged</div>
      </section>

      {/* Video List */}
      <div className={styles.videoList}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.videoCard}>
            <img src="https://via.placeholder.com/300x150" alt={`Video Thumbnail ${index + 1}`} />
            <div className="info">
              <h4>Video Title {index + 1}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div>Footer Content</div>
      </footer>
    </div>
  );
}
