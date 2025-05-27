import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Link from "next/link";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import type for react-slick settings
import type { Settings } from "react-slick";

// Dynamically import react-slick with typed props
const Slider = dynamic<React.ComponentType<Settings>>(
  () => import("react-slick"),
  { ssr: false }
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const videoData: Record<string, { title: string; thumbnail: string }[]> = {
    Latest: [
      { title: "Women Seeking Women 54", thumbnail: "/actresses/CindyCraves/wsw54.jpg" },
       { title: "Women Seeking Women 73", thumbnail: "/actresses/CindyCraves/wsw73.png" },
      { title: "Women Seeking Women 107", thumbnail: "/actresses/CindyCraves/wsw107.png" },
       { title: "Women Seeking Women 122", thumbnail: "/thumbnails/wsw122.png" },
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
      { title: "Mother Superior", thumbnail: "/actresses/Mother-Superior.jpg" },
      { title: "Mother Superior 2", thumbnail: "/actresses/Mother-superior2.jpg" },
      { title: "Mother Superior 3", thumbnail: "/actresses/Ms3.jpg" },
      { title: "Under the Veil", thumbnail: "/actresses/Utv.jpg" },
      { title: "Confessions of a Sinful Nun ", thumbnail: "/actresses/Csn.jpg" },
      { title: "Confessions of a Sinful Nun 2", thumbnail: "/actresses/Csn2.jpg" },
    ],
    Upcoming: [
      { title: "Upcoming 1", thumbnail: "/thumbnails/upcoming-1.jpg" },
      { title: "Upcoming 2", thumbnail: "/thumbnails/upcoming-2.jpg" },
      { title: "Upcoming 3", thumbnail: "/thumbnails/upcoming-3.jpg" },
    ],
    Engaged: [
      { title: "Mother Superior", thumbnail: "/actresses/Mother-Superior.jpg" },
      { title: "Mother Superior 2", thumbnail: "/actresses/Mother-superior2.jpg" },
      { title: "Mother Superior 3", thumbnail: "/actresses/Ms3.jpg" },
      { title: "Under the Veil", thumbnail: "/actresses/Utv.jpg" },
      { title: "Confessions of a Sinful Nun ", thumbnail: "/actresses/Csn.jpg" },
      { title: "Confessions of a Sinful Nun 2", thumbnail: "/actresses/Csn2.jpg" },
    ],
  };

  // Typed slider settings
  const sliderSettings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Layout>
      {/* Featured Latest Slider */}
      {isClient && (
        <section className={styles.sliderSection}>
          <h2 className={styles.sliderTitle} aria-label="Featured latest videos">
            🔥 Featured Latest
          </h2>
          <Slider {...sliderSettings}>
            {videoData["Latest"].map((video, index) => (
              <Link
                key={index}
                href={`/video/${encodeURIComponent(video.title)}`}
                style={{ padding: "0 12px", display: "block" }}
                aria-label={`Watch video titled ${video.title}`}
              >
                <div className={styles.slideCard}>
                  <img
                    src={video.thumbnail}
                    alt={`Thumbnail for ${video.title}`}
                    loading="lazy"
                    onError={(e) => (e.currentTarget.src = "/thumbnails/placeholder.jpg")}
                  />
                  <div className={styles.slideTitle}>{video.title}</div>
                </div>
              </Link>
            ))}
          </Slider>
        </section>
      )}

      {/* Categories */}
      <section className={styles.section}>
        <div className={styles.categoryContainer} role="tablist" aria-label="Video categories">
          {["Latest", "Popular", "Upcoming", "Engaged"].map((cat) => (
            <button
              key={cat}
              className={`${styles.category} ${activeCategory === cat ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
              tabIndex={activeCategory === cat ? 0 : -1}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Video List */}
      <main
        className={styles.videoList}
        role="tabpanel"
        aria-live="polite"
        aria-labelledby="video-category"
      >
        {videoData[activeCategory].map((video, index) => (
          <Link
            key={index}
            href={`/video/${encodeURIComponent(video.title)}`}
            className={styles.videoCard}
            aria-label={`Watch video titled ${video.title}`}
          >
            <img
              src={video.thumbnail}
              alt={`Thumbnail for ${video.title}`}
              className={styles.thumbnail}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "/thumbnails/placeholder.jpg";
              }}
            />
            <div className={styles.info}>
              <h4>{video.title}</h4>
            </div>
          </Link>
        ))}
      </main>

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
