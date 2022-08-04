import React from "react";
import Beer from "../Beer/Beer";
import Masonry from "react-responsive-masonry";

const BeerList = ({ beers }) => {
  return (
    <Masonry columnsCount={3} gutter={20}>
      {beers.map((beer) => (
        <Beer beer={beer} key={beer.id} />
      ))}
    </Masonry>
  );
};

export default BeerList;
