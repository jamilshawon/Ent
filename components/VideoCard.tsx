import React from "react";

type VideoProps = {
  title: string;
  src: string;
  description: string;
  date?: string;
  info?: string;
  actress?: string;
};

export default function VideoCard({ title, src, description, date, info, actress }: VideoProps) {
  return (
    <div className="video-card">
      <h2 title={title}>{title}</h2>
      <div className="video-wrapper">
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="video-details">
        <p className="description"><strong>Description:</strong> {description}</p>
        {date && <p><strong>Date:</strong> {date}</p>}
        {info && <p><strong>Info:</strong> {info}</p>}
        {actress && (
          <p>
            <strong>Actress:</strong>{" "}
            <a href={`/actress/${actress.toLowerCase().replace(/\s+/g, "-")}`}>
              {actress}
            </a>
          </p>
        )}
      </div>

      <style jsx>{`
        .video-card {
          width: 380px;                 /* Fixed width */
          height: 450px;                /* Fixed height */
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          backdrop-filter: blur(5px);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          padding: 20px;
          margin: 10px 0;
          display: flex;
          flex-direction: column;
          color: #fff;
          cursor: pointer;
          overflow: hidden;           /* Prevent overflow */
        }
        .video-card:hover {
          box-shadow:
            inset 0 10px 8px rgba(255, 255, 255, 0.05),
            inset 0 -8px 6px rgba(15, 176, 230, 0.8);
          transform: translateY(-5px);
        }

        h2 {
          font-size: 1.2rem;
          color: #01f4e0;
          margin: 0;
          white-space: nowrap;         /* Prevent wrapping */
          overflow: hidden;
          text-overflow: ellipsis;     /* Truncate long titles */
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;      /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border: 2px solid #01f4e0;
          border-radius: 10px;
          margin: 15px 0;
          flex-shrink: 0;              /* Prevent shrinking */
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-details {
          flex-grow: 1;                /* Take up remaining space */
          overflow: hidden;
          font-size: 0.95rem;
        }

        .description {
          max-height: 3em;             /* About 2 lines */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          margin: 10px 0;
        }

        .video-details p {
          margin: 5px 0;
        }

        .video-details strong {
          color: #01f4e0;
        }

        a {
          color: #01f4e0;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
