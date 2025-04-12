import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../styles/Card.css";

function CountryNews() {
  const [countryNews, setCountryNews] = useState([]);
  const [country, setCountry] = useState("us"); // Default country code

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/country/${country}`)
      .then((response) => setCountryNews(response.data.data.articles || []))
      .catch((error) => console.error("Error fetching country news:", error));
  }, [country]);

  return (
    <div>
      <div className="category-selector">
        <label htmlFor="country">Select Country: </label>
        <select
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="us">United States</option>
          <option value="gb">United Kingdom</option>
          <option value="in">India</option>
          <option value="au">Australia</option>
          <option value="ca">Canada</option>
        </select>
      </div>
      <div className="card-container">
        {countryNews.length > 0 ? (
          countryNews.map((article, index) => (
            <Card
              key={index}
              title={article.title}
              description={article.description}
              imageUrl={article.urlToImage}
              link={article.url}
            />
          ))
        ) : (
          <p>Loading country news...</p>
        )}
      </div>
    </div>
  );
}

export default CountryNews;
