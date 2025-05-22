import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { modelsData } from "../../data/models";
import { videoData } from "../../data/videoData";
import VideoCard from "../../components/VideoCard";

interface Actress {
  name: string;
  image: string;
  bio: string;
}

interface Video {
  src: string;
  description: string;
  date: string;
  info: string;
  actress: string;
}

export default function ActressPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!name || typeof name !== "string") {
    return (
      <Layout>
        <div className="not-found">
          <h1>Actress not found</h1>
        </div>
      </Layout>
    );
  }

  const actress = modelsData[name];

  if (!actress) {
    return (
      <Layout>
        <div className="not-found">
          <h1>Actress not found</h1>
        </div>
      </Layout>
    );
  }

  const relatedVideos = Object.entries(videoData).filter(
    ([, video]: [string, Video]) => video.actress === actress.name
  );

  return (
    <Layout>
      <div className="profile-page">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-pic-wrapper">
            <img
              src={actress.image}
              alt={actress.name}
              className="profile-pic"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h1>{actress.name}</h1>
          <p className="bio">{actress.bio}</p>
          <div className="stats">
            <span><strong>{relatedVideos.length}</strong> Videos</span>
            <span>Likes: --</span>
            <span>Dislikes: --</span>
            <span>Comments: --</span>
          </div>
        </div>

        {/* Videos Section */}
        <div className="videos-section">
          <h2>Latest Videos</h2>
          <div className="video-list">
            {relatedVideos.length > 0 ? (
              relatedVideos.map(([title, video], index) => (
                <div className="video-card-wrapper" key={index}>
                  <VideoCard
                    title={title}
                    src={video.src}
                    description={video.description}
                    date={video.date}
                    info={video.info}
                    actress={video.actress}
                  />
                </div>
              ))
            ) : (
              <p className="no-videos">No related videos available.</p>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .profile-page {
          background-color: #000;
          color: #f5f5f5;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          padding-top: 110px; /* Adjusted space from the top */
        }

        .profile-section {
          position: relative;
          padding-top: 30px;
          display: flex;
          justify-content: center;
        }

        .profile-pic-wrapper {
          width: 200px; /* Increased width to make it more oval */
          height: 250px; /* Height is greater than the width to create the egg shape */
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #000;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
        }

        .profile-pic {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Ensure the image covers the wrapper */
        }

        .profile-info {
          padding: 70px 30px 20px;
          background-color: #111;
          text-align: center;
        }

        .profile-info h1 {
          font-size: 2rem;
          color: #fff;
          margin-bottom: 10px;
        }

        .bio {
          font-size: 1rem;
          color: #aaa;
          max-width: 600px;
          margin: 0 auto;
        }

        .stats {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          font-size: 0.95rem;
          color: #bbb;
          justify-content: center;
        }

        .videos-section {
          padding: 20px 10px; 
          background-color: #000;
        }

        .videos-section h2 {
          font-size: 1.6rem;
          color: #f5f5f5;
          margin-bottom: 20px;
        }

        .video-list {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .video-card-wrapper {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          padding: 2px;
          backdrop-filter: blur(5px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
          transition: transform 0.2s ease;
          width: 300px;
        }

       .video-card-wrapper:hover {
         box-shadow:
         inset 0 10px 8px rgba(255, 255, 255, 0.05),
         inset 0 -8px 6px rgb(15, 176, 230, 0.8);
}


        .no-videos {
          color: #aaa;
        }

        .not-found {
          padding: 50px;
          text-align: center;
          color: #fff;
        }

        @media (max-width: 768px) {
          .profile-pic-wrapper {
            width: 220px; /* Slightly bigger for smaller screens */
            height: 270px; /* Maintain the egg shape */
          }

          .profile-info {
            padding-top: 5px;
          }
          .video-card-wrapper

          .stats {
            justify-content: center;
            flex-wrap: wrap;
          }

          .video-list {
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
        }
      `}</style>
    </Layout>
  );
}
