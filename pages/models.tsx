import Link from "next/link";
import Layout from "../components/Layout";

const actresses = [
  { name: "Cindy Craves", image: "/actresses/cindy-craves.jpg" },
  { name: "Magdelene St Michaels", image: "/actresses/magdelene-st-michaels.jpg" },
  { name: "Raylene", image: "/actresses/raylene.jpg" },
  { name: "Tanya Tate", image: "/actresses/tanya-tate.jpg" },
];

export default function Models() {
  return (
    <Layout>
      <main className="models-page">
        <h1 className="page-title">Models</h1>
        <div className="models-grid">
          {actresses.map((actress, index) => (
            <Link
              href={`/actress/${actress.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={index}
              className="model-card"
              aria-label={`View profile of ${actress.name}`}
              tabIndex={0}
            >
              <div className="model-photo">
                <img src={actress.image} alt={actress.name} loading="lazy" />
              </div>
              <h3 className="model-name">{actress.name}</h3>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        .models-page {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
          min-height: 100vh;
          padding: 100px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #e0e6f1;
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .page-title {
          font-size: 3.8rem;
          font-weight: 800;
          margin-bottom: 70px;
          color: #76e2f6;
          text-shadow: 0 0 10px #76e2f6aa;
          letter-spacing: 2px;
          user-select: none;
        }

        .models-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 36px;
          width: 100%;
          max-width: 1200px;
        }

        .model-card {
          background: linear-gradient(145deg, #1b2733, #223447);
          border-radius: 20px;
          box-shadow:
            0 8px 20px rgba(118, 226, 246, 0.3),
            inset 0 0 12px rgba(118, 226, 246, 0.15);
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: 
            box-shadow 0.35s ease, 
            transform 0.35s ease,
            background 0.35s ease;
          will-change: transform, box-shadow, background;
          user-select: none;
          perspective: 1000px;
        }

        .model-card:hover,
        .model-card:focus-visible {
          background: linear-gradient(145deg, #76e2f6, #1f4d6e);
          box-shadow:
            0 16px 40px rgba(118, 226, 246, 0.7),
            0 0 30px #76e2f6cc,
            inset 0 0 24px #76e2f6bb;
          transform: translateY(-10px) rotateX(5deg) rotateY(-5deg);
          outline: none;
          z-index: 10;
        }

        .model-photo {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
          box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.6);
          transition: transform 0.5s ease;
          will-change: transform;
          background: #101f2d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .model-card:hover .model-photo,
        .model-card:focus-visible .model-photo {
          transform: scale(1.1);
          box-shadow:
            inset 0 0 35px #76e2f6dd,
            0 0 25px #76e2f6cc;
        }

        .model-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 20px 20px 0 0;
          transition: transform 0.5s ease;
          will-change: transform;
          user-select: none;
          pointer-events: none;
        }

        .model-name {
          padding: 20px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #a0d8f7;
          text-align: center;
          text-shadow:
            0 0 8px #76e2f6aa,
            0 0 15px #76e2f6bb;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: 0.04em;
        }

        @media (max-width: 1024px) {
          .models-page {
            padding: 80px 30px;
          }
          .page-title {
            font-size: 3rem;
            margin-bottom: 50px;
          }
          .models-grid {
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 28px;
          }
        }

        @media (max-width: 640px) {
          .models-page {
            padding: 60px 20px;
            margin-top: 40px;
          }
          .page-title {
            font-size: 2.4rem;
            margin-bottom: 40px;
          }
          .models-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .model-name {
            font-size: 1.3rem;
            padding: 18px 16px;
          }
        }
      `}</style>
    </Layout>
  );
}
