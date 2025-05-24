// pages/actress/[name].tsx
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { modelsData } from "../../data/models";
import { videoData } from "../../data/videoData";
import VideoCard from "../../components/VideoCard";

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
    ([, video]) => video.actress === actress.name
  );

  return (
    <Layout>
      <main className="profile-page">
        <section className="profile-section">
          <div className="profile-pic-wrapper" aria-label={`${actress.name} profile picture`}>
            <img
              src={actress.image}
              alt={actress.name}
              className="profile-pic"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="profile-info">
            <h1>{actress.name}</h1>
            <p className="bio">{actress.bio}</p>
            <div className="stats" aria-label="Video stats">
              <span><strong>{relatedVideos.length}</strong> Videos</span>
              <span>Likes: --</span>
              <span>Dislikes: --</span>
              <span>Comments: --</span>
            </div>
          </div>
        </section>

        <section className="videos-section">
          <h2>Latest Videos</h2>
          {relatedVideos.length > 0 ? (
            <div className="video-list">
              {relatedVideos.map(([title, video], index) => (
                <VideoCard
                  key={index}
                  title={title}
                  src={video.src}
                  description={video.description}
                  date={video.date}
                  info={video.info}
                  actress={video.actress}
                />
              ))}
            </div>
          ) : (
            <p className="no-videos">No related videos available.</p>
          )}
        </section>
      </main>

      <style jsx>{`
        .profile-page {
          background-color: #12121f;
          color: #e0e0e6;
          min-height: 100vh;
          width: 100vw;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 100px 60px 60px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }

        .profile-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 60px;
          justify-content: center;
          padding-bottom: 50px;
          border-bottom: 1px solid #2a2a3d;
          width: 100%;
        }

        .profile-pic-wrapper {
          flex-shrink: 0;
          width: 280px;
          height: 350px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #1e1e3f;
          box-shadow: 0 0 30px #3498dbaa;
          transition: box-shadow 0.3s ease;
        }

        .profile-pic-wrapper:hover {
          box-shadow: 0 0 40px #3498dbff;
        }

        .profile-pic {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .profile-info {
          max-width: 800px;
          text-align: center;
          flex-grow: 1;
          padding: 0 20px;
        }

        .profile-info h1 {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
          color: #3498db;
          letter-spacing: 1.2px;
          text-shadow: 0 0 8px #3498dbbb;
        }

        .bio {
          font-size: 1.25rem;
          line-height: 1.7;
          color: #b0b0c0;
          margin-bottom: 28px;
          font-weight: 400;
          user-select: text;
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
        }

        .stats {
          display: flex;
          gap: 30px;
          justify-content: center;
          font-size: 1.1rem;
          color: #888aa9;
          font-weight: 600;
          user-select: none;
          flex-wrap: wrap;
        }

        .stats span strong {
          color: #eee;
          font-weight: 700;
        }

        .videos-section {
          margin-top: 60px;
          width: 100%;
        }

        .videos-section h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 35px;
          color: #3498db;
          text-align: center;
          text-shadow: 0 0 8px #3498dbaa;
        }

        .video-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 28px;
          justify-items: center;
          width: 100%;
        }

        .no-videos {
          color: #888aa9;
          font-style: italic;
          text-align: center;
          margin-top: 50px;
          font-size: 1.2rem;
        }

        .not-found {
          padding: 80px 20px;
          text-align: center;
          color: #ff4c4c;
          font-weight: 700;
          font-size: 1.8rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        @media (max-width: 1024px) {
          .profile-page {
            padding: 80px 40px 40px;
          }

          .profile-pic-wrapper {
            width: 240px;
            height: 300px;
          }

          .profile-info h1 {
            font-size: 2.5rem;
          }

          .bio {
            font-size: 1.1rem;
          }

          .videos-section h2 {
            font-size: 2rem;
            margin-bottom: 28px;
          }

          .video-list {
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .profile-page {
            padding: 60px 20px 40px;
            margin-top: 80px;
          }

          .profile-section {
            flex-direction: column;
            gap: 40px;
            padding-bottom: 40px;
          }

          .profile-pic-wrapper {
            width: 200px;
            height: 260px;
          }

          .profile-info h1 {
            font-size: 2rem;
          }

          .bio {
            font-size: 1rem;
            max-width: 100%;
            margin: 0 auto;
          }

          .stats {
            gap: 20px;
            flex-wrap: wrap;
          }

          .videos-section h2 {
            font-size: 1.75rem;
            margin-bottom: 24px;
          }

          .video-list {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
