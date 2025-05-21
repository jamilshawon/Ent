import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { modelsData } from "../../data/models";
import { videoData } from "../../data/videoData";
import VideoCard from "../../components/VideoCard"; // ✅ Import the new component

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

        <h2>Latest Videos</h2>
        <div className="video-list">
          {relatedVideos.length > 0 ? (
            relatedVideos.map(([title, video], index) => (
              <VideoCard
                key={index}
                title={title}
                src={video.src}
                description={video.description}
                date={video.date}
                info={video.info}
                actress={video.actress}
              />
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
          flex-direction: column;
          align-items: center;
        }

        @media (max-width: 768px) {
          .actress-container {
            margin-top: 115px;
          }
        }
      `}</style>
    </Layout>
  );
}
