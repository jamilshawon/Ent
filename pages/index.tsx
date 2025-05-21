import { useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Latest");

  // Updated videoData with thumbnail paths
  const videoData: Record<string, { title: string, thumbnail: string }[]> = {
    Latest: [
      { title: "Lesbian Triangles", thumbnail: "/actresses/Lesbian-triangles25.jpg" },
      { title: "Mother Superior", thumbnail: "/actresses/Mother-Superior.jpg" },
      { title: "Mother Superior 2", thumbnail: "/actresses/Mother-superior2.jpg" },
      { title: "Mother Superior 3", thumbnail: "/actresses/Ms3.jpg" },
      { title: "Under the Veil", thumbnail: "/actresses/Utv.jpg" },
      { title: "Confessions of a Sinful Nun ", thumbnail: "/actresses/Csn.jpg" },
      { title: "Confessions of a Sinful Nun 2", thumbnail: "/actresses/Csn2.jpg" },
      { title: "A Fantasy", thumbnail: "/actresses/AFantasy.jpg" },
       { title: "Black and Tan", thumbnail: "/thumbnails/Bat.jpg" },
       { title: "Lesbian Seductions #32", thumbnail: "/thumbnails/Lsd32.jpg" },
      { title: "Women Seeking Women 125", thumbnail: "/thumbnails/Wsw125.jpg" },
    ],
    Popular: [
      { title: "Popular 1", thumbnail: "/thumbnails/popular-1.jpg" },
      { title: "Popular 2", thumbnail: "/thumbnails/popular-2.jpg" },
      { title: "Popular 3", thumbnail: "/thumbnails/popular-3.jpg" },
      { title: "Popular 4", thumbnail: "/thumbnails/popular-4.jpg" },
    ],
    Upcoming: [
      { title: "Upcoming 1", thumbnail: "/thumbnails/upcoming-1.jpg" },
      { title: "Upcoming 2", thumbnail: "/thumbnails/upcoming-2.jpg" },
      { title: "Upcoming 3", thumbnail: "/thumbnails/upcoming-3.jpg" },
    ],
    Engaged: [
      { title: "Engaged 1", thumbnail: "/thumbnails/engaged-1.jpg" },
      { title: "Engaged 2", thumbnail: "/thumbnails/engaged-2.jpg" },
      { title: "Engaged 3", thumbnail: "/thumbnails/engaged-3.jpg" },
      { title: "Engaged 4", thumbnail: "/thumbnails/engaged-4.jpg" },
      { title: "Engaged 5", thumbnail: "/thumbnails/engaged-5.jpg" },
    ],
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
        {videoData[activeCategory].map((video, index) => (
          <Link
            key={index}
            href={`/video/${encodeURIComponent(video.title)}`}
            className={styles.videoCard}
          >
            <img
              src={video.thumbnail} // Use the actual thumbnail path
              alt={`Thumbnail for ${video.title}`}
              className={styles.thumbnail}
            />
            <div className={styles.info}>
              <h4>{video.title}</h4>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>Vid-Lab</div>
          <div className={styles.version}>v1.1</div>
        </div>
      </footer>
    </Layout>
  );
}
