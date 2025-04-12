import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Card from "./Card"; // Import the Card component
import "../styles/Card.css"; // Import the Card styles

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
          <h1>Welcome to Byte Press</h1>
          <p>Your personalized news aggregator.</p>
        </>
      )}
    </div>
  );
}

export default Home;
