// pages/index.tsx
import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Latest");

  const videoData: Record<string, string[]> = {
    Latest: ["Game of Thrones", "Vikings", "Video C", "Video D", "Video E", "Video F"],
    Popular: ["Popular 1", "Popular 2", "Popular 3", "Popular 4"],
    Upcoming: ["Upcoming 1", "Upcoming 2", "Upcoming 3"],
    Engaged: ["Engaged 1", "Engaged 2", "Engaged 3", "Engaged 4", "Engaged 5"],
  };

  return (
    <Layout>
      {/* Categories Section */}
      <section className={styles.section}>
        <div className={styles.categoryContainer}>
          {["Latest", "Popular", "Upcoming", "Engaged"].map((cat) => (
            <button
              key={cat}
              className={`${styles.category} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video List */}
      <div className={styles.videoList}>
        {videoData[activeCategory].map((title, index) => (
          <div key={index} className={styles.videoCard}>
  <img
    src={`https://via.placeholder.com/300x150?text=${encodeURIComponent(title)}`}
    alt={`Video Thumbnail ${index + 1}`}
  />
  <div className={styles.info}>
    <h4>{title}</h4>
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
