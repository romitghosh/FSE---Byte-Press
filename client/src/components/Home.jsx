import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Card from "./Card"; // Import the Card component
import "../styles/Card.css"; // Import the Card styles
import "../styles/Home.css"; // Import the Home styles
import model from "../assets/model.png";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("http://localhost:5000/api/all-news")
        .then((response) => setNews(response.data.data.articles))
        .catch((error) => console.error("Error fetching news:", error));
    }
  }, [isAuthenticated]);

  return (
    <div className="home-container">
      {isAuthenticated ? (
        <>
          <div className="card-container">
            {news.length > 0 ? (
              news.map((article, index) => (
                <Card
                  key={index}
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  link={article.url}
                />
              ))
            ) : (
              <>
                <h1>All News</h1>
                <p>Loading news...</p>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="home">
            <div className="desc">
              <h1>Welcome to Byte Press</h1>
              <p>
                🤖 "News aggregation done right. Minimal, meaningful, and
                machine-driven."<br></br>
                🧠 "Byte Press - Where every byte counts, and every headline
                matters."<br></br>⚡ "Lightning-fast news. Curated by code.
                Powered by purpose."<br></br>
                🔍 "From chaos to clarity — your smart news companion."<br></br>
                🌐 "All the news you need, in one byte-sized feed."
                <br></br>
              </p>
            </div>
            <div className="model">
              <img
                src={model}
                alt="Model"
                height="550"
                className="model-image"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
