import React from "react";
import Beer from "../Beer/Beer";
import Masonry from "react-responsive-masonry";
import "./BeerList.css";

const BeerList = ({ beers }) => {
  return beers ? (
    <Masonry columnsCount={3} >
      {beers.map((beer) => (
        <Beer beer={beer} key={beer.id} />
      ))}
    </Masonry>
  ) : <p>loading</p>;
};

export default BeerList;
