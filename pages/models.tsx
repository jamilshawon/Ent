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
      <main className="models-container">
        <h1 className="models-title">Models</h1>
        <div className="models-list">
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
              <h3>{actress.name}</h3>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        .models-container {
          background: linear-gradient(135deg, #08080b 0%, #0f0f13 100%);
          min-height: 100vh;
          padding: 100px 40px 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #e0e0e6;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          box-sizing: border-box;
          width: 100vw;
        }

        .models-title {
          font-size: 3.8rem;
          font-weight: 900;
          margin-bottom: 70px;
          color: #00ffe3;
          text-align: center;
          letter-spacing: 2px;
          text-shadow:
            0 0 20px rgba(0, 255, 227, 0.8),
            0 0 40px rgba(0, 255, 227, 0.5);
          user-select: none;
        }

        .models-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 36px;
          width: 100%;
          max-width: 1200px;
          justify-items: center;
        }

        .model-card {
          background: linear-gradient(145deg, #111111, #1b1b1b);
          border-radius: 18px;
          padding: 10px;
          width: 280px;
          cursor: pointer;
          color: inherit;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow:
            0 12px 36px rgba(0, 255, 230, 0.2),
            inset 0 0 12px rgba(255, 255, 255, 0.06);
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            background 0.4s ease;
          user-select: none;
          will-change: transform, box-shadow;
          perspective: 900px;
        }

        .model-card:hover,
        .model-card:focus-visible {
          outline: none;
          transform: scale(1.1) rotateX(4deg) rotateY(-4deg);
          box-shadow:
            0 35px 55px rgba(0, 255, 230, 0.8),
            0 0 50px rgba(0, 255, 230, 0.9),
            inset 0 0 28px rgba(0, 255, 230, 0.45);
          background: linear-gradient(145deg, #00ffe3, #009d89);
          z-index: 20;
        }

        .model-photo {
          width: 100%;
          height: 460px;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, #232323, #121212);
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.35s ease;
          will-change: box-shadow;
        }

        .model-card:hover .model-photo,
        .model-card:focus-visible .model-photo {
          box-shadow:
            inset 0 0 30px rgba(0, 255, 230, 1),
            0 0 26px rgba(0, 255, 230, 0.4);
        }

        .model-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
          transition: transform 0.5s ease;
          will-change: transform;
        }

        .model-card:hover .model-photo img,
        .model-card:focus-visible .model-photo img {
          transform: scale(1.1);
        }

        h3 {
          margin: 20px 0 8px;
          font-size: 1.6rem;
          font-weight: 800;
          color: #00fff5;
          text-shadow:
            0 0 10px rgba(0, 255, 245, 0.9),
            0 0 18px rgba(0, 255, 245, 0.55);
          text-align: center;
          letter-spacing: 0.03em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          user-select: none;
        }

        @media (max-width: 1024px) {
          .models-container {
            padding: 80px 30px 50px;
          }
          .models-title {
            font-size: 3rem;
            margin-bottom: 50px;
          }
          .model-photo {
            height: 400px;
          }
          h3 {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 768px) {
          .models-container {
            padding: 70px 20px 40px;
          }
          .models-list {
            grid-template-columns: repeat(auto-fill, minmax(90vw, 1fr));
            max-width: 100%;
            gap: 28px;
          }
          .model-card {
            width: 90vw;
            max-width: 420px;
          }
          .model-photo {
            height: 320px;
          }
          .models-title {
            font-size: 2.4rem;
            margin-bottom: 40px;
          }
          h3 {
            font-size: 1.2rem;
            margin: 16px 0 6px;
          }
        }
      `}</style>
    </Layout>
  );
}
