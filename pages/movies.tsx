import Header from '../components/Header';
import styles from '../styles/Movies.module.css';

const moviesData = [
  { title: "Inception", thumbnail: "/thumbnails/inception.jpg" },
  { title: "Interstellar", thumbnail: "/thumbnails/interstellar.jpg" },
  { title: "The Dark Knight", thumbnail: "/thumbnails/dark-knight.jpg" },
  { title: "Dune", thumbnail: "/thumbnails/dune.jpg" },
  { title: "Avengers: Endgame", thumbnail: "/thumbnails/endgame.jpg" },
  { title: "Joker", thumbnail: "/thumbnails/joker.jpg" },
];

export default function MoviesPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.heading}>🎬 Latest Movies</h2>
        <div className={styles.grid}>
          {moviesData.map((movie, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={movie.thumbnail}
                  alt={movie.title}
                  className={styles.thumbnail}
                />
              </div>
              <p className={styles.title}>{movie.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
