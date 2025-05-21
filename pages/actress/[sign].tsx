import { useRouter } from "next/router";
import Layout from "../../components/Layout"; // Corrected import path
// Import the video data
import { videoData } from "../video/videoData";


export default function ActressPage() {
  const router = useRouter();
  const { sign } = router.query;  // Get the actress name from the URL

  // Convert the sign (slug) back to the actress name by replacing hyphens with spaces
  const actressName = Array.isArray(sign) ? sign[0].replace(/-/g, " ") : sign?.replace(/-/g, " ") || "";

  // Filter videos by the actress name
  const filteredVideos = Object.values(videoData).filter(
    (video) => video.actress && video.actress.toLowerCase() === actressName.toLowerCase()
  );

  return (
    <Layout>
      <div className="actress-container">
        <h1>Videos for {actressName}</h1>
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

      <style jsx>{`
        .actress-container {
          padding: 20px;
          text-align: center;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .video-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .video-item {
          margin: 20px;
          width: 300px;
        }

        iframe {
          width: 100%;
          height: 200px;
        }
      `}</style>
    </Layout>
  );
}