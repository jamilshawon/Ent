import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { videoData } from "../../data/videoData";

export default function VideoPage() {
  const router = useRouter();
  const { title } = router.query;
  const video = videoData[title as string];

  return (
    <Layout>
      {video ? (
        <div className="video-section">
          <h1>{title}</h1>
          <div className="video-container">
            <div className="video-frame">
              <iframe
                src={video.src}
                title={title as string}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-info">
              <p><strong>Description:</strong> {video.description}</p>
              {video.date && <p><strong>Date:</strong> {video.date}</p>}
              {video.info && <p><strong>Info:</strong> {video.info}</p>}
              {video.actress && (
                <p>
                  <strong>Actress:</strong>{" "}
                  <a
                    href={`/actress/${video.actress.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {video.actress}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p className="not-found">Sorry, no video found for this title.</p>
      )}

      <style jsx>{`
        .video-section {
          background: #121212;
          color: #ffffff;
          padding: 80px 20px 40px;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        h1 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 30px;
          color: #00e6d2;
        }

        .video-container {
          background: #1e1e1e;
          border-radius: 12px;
          max-width: 800px;
          margin: 0 auto;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          transition: all 0.3s ease;
        }

        .video-frame {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-bottom: 3px solid #00e6d2;
        }

        .video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-info {
          padding: 20px;
          font-size: 1rem;
          line-height: 1.6;
        }

        .video-info strong {
          color: #00baff;
        }

        .video-info a {
          color: #00e6d2;
          text-decoration: none;
        }

        .video-info a:hover {
          text-decoration: underline;
        }

        .not-found {
          text-align: center;
          font-size: 1.25rem;
          padding: 50px;
          color: #cccccc;
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 1.5rem;
          }

          .video-info {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </Layout>
  );
}
