import Header from '../components/Header';
import styles from '../styles/Movies.module.css';
import Link from 'next/link';
import tvShowsData from '../data/tvShows';  // <-- Import the shared data

export default function TVShowsPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.heading}>📺 Popular TV Shows</h2>
        <div className={styles.grid}>
          {tvShowsData.map((show, index) => (
            <Link
              key={index}
              href={`/watch/${show.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={styles.card}
            >
              <div className={styles.thumbnailWrapper}>
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className={styles.thumbnail}
                />
              </div>
              <p className={styles.title}>{show.title}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
