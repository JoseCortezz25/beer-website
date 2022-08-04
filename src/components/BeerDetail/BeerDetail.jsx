import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBeer } from "../../service/fetchData";

const BeerDetail = () => {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneBeer(id).then((data) => setBeer(data[0]));
  }, [])
  
  console.log(beer);

  console.log(id);
  return (
    <section>
      <h1>{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>{beer.brewers_tips}</p>
    </section>
  );
};

export default BeerDetail;
