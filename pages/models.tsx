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
      <div className="models-container">
        <h1 className="models-title">Models</h1>
        <div className="models-list">
          {actresses.map((actress, index) => (
            <div key={index} className="model-card">
              <Link href={`/actress/${actress.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="model-photo">
                  <img src={actress.image} alt={actress.name} />
                </div>
                <h3>{actress.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .models-container {
          padding: 50px 20px;
          background-color: #111;
          min-height: 100vh;
          color: #f5f5f5;
          font-family: 'Segoe UI', sans-serif;
        }

        .models-title {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #fff;
          text-align: center;
        }

        .models-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .model-card {
          background-color: #222;
          border-radius: 12px;
          overflow: hidden;
          width: 260px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .model-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }

        .model-photo {
          width: 100%;
          height: 360px;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .model-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .model-card h3 {
          font-size: 1.2rem;
          margin: 16px;
          color: #f5f5f5;
          text-align: center;
        }

        .model-card a {
          text-decoration: none;
          color: inherit;
        }

        .model-card a:hover h3 {
          color: #61dafb;
        }

        @media (max-width: 768px) {
          .model-card {
            width: 90%;
          }

          .models-container {
            padding-top: 100px;
          }
        }
      `}</style>
    </Layout>
  );
}
