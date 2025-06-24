import { useRouter } from 'next/router';
import Header from '../../components/Header';
import styles from '../../styles/Movies.module.css';
import { slugify } from '../../utils/slugify';


interface VideoData {
  title: string;
  videoUrl: string;
  description?: string;
}

const allVideos: VideoData[] = [
  {
    title: "Rockstar(2011)",
    videoUrl: "https://plymouth-string-sold-funeral.trycloudflare.com/Rockstar.mp4"
  },
  {
    title: "Breaking Bad",
    videoUrl: "https://www.youtube.com/embed/HhesaQXLuRY",
    description: "A high school chemistry teacher turns to making meth."
  },
  // Add more entries here...
];

export default function WatchPage() {
  const router = useRouter();
  const { slug } = router.query;

  const video = allVideos.find(v => slugify(v.title) === slug);



  if (!video) return <p style={{ padding: "2rem" }}>Video not found.</p>;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h2 className={styles.heading}>{video.title}</h2>
        <div className={styles.card} style={{ maxWidth: "100%", paddingBottom: "2rem" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src={video.videoUrl}
              title={video.title}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              allowFullScreen
            ></iframe>
          </div>
          {video.description && <p style={{ marginTop: "1rem" }}>{video.description}</p>}
        </div>
      </main>
    </>
  );
}
