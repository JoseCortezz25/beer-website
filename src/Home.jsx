import { useState, useEffect } from "react";
import { getAllBeers } from "./service/fetchData";
import Header from "./components/Header/Header";
import BeerList from "./components/BeerList/BeerList";
import "./App.css";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then((data) => setBeers(data));
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <div className="container">
          <BeerList beers={beers} />
        </div>
      </div>
    </>
  );
}

export default App;
