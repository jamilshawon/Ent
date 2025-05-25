import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { videoData } from "../data/videoData";
import VideoCard from "../components/VideoCard";

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const searchTerm = (q as string)?.toLowerCase() || "";

  // Filter videos by title or actress
  const filteredVideos = Object.entries(videoData).filter(
    ([title, data]) =>
      title.toLowerCase().includes(searchTerm) ||
      data.actress?.toLowerCase().includes(searchTerm)
  );

  return (
    <Layout>
      <main className="search-page">
        <h1 className="search-title">Search Results for: &quot;{q}&quot;</h1>

        {filteredVideos.length > 0 ? (
          <div className="video-grid">
            {filteredVideos.map(([title, video]) => (
              <VideoCard
                key={title}
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
          <p className="no-results">No results found for &quot;{q}&quot;</p>
        )}
      </main>

      <style jsx>{`
        .search-page {
          min-height: 100vh;
          padding: 120px 40px 60px;
          background: linear-gradient(135deg, #0a0a0a 0%, #121212 100%);
          color: #eee;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          width: 100vw;
        }

        .search-title {
          font-size: 2.8rem;
          font-weight: 700;
          margin-bottom: 40px;
          color: #00e6d2;
          text-align: center;
          text-shadow:
            0 0 12px rgba(0, 230, 210, 0.9),
            0 0 28px rgba(0, 230, 210, 0.5);
          user-select: none;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 28px;
          width: 100%;
          max-width: 1200px;
          justify-items: center;
          padding-bottom: 40px;
        }

        .no-results {
          color: #999;
          font-size: 1.3rem;
          margin-top: 50px;
          text-align: center;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .search-page {
            padding: 100px 30px 50px;
          }
          .search-title {
            font-size: 2.4rem;
          }
          .video-grid {
            gap: 22px;
          }
        }

        @media (max-width: 768px) {
          .search-page {
            padding: 90px 20px 40px;
            margin-top:40px;
          }
          .search-title {
            font-size: 2rem;
          }
          .video-grid {
            grid-template-columns: repeat(auto-fill, minmax(90vw, 1fr));
            max-width: 100%;
            gap: 20px;
          }
        }
      `}</style>
    </Layout>
  );
}
