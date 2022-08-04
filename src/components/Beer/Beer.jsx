import React from "react";
import "./Beer.css";

const Beer = ({ beer: { name, tagline, description, image_url } }) => {
  
  return (
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
  );
};

export default Beer;
