import { useState, useEffect } from "react";
import { getAllBeers } from "./service/fetchData";
import Header from "./components/Header/Header";
import BeerList from "./components/BeerList/BeerList";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then((data) => setBeers(data));
  }, []);

  return <BeerList beers={beers} />;
}

export default App;
