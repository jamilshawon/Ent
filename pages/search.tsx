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
      <div style={{ padding: "30px" }}>
        <h1>Search Results for: &quot;{q}&quot;</h1>

        {filteredVideos.length > 0 ? (
          filteredVideos.map(([title, video]) => (
            // Use the VideoCard component to render each video
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
          <p>No results found for &quot;{q}&quot;</p>
        )}
      </div>
    </Layout>
  );
}
