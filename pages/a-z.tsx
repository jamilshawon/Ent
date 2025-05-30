import Header from '../components/Header';
import styles from '../styles/Movies.module.css';
import Link from 'next/link';

import moviesData from '../data/movies';
import tvShowsData from '../data/tvShows';

interface Item {
  title: string;
  thumbnail: string;
  type: "Movie" | "TV Show";
}

const combinedData: Item[] = [...moviesData, ...tvShowsData].sort((a, b) =>
  a.title.localeCompare(b.title)
);

export default function AtoZPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.heading}>🔤 A–Z Movies & TV Shows</h2>
        <div className={styles.grid}>
          {combinedData.map((item, index) => (
            <Link
              key={index}
              href={`/watch/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={styles.card}
            >
              <div className={styles.thumbnailWrapper}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={styles.thumbnail}
                />
              </div>
              <p className={styles.title}>
                {item.title} <span style={{ fontSize: "0.8rem", color: "#aaa" }}>({item.type})</span>
              </p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
