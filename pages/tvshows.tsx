import Header from '../components/Header';
import styles from '../styles/Movies.module.css';

const tvShowsData = [
  { title: "Breaking Bad", thumbnail: "/thumbnails/breaking-bad.jpg" },
  { title: "Stranger Things", thumbnail: "/thumbnails/stranger-things.jpg" },
  { title: "The Crown", thumbnail: "/thumbnails/the-crown.jpg" },
  { title: "The Mandalorian", thumbnail: "/thumbnails/mandalorian.jpg" },
  { title: "Game of Thrones", thumbnail: "/thumbnails/got.jpg" },
  { title: "The Witcher", thumbnail: "/thumbnails/witcher.jpg" },
];

export default function TVShowsPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.heading}>📺 Popular TV Shows</h2>
        <div className={styles.grid}>
          {tvShowsData.map((show, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={show.thumbnail}
                  alt={show.title}
                  className={styles.thumbnail}
                />
              </div>
              <p className={styles.title}>{show.title}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
