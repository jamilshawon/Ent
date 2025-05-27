import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { videoData, VideoInfo } from "../../data/videoData";

export default function VideoPage() {
  const router = useRouter();
  const { title } = router.query;

  if (!title || typeof title !== "string") {
    return (
      <Layout>
        <div className="loading">Loading...</div>
        <style jsx>{`
          .loading {
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666;
            font-size: 1.8rem;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </Layout>
    );
  }

  const decodedTitle = decodeURIComponent(title);
  const video: VideoInfo | undefined = videoData[decodedTitle];

  if (!video) {
    return (
      <Layout>
        <div className="not-found">
          No video found for <span>"{decodedTitle}"</span>.
        </div>
        <style jsx>{`
          .not-found {
            height: 80vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            font-size: 1.6rem;
            font-family: 'Montserrat', sans-serif;
          }
          span {
            color: #e50914; /* Netflix red */
            font-weight: 700;
          }
        `}</style>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="container">
        <h1 className="title">{decodedTitle}</h1>

        <div className="video-wrapper">
          <iframe
            src={video.src}
            title={decodedTitle}
            allowFullScreen
            allow="autoplay; encrypted-media"
            frameBorder="0"
            className="video"
          />
        </div>

        <div className="video-info">
          <p className="description">{video.description}</p>
          <div className="metadata">
            {video.date && (
              <span>
                <strong>Release:</strong> {video.date}
              </span>
            )}
            {video.info && (
              <span>
                <strong>Info:</strong> {video.info}
              </span>
            )}
            {video.actress && (
              <span>
                <strong>Actress:</strong>{" "}
                <a
                  href={`/actress/${video.actress.toLowerCase().replace(/\s+/g, "-")}`}
                  className="actress-link"
                >
                  {video.actress}
                </a>
              </span>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 80px auto 100px;
          padding: 0 24px;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          user-select: none;
        }

        .title {
          font-size: 3.8rem;
          font-weight: 900;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
          text-shadow: 0 0 12px #e50914;
        }

        .video-wrapper {
          position: relative;
          padding-top: 56.25%; /* 16:9 ratio */
          border-radius: 14px;
          overflow: hidden;
          box-shadow:
            0 0 20px rgba(229, 9, 20, 0.7),
            0 8px 30px rgba(0, 0, 0, 0.8);
          margin-bottom: 28px;
          background: #111;
          transition: box-shadow 0.3s ease;
        }

        .video-wrapper:hover {
          box-shadow:
            0 0 35px #e50914,
            0 12px 40px rgba(229, 9, 20, 0.6);
        }

        .video {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-info {
          font-size: 1.1rem;
          color: #ddd;
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          user-select: text;
        }

        .description {
          flex-basis: 100%;
          margin-bottom: 12px;
          color: #ccc;
        }

        .metadata {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
          font-weight: 500;
          color: #eee;
        }

        strong {
          color: #e50914;
          font-weight: 700;
          margin-right: 6px;
          user-select: none;
        }

        .actress-link {
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.25s ease;
          user-select: text;
        }

        .actress-link:hover,
        .actress-link:focus-visible {
          border-color: #e50914;
          outline: none;
          cursor: pointer;
        }

        @media (max-width: 720px) {
          .container {
            margin: 135px 16px 80px;
          }
          .title {
            font-size: 1.7rem;
            margin-bottom: 20px;
          }
          .video-info {
            font-size: 1rem;
            gap: 16px;
          }
          .metadata {
            gap: 18px;
          }
        }
      `}</style>
    </Layout>
  );
}
