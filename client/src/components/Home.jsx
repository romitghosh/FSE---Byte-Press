import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Home() {
  const { isAuthenticated } = useContext(AuthContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      axios
        .get("/api/all-news")
        .then((response) => setNews(response.data.data.articles))
        .catch((error) => console.error("Error fetching news:", error));
    }
  }, [isAuthenticated]);

  return (
    <div className="home-container">
      {isAuthenticated ? (
        <>
          <h1>All News</h1>
          <div className="news-container">
            {news.length > 0 ? (
              news.map((article, index) => (
                <div key={index} className="news-article">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              ))
            ) : (
              <p>Loading news...</p>
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
