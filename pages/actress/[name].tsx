// pages/actress/[name].tsx

import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { videoData } from "../video/videoData";
import { modelsData } from "../data/models";


export default function ActressPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!name || typeof name !== "string") return null;

  const actress = modelsData[name];
  if (!actress) {
    return (
      <Layout>
        <div className="actress-container">
          <h1>Actress not found</h1>
        </div>
      </Layout>
    );
  }

  const relatedVideos = Object.entries(videoData).filter(
    ([_, video]) => video.actress === actress.name
  );

  return (
    <Layout>
      <div className="actress-container">
        <div className="profile">
          <img src={actress.image} alt={actress.name} className="profile-image" />
          <h1>{actress.name}</h1>
          <p className="bio">{actress.bio}</p>
        </div>

        <h2>Related Videos</h2>
        <div className="video-list">
          {relatedVideos.length > 0 ? (
            relatedVideos.map(([title, video], index) => (
              <div key={index} className="video-item">
                <h3>{title}</h3>
                <div className="video-frame">
                  <iframe
                    src={video.src}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="description">{video.description}</p>
              </div>
            ))
          ) : (
            <p>No related videos available.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .actress-container {
          padding: 30px 20px;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #3498db, #9b59b6);
          color: #fff;
        }

        .profile {
          margin-bottom: 40px;
        }

        .profile-image {
          width: 300px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 2.2rem;
          margin: 15px 0 10px;
          color: black;
        }

        .bio {
          font-size: 1rem;
          color: black;
          max-width: 600px;
          margin: 0 auto;
        }

        h2 {
          font-size: 1.5rem;
          margin: 30px 0 20px;
          color: black;
        }

        .video-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .video-item {
          margin: 20px;
          width: 300px;
          background: #fdfdfd;
          border-radius: 8px;
          padding: 15px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: transform 0.2s ease;
        }

        .video-item:hover {
          transform: translateY(-5px);
        }

        .video-frame {
          width: 100%;
          padding-bottom: 56.25%;
          position: relative;
          border-radius: 6px;
          overflow: hidden;
        }

        .video-frame iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-item h3 {
          margin-top: 10px;
          font-size: 1.1rem;
          color: #2980b9;
        }

        .description {
          font-size: 0.95rem;
          color: #666;
          margin-top: 8px;
        }

        @media (max-width: 768px) {
          .video-item {
            width: 90%;
            
          }
          .actress-container{
            margin-top: 115px;
          }
        }
      `}</style>
    </Layout>
  );
}
