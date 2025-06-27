import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { slugify } from '../../utils/slugify';

interface VideoData {
  title: string;
  videoUrl: string;
  description?: string;
  date?: string;
  info?: string;
}

const allVideos: VideoData[] = [
  {
    title: 'Rockstar(2011)',
    videoUrl: 'https://herbs-collectables-accuracy-g.trycloudflare.com/Rockstar.mp4',
    description: 'Musical journey of a troubled artist.',
    date: '2011-11-11',
    info: 'Ranbir Kapoor, dir. Imtiaz Ali.',
  },
  {
    title: 'Breaking Bad',
    videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY',
    description: 'High school chemistry teacher turns to meth.',
    date: '2008-01-20',
    info: 'Bryan Cranston, Aaron Paul.',
  },
];

export default function WatchPage() {
  const router = useRouter();
  const { slug } = router.query;
  const video = allVideos.find((v) => slugify(v.title) === slug);

  if (!video) {
    return (
      <>
        <Header />
        <div className="not-found">Video not found.</div>
        <style jsx>{`
          .not-found {
            padding: 4rem;
            text-align: center;
            font-size: 1.5rem;
            color: #ccc;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </>
    );
  }

  const isDirectVideo = video.videoUrl.endsWith('.mp4') || video.videoUrl.endsWith('.webm');

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">{video.title}</h1>
        <div className="video-wrapper">
          {isDirectVideo ? (
            <video controls autoPlay muted className="video">
              <source src={video.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <iframe
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
              allow="autoplay; encrypted-media"
              frameBorder="0"
              className="video"
            />
          )}
        </div>

        <div className="video-details">
          {video.description && (
            <p><strong>Description:</strong> {video.description}</p>
          )}
          {video.date && (
            <p><strong>Date:</strong> {video.date}</p>
          )}
          {video.info && (
            <p><strong>Info:</strong> {video.info}</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 80px auto;
          padding: 0 24px;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          text-align: center;
          text-shadow: 0 0 10px #e50914;
        }

        .video-wrapper {
          position: relative;
          padding-top: 56.25%;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 0 30px rgba(229, 9, 20, 0.6);
          margin-bottom: 30px;
        }

        .video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          border: none;
          background: #000;
        }

        .video-details {
          background: #111;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);
        }

        .video-details p {
          margin: 10px 0;
          font-size: 1.1rem;
          color: #ccc;
        }

        .video-details strong {
          color: #e50914;
        }

        @media (max-width: 768px) {
          .title {
            font-size: 1.8rem;
            margin-top: 160px;
          }

          .video-details p {
            font-size: 1rem;
          }

          .container {
            margin: 60px auto;
          }
        }
      `}</style>
    </>
  );
}
