import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/Card.css";

function AllNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/all-news")
      .then((response) => setNews(response.data.data.articles.slice(0, 4))) // Limit to 4 cards
      .catch((error) => console.error("Error fetching all news:", error));
  }, []);

  return (
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
        <p>Loading news...</p>
      )}
    </div>
  );
}

export default AllNews;
