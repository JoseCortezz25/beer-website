import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Home"
import BeerDetail from "../components/BeerDetail/BeerDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BeerDetail />} />
      </Routes>
    </>
  );
};

export default App;
