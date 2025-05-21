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
      <h2>{title}</h2>
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
        <p><strong>Description:</strong> {description}</p>
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
          background: #000;
          padding: 20px;
          border-radius: 10px;
          margin: 30px 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          color: #fff;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border: 2px solid #01f4e0;
          border-radius: 10px;
          margin: 20px 0;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .video-details p {
          margin: 10px 0;
          font-size: 1rem;
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
