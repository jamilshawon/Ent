import Header from '../components/Header';
import styles from '../styles/Movies.module.css';

interface Item {
  title: string;
  thumbnail: string;
  type: "Movie" | "TV Show";
}

const moviesData: Item[] = [
  { title: "Inception", thumbnail: "/thumbnails/inception.jpg", type: "Movie" },
  { title: "Interstellar", thumbnail: "/thumbnails/interstellar.jpg", type: "Movie" },
  { title: "The Dark Knight", thumbnail: "/thumbnails/dark-knight.jpg", type: "Movie" },
  { title: "Dune", thumbnail: "/thumbnails/dune.jpg", type: "Movie" },
  { title: "Avengers: Endgame", thumbnail: "/thumbnails/endgame.jpg", type: "Movie" },
  { title: "Joker", thumbnail: "/thumbnails/joker.jpg", type: "Movie" },
];

const tvShowsData: Item[] = [
  { title: "Breaking Bad", thumbnail: "/thumbnails/breaking-bad.jpg", type: "TV Show" },
  { title: "Stranger Things", thumbnail: "/thumbnails/stranger-things.jpg", type: "TV Show" },
  { title: "The Crown", thumbnail: "/thumbnails/the-crown.jpg", type: "TV Show" },
  { title: "The Mandalorian", thumbnail: "/thumbnails/mandalorian.jpg", type: "TV Show" },
  { title: "Game of Thrones", thumbnail: "/thumbnails/got.jpg", type: "TV Show" },
  { title: "The Witcher", thumbnail: "/thumbnails/witcher.jpg", type: "TV Show" },
];

// Combine and sort A-Z
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
            <div key={index} className={styles.card}>
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
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
