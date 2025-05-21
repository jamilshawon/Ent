import Link from "next/link";
import Layout from "../components/Layout";
import { videoData } from "./video/videoData";


// Define an array with actress information
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
          padding: 20px;
          text-align: center;
        }

        .models-title {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #333;
        }

        .models-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .model-card {
          margin: 20px;
          width: 250px;
          text-align: center;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .model-card:hover {
          transform: translateY(-10px);
        }

        .model-photo {
          width: 100%;
          height: 200px;
          background-color: #f0f0f0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .model-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .model-card h3 {
          font-size: 1.2rem;
          margin: 15px;
          color: #333;
        }

        .model-card a {
          text-decoration: none;
          color: inherit;
        }

        .model-card a:hover h3 {
          color: #3498db;
        }
      `}</style>
    </Layout>
  );
}