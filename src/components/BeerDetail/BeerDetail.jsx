import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneBeer } from "../../service/fetchData";
import Loading from "../Loading/Loading";
import "./BeerDetail.css";

const BeerDetail = () => {
  const [beer, setBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getOneBeer(id).then((data) => setBeer(data[0]));
  }, []);

  return beer && beer.boil_volume ? (
    <section className="BeerDetails">
      <div className="BeerDetails__image">
        <img src={beer.image_url} alt="" />
      </div>
      <div className="BeerDetails__content">
        <h1>{beer.name}</h1>
        <p className="tagline">{beer.tagline}</p>
        <p>
          <b>First brewed:</b> {beer.first_brewed}
        </p>
        <p>
          <b>Contributed by:</b> {beer.contributed_by}
        </p>
        <div className="BeerDetails__specifics">
          <p>
            <b>Ibu:</b> {beer.ibu}
          </p>
          <p>
            <b>Abv:</b> {beer.abv}
          </p>
          <p>
            <b>Ebc:</b> {beer.ebc}
          </p>
          <p>
            <b>Ph:</b> {beer.ph}
          </p>
          <p>
            <b>Srm:</b> {beer.srm}
          </p>
          <p>
            <b>Boil volume:</b> {beer.boil_volume?.value}{" "}
            {beer.boil_volume?.unit}
          </p>
          <p>
            <b>Volume:</b> {beer.volume?.value}{" "}
            {beer.volume?.unit}
          </p>
        </div>
        <br />
        <p>{beer.description}</p>
        <h2>🚀 Brewers tips</h2>
        <p>{beer.brewers_tips}</p>
        <h2>🥘 Food pairing</h2>
        <ul className="FoodPairing">
          {beer.food_pairing?.map((food) => (
            <li>{food}</li>
          ))}
        </ul>
        <h2>🥗 Ingredients</h2>
        <h3>Hops</h3>
        {beer.ingredients.hops?.map((hop) => (
          <div className="SlotIngredient">
            <span>
              <p>{hop.name}</p>
              <p>{hop.attribute}</p>
            </span>
            <p>
              {hop.amount.value} {hop.amount.unit}
            </p>
          </div>
        ))}
        <h3>Malt</h3>
        {beer.ingredients.malt?.map((malt) => (
          <div className="SlotIngredient">
            <p>{malt.name}</p>
            <p>
              {malt.amount.value} {malt.amount.unit}
            </p>
          </div>
        ))}
        <p>{beer.ingredients.yeast}</p>
        <h2>🏗 Method</h2>
        <h3>Fermentation</h3>
        <div className="SlotIngredient">
          <p>Temperature:</p>
          <p>{beer?.method?.fermentation.temp.value}{" "}
            {beer.method.fermentation.temp.unit}</p>
        </div>
        <div className="SlotIngredient">
          <p>Mash temperature</p>
          <p>{beer?.method?.mash_temp[0].temp.value}{" "}
          {beer.method.mash_temp[0].temp.unit}</p>
        </div>
      </div>
    </section>
  ) : (
    <Loading />
  );
};

export default BeerDetail;
