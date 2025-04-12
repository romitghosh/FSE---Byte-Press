import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/Card.css";

function TopHeadlines() {
  const [headlines, setHeadlines] = useState([]);
  const [category, setCategory] = useState("business");

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/top-headlines?category=${category}`)
      .then((response) => {
        if (response.data.success) {
          setHeadlines(response.data.data.articles || []);
        }
      })
      .catch((error) => {
        console.error("Error fetching top headlines:", error);
      });
  }, [category]);

  return (
    <div>
      <div className="category-selector">
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="card-container">
        {headlines.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.urlToImage}
            link={article.url}
          />
        ))}
      </div>
    </div>
  );
}

export default TopHeadlines;
