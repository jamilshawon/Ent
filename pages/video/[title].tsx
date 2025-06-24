import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function VideoPage() {
  const router = useRouter();
  const { title } = router.query;

  const videoData: Record<
    string,
    {
      src: string;
      description: string;
      date?: string;
      info?: string;
    }
  > = {
    "Rockstar(2011)": {
      src: "https://dh-headlines-shut-loved.trycloudflare.com/Rockstar.mp4", // ✅ Streamtape embed link
      description: "A musical journey of a troubled artist finding meaning through music.",
      date: "2011-11-11",
      info: "Starring Ranbir Kapoor. Directed by Imtiaz Ali.",
    },
    "Vikings": {
      src: "https://www.youtube.com/embed/9GgxinPwAGc",
      description: "A legendary Norse saga brought to the screen.",
      date: "2013-03-03",
      info: "Starring Travis Fimmel as Ragnar Lothbrok.",
    },
    "Video C": {
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A classic viral internet music video.",
      date: "1987-07-27",
      info: "Rick Astley's famous hit 'Never Gonna Give You Up'.",
    },
    "Video D": {
      src: "https://www.youtube.com/embed/JGwWNGJdvx8",
      description: "Ed Sheeran's romantic hit single.",
      date: "2017-01-06",
      info: "From the album 'Divide'.",
    },
    // Add more entries here...
  };

  const video = videoData[title as string];

  return (
    <Layout>
      {video ? (
        <>
          <div className="container">
            <h1 className="title">{title}</h1>
            <div className="video-wrapper">
              <iframe
                src={video.src}
                title={title as string}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="video-details">
              <p><strong>Description:</strong> {video.description}</p>
              {video.date && <p><strong>Date:</strong> {video.date}</p>}
              {video.info && <p><strong>Info:</strong> {video.info}</p>}
            </div>
          </div>

          <style jsx>{`
            .container {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 40px 20px;
              background: linear-gradient(135deg, #3498db, #9b59b6);
              color: #fff;
              min-height: 100vh;
            }

            .title {
              text-align: left;
              font-size: 2.5rem;
              font-weight: 600;
              color: #ffffff; /* keep white */
              text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);  
              margin-top: 55px;
            }
            .video-wrapper {
            position: relative;
             width: 100%;
             margin: 30px auto; /* This centers it */
             padding-bottom: 56.25%; /* 16:9 aspect ratio */
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
              .video-wrapper{
                width: 100%;
                height: 100%;
              }
              .video-wrapper iframe {
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
              }

              .title {
                font-size: 1.8rem;
                 color: #ecf0f1; 
              }

              .video-details {
                padding: 15px;
                
              }

              .video-details p {
                font-size: 1rem;
              }
            }
          `}</style>
        </>
      ) : (
        <p style={{ textAlign: "center", padding: "40px", fontSize: "1.2rem", color: "#ecf0f1" }}>
          Sorry, no video found for this title.
        </p>
      )}
    </Layout>
  );
}
