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
        <div className="videos-section">
          <h2>{title}</h2>
          <div className="video-card-wrapper">
            <div className="video-wrapper">
              <iframe
                src={video.src}
                title={title as string}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-details">
              <p><strong>Description:</strong> {video.description}</p>
              {video.date && <p><strong>Date:</strong> {video.date}</p>}
              {video.info && <p><strong>Info:</strong> {video.info}</p>}
              {video.actress && (
                <p>
                  <strong>Actress:</strong>{" "}
                  <a
                    href={`/actress/${video.actress.toLowerCase().replace(/\s+/g, "-")}`}
                    style={{ color: "#01f4e0", textDecoration: "underline" }}
                  >
                    {video.actress}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", padding: "40px", fontSize: "1.2rem", color: "#ecf0f1" }}>
          Sorry, no video found for this title.
        </p>
      )}

      <style jsx>{`
        .videos-section {
          padding: 20px 10px; 
          background-color: #000;
          min-height: 100vh;
          color: #f5f5f5;
          font-family: 'Segoe UI', sans-serif;
          margin-top: 100px; /* Adjusted space from the top */
        }

        .videos-section h2 {
          font-size: 1.6rem;
          color: #f5f5f5;
          margin-bottom: 20px;
          text-align: center;
        }

        .video-card-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2px;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease;
          max-width: 600px;
          margin: 0 auto;
        }

        .video-card-wrapper:hover {
          box-shadow:
            inset 0 10px 8px rgba(255, 255, 255, 0.05),
            inset 0 -8px 6px rgb(15, 176, 230, 0.8);
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 10px;
          margin-bottom: 10px;
          border: 2px solid #01f4e0;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          border: none;
        }

        .video-details {
          padding: 15px 20px;
          color: #ecf0f1;
        }

        .video-details p {
          margin: 10px 0;
          font-size: 1rem;
        }

        .video-details strong {
          color: #3498db;
        }
      `}</style>
    </Layout>
  );
}
