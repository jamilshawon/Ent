import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { videoData } from "../data/videoData";
import VideoCard from "../components/VideoCard"; // Import the VideoCard component

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const searchTerm = (q as string)?.toLowerCase() || "";

  // Filter the video data by title and actress
  const filteredVideos = Object.entries(videoData).filter(
    ([title, data]) =>
      title.toLowerCase().includes(searchTerm) || // Match title
      data.actress?.toLowerCase().includes(searchTerm) // Match actress
  );

  return (
    <Layout>
      <div className="search-page">
        <h1>Search Results for: &quot;{q}&quot;</h1>

        {filteredVideos.length > 0 ? (
          filteredVideos.map(([title, video]) => (
            <VideoCard
              key={title}
              title={title}
              src={video.src}
              description={video.description}
              date={video.date}
              info={video.info}
              actress={video.actress}
            />
          ))
        ) : (
          <p className="no-results">No results found for &quot;{q}&quot;</p>
        )}

        <style jsx>{`
          .search-page {
            padding: 20px;
            background-color: #000;
            color: #f5f5f5;
            min-height: 100vh;
            font-family: 'Segoe UI', sans-serif;
            margin-top: 100px; /* Adjusted space from the top */
          }

          h1 {
            font-size: 1.8rem;
            margin-bottom: 10px; /* reduce space below heading */
            text-align: center;
          }

          .no-results {
            color: #aaa;
            text-align: center;
            margin-top: 30px;
            font-size: 1.2rem;
          }
        `}</style>
      </div>
    </Layout>

  );
}
