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
    background-color: #000; /* match video page black bg */
    min-height: 100vh;
    color: #f5f5f5;
    font-family: 'Segoe UI', sans-serif;
  }

  .models-title {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #fff;
    text-align: center;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
  }

  .models-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
  }

  .model-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 4px;
    backdrop-filter: blur(5px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    width: 300px;
  }

  .model-card:hover {
    transform: translateY(-8px);
    box-shadow:
      0 15px 30px rgba(15, 176, 230, 0.4),   /* blue glow */
      0 0 25px rgba(15, 176, 230, 0.6),      /* soft outer glow */
      0 0 40px rgba(15, 176, 230, 0.4);      /* additional ambient */
  }

  .model-photo {
    width: 100%;
    height: 480px; /* Reduced height for consistency with video cards */
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    overflow: hidden;
  }

  .model-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .model-card h3 {
    font-size: 1.2rem;
    margin: 12px;
    color: #f5f5f5;
    text-align: center;
  }

  .model-card a {
    text-decoration: none;
    color: inherit;
  }

  .model-card a:hover h3 {
    color: #3498db; /* blue accent similar to video page */
  }

  @media (max-width: 768px) {
    .model-card {
      width: 90%;
    }

    .models-container {
      padding-top: 100px;
    }
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
