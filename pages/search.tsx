import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { videoData } from "./video/videoData";

export default function SearchPage() {
  const router = useRouter();
  const { actress } = router.query;
  const searchTerm = (actress as string)?.toLowerCase() || "";

  const filteredVideos = Object.entries(videoData).filter(
    ([, data]) => data.actress?.toLowerCase().includes(searchTerm)
  );

  return (
    <Layout>
      <div className="container">
        <h1 className="search-heading">Search Results for "{actress}"</h1>

        {filteredVideos.length > 0 ? (
          filteredVideos.map(([title, video]) => (
            <div key={title}>
              <h2 className="title">{title}</h2>
              <div className="video-wrapper">
                <iframe
                  src={video.src}
                  title={title}
                  allowFullScreen
                  frameBorder="0"
                />
              </div>
              <div className="video-details">
                <p><strong>Description:</strong> {video.description}</p>
                {video.date && <p><strong>Date:</strong> {video.date}</p>}
                {video.info && <p><strong>Info:</strong> {video.info}</p>}
                {video.actress && <p><strong>Actress:</strong> {video.actress}</p>}
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", padding: "40px", fontSize: "1.2rem", color: "#ecf0f1" }}>
            No videos found for "{actress}"
          </p>
        )}
      </div>

      <style jsx>{`
        .container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: 40px 20px;
          background: linear-gradient(135deg, #3498db, #9b59b6);
          color: #fff;
          min-height: 100vh;
        }
        

          .search-heading {
    font-size: 2.2rem;
    margin: 20px 0 10px 0; /* smaller top & bottom space */
    color: #ffffff;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    margin: 10px 0 5px 0; /* less space above & below */
    color: #01f4e0;
    text-align: left;
  }
        .video-wrapper {
          position: relative;
          width: 100%;
          margin: 30px auto;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          background: #000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          border: 2px solid #01f4e0;
          top: -20px;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .video-details {
          background: #000;
          color: #ecf0f1;
          border-radius: 10px;
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          line-height: 1.6;
          margin-top: -35px;
        }

        .video-details p {
          margin: 10px 0;
          font-size: 1.1rem;
        }

        .video-details strong {
          color: #3498db;
        }

       @media (max-width: 768px) {
         
  .title {
    font-size: 1.2rem;     /* slightly larger for readability */
    margin-top: 10px;      /* reduced from 110px to 20px */
    margin-bottom: 20px;   /* optional: to reduce space before video */
  }
         .search-heading {
        margin-top: 95px;
            font-size: 1.4rem;
         }

  .video-details {
    padding: 15px;
  }

  .video-details p {
    font-size: 1rem;
  }
}

      `}</style>
    </Layout>
  );
}
