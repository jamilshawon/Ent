import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const featuredMovies = [
  { title: "Inception", thumbnail: "/thumbnails/inception.jpg" },
  { title: "Interstellar", thumbnail: "/thumbnails/interstellar.jpg" },
  { title: "The Dark Knight", thumbnail: "/thumbnails/dark-knight.jpg" },
];

const latestMovies = [
  { title: "Dune", thumbnail: "/thumbnails/dune.jpg" },
  { title: "Avengers: Endgame", thumbnail: "/thumbnails/endgame.jpg" },
  { title: "Joker", thumbnail: "/thumbnails/joker.jpg" },
];

const latestTVShows = [
  { title: "Breaking Bad", thumbnail: "/thumbnails/breaking-bad.jpg" },
  { title: "Stranger Things", thumbnail: "/thumbnails/stranger-things.jpg" },
  { title: "The Witcher", thumbnail: "/thumbnails/witcher.jpg" },
];

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    pauseOnHover: false,
  };

  const renderSection = (
    title: string,
    items: typeof latestMovies,
    viewAllLink: string
  ) => (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.heading}>{title}</h2>
        <Link href={viewAllLink} className={styles.viewAll}>
          View All →
        </Link>
      </div>
      <div className={styles.grid}>
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={`/watch/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            className={styles.card}
          >
            <div className={styles.thumbnailWrapper}>
              <img src={item.thumbnail} alt={item.title} className={styles.thumbnail} />
            </div>
            <p className={styles.title}>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );

  if (!isClient) return null; // Avoid SSR issues with dynamic slider

  return (
    <>
      <Header />
      <main className={styles.container}>
        {/* Featured Carousel */}
        <section className={styles.carouselSection}>
          <Slider {...sliderSettings}>
            {featuredMovies.map((movie, idx) => (
              <div key={idx} className={styles.carouselItem}>
                <Link href={`/watch/${movie.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className={styles.carouselImage}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </section>

        {/* Latest Movies */}
        {renderSection("🎬 Latest Movies", latestMovies, "/movies")}

        {/* Latest TV Shows */}
        {renderSection("📺 Latest TV Shows", latestTVShows, "/tv-shows")}
      </main>
    </>
  );
}
