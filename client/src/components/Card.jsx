import React from "react";
import "../styles/Card.css";

function Card({ title, description, imageUrl, link }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
