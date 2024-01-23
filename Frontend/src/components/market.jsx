import React from "react";
import Market_Nav from "./market_Nav";
import Card from "./market_card";
import "../styles/market.css";

function market() {
  return (
    <>
      <Market_Nav />
      <div className="container">
        <h1 className="market_header">Vegetables</h1>
        <div>
          <Card />
        </div>
      </div>
    </>
  );
}

export default market;
