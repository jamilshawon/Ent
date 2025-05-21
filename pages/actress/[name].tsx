import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { videoData } from "../video/videoData";

export default function ActressProfile() {
  const router = useRouter();
  const { name } = router.query;
  const actressName = name ? name.replace(/-/g, " ") : "";

  const filteredVideos = Object.values(videoData).filter(
    (video) =>
      video.actress &&
      video.actress.toLowerCase() === actressName.toLowerCase()
  );

  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-box">
            <div className="profile-photo">
              <img
                src={`/actresses/${actressName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}.jpg`}
                alt={actressName}
                className="photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/default-avatar.jpg";
                }}
              />
            </div>

            <div className="profile-info">
              <h1>{actressName}</h1>
              <p className="bio">
                Here is a brief bio about {actressName}. You can add more
                details or a description about the actress here.
              </p>
            </div>
          </div>
        </div>

        <div className="videos-section">
          <h2>Related Videos</h2>
          {filteredVideos.length > 0 ? (
            <div className="video-list">
              {filteredVideos.map((video, index) => (
                <div key={index} className="video-item">
                  <h3>{video.description}</h3>
                  <iframe
                    src={video.src}
                    title={video.description}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>No videos found for this actress.</p>
          )}
        </div>
      </div>

      <style jsx>{`
        .profile-container {
          padding: 40px 20px;
          background-color: #f7f7f7;
          color: #333;
          margin-top: 100px;
        }

        .profile-header {
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
        }

        .profile-box {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 20px;
          gap: 20px;
        }

        .profile-photo {
          width: 300px;
          height: 350px;
          overflow: hidden;
          border-radius: 10px;
          flex-shrink: 0;
        }

        .profile-photo .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .profile-info {
          flex-grow: 1;
        }

        .profile-info h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .profile-info .bio {
          font-size: 1.2rem;
          color: #555;
        }

        .videos-section h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .video-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .video-item {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          padding: 15px;
          text-align: center;
        }

        .video-item iframe {
          width: 100%;
          height: 200px;
          border-radius: 10px;
        }

        .video-item h3 {
          font-size: 1.2rem;
          margin-top: 10px;
          color: #2c3e50;
        }

        /* 🔽 Responsive styles for smaller screens */
        @media (max-width: 768px) {
          .profile-container{
            margin-top: 135px;
          }
          .profile-box {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .profile-photo {
            width: 100%;
            height: auto;
            max-width: 300px;
          }

          .profile-info h1 {
            font-size: 2rem;
          }

          .profile-info .bio {
            font-size: 1rem;
          }

          .videos-section h2 {
            font-size: 1.5rem;
          }

          .video-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
