import React from "react";
import { Link } from "react-router-dom";
import "./Beer.css";

const Beer = ({ beer: { name, tagline, description, image_url, id } }) => {
  return (
    <Link to={`/beer/${id}`}>
      <div className="Beer">
        <div className="Beer__images">
          <img src={image_url} alt={name} />
        </div>
        <div className="Beer__content">
          <h2>{name}</h2>
          <p>{tagline}</p>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Beer;
