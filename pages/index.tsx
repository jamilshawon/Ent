import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import type { Settings } from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import moviesData from '../data/movies';
import tvShowsData from '../data/tvShows';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Properly typed dynamic import for Slider
const Slider = dynamic<React.ComponentType<Settings>>(
  () => import('react-slick'),
  { ssr: false }
);

import type { Item } from '../types/media'; // same path as used above

const featuredItems: Item[] = [
  ...moviesData.slice(0, 3),
  ...tvShowsData.slice(0, 3),
];


const latestMovies = moviesData.slice(0, 6);
const latestTVShows = tvShowsData.slice(0, 6);

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const sliderSettings: Settings = {
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
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className={styles.thumbnail}
                sizes="(max-width: 768px) 100vw, 180px"
              />
            </div>
            <p className={styles.title}>{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );

  if (!isClient) return null;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.carouselSection}>
          <Slider {...sliderSettings}>
            {featuredItems.map((item, idx) => (
              <div key={idx} className={styles.carouselItem}>
                <Link href={`/watch/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={1000}
                    height={400}
                    className={styles.carouselImage}
                    priority={idx === 0}
                  />
                  <div className={styles.carouselItemTitle}>
                    {item.title}
                  </div>
                </Link>
              </div>
            ))}
          </Slider>

        </section>

        {renderSection("🎬 Latest Movies", latestMovies, "/movies")}
        {renderSection("📺 Latest TV Shows", latestTVShows, "/tv-shows")}
      </main>
    </>
  );
}
