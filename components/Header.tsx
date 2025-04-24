// components/Header.tsx
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/register">
        <button className={styles.signIn}>Sign In</button>
      </Link>
      <div className={styles.logo}>VID-LAB</div>
      <input
        type="text"
        className={styles.search}
        placeholder="Search..."
      />
      <span className={styles["toggle-btn"]}>☰</span>
    </header>
  );
}
