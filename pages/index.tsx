// pages/index.tsx
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.category}>Latest</div>
        <div className={styles.category}>Popular</div>
        <div className={styles.category}>Upcoming</div>
        <div className={styles.category}>Engaged</div>
      </section>

      {/* Video List */}
      <div className={styles.videoList}>
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={styles.videoCard}>
            <img
              src="https://via.placeholder.com/300x150"
              alt={`Video Thumbnail ${index + 1}`}
            />
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
    </Layout>
  );
}
