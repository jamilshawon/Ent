// pages/video/[title].tsx

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { videoData } from "./videoData";

export default function VideoPage() {
  const router = useRouter();
  const { title } = router.query;

  const video = videoData[title as string];

  return (
    <Layout>
      {video ? (
        <div className="container">
          <h1 className="title">{title}</h1>

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

          <style jsx>{`
            .container {
              padding: 40px 20px;
              background: linear-gradient(135deg, #3498db, #9b59b6);
              color: #fff;
              min-height: 100vh;
            }

            .title {
              font-size: 2.5rem;
              margin-top: 55px;
              text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
            }

            .video-wrapper {
              position: relative;
              padding-bottom: 56.25%;
              height: 0;
              overflow: hidden;
              border: 2px solid #01f4e0;
              border-radius: 10px;
              margin: 30px 0;
            }

            .video-wrapper iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }

            .video-details {
              background: #000;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
              max-width: 800px;
              margin: 0 auto;
              color: #ecf0f1;
            }

            .video-details p {
              margin: 10px 0;
              font-size: 1.1rem;
            }

            .video-details strong {
              color: #3498db;
            }
          `}</style>
        </div>
      ) : (
        <p style={{ textAlign: "center", padding: "40px", fontSize: "1.2rem", color: "#ecf0f1" }}>
          Sorry, no video found for this title.
        </p>
      )}
    </Layout>
  );
}
