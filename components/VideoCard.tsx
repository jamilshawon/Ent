import React from "react";
import { useRouter } from "next/router";

type VideoProps = {
  title: string;
  src: string;
  description: string;
  date?: string;
  info?: string;
  actress?: string;
};

export default function VideoCard({ title, src, description, date, info, actress }: VideoProps) {
  const router = useRouter();

  const handleClick = () => {
    const safeTitle = encodeURIComponent(title);
    router.push(`/video/${safeTitle}`);
  };

  return (
    <div className="card" onClick={handleClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleClick()}>
      <div className="videoBox">
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="info">
        <h3 className="title" title={title}>{title}</h3>
        <p className="description" title={description}>{description}</p>
        <div className="meta-line">
          {date && <span><strong>Date:</strong> {date}</span>}
          {info && <span><strong>Info:</strong> {info}</span>}
          {actress && (
            <span>
              <strong>Actress:</strong>{" "}
              <a
                href={`/actress/${actress.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
              >
                {actress}
              </a>
            </span>
          )}
        </div>
      </div>

      <style jsx>{`
        .card {
          background-color: #121212;
          border-radius: 12px;
          overflow: hidden;
          width: 320px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.6);
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          user-select: none;
        }

        .card:hover,
        .card:focus {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(0, 230, 210, 0.6);
          outline: none;
        }

        .videoBox {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
          border-bottom: 3px solid #00e6d2;
        }

        .videoBox iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 0 0 12px 12px;
          background-color: #000;
        }

        .info {
          padding: 16px 20px;
          color: #eee;
          font-family: 'Inter', sans-serif;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .title {
          margin: 0 0 8px;
          font-size: 1.1rem;
          font-weight: 600;
          color: #00e6d2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .description {
          flex-grow: 1;
          font-size: 0.9rem;
          color: #bbb;
          margin: 0 0 12px;
          line-height: 1.3;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .meta-line {
          font-size: 0.8rem;
          color: #999;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          font-weight: 500;
        }

        .meta-line strong {
          color: #00baff;
          margin-right: 4px;
        }

        a {
          color: #00e6d2;
          text-decoration: none;
          cursor: pointer;
        }

        a:hover,
        a:focus {
          text-decoration: underline;
          outline: none;
        }

        @media (max-width: 400px) {
          .card {
            width: 100%;
          }
          .description {
            -webkit-line-clamp: 2;
          }
        }
      `}</style>
    </div>
  );
}
