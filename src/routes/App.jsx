import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Home";
import BeerDetail from "../components/BeerDetail/BeerDetail";
import Header from "../components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="beer/:id" element={<BeerDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
