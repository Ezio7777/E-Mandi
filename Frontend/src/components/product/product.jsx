import React from "react";
import Card from "./product_card.jsx";

function product() {
  let cards = [];
  for (let i = 0; i < 5; i++) {
    cards.push(
      <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3">
        <Card />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="product row">{cards}</div>
    </div>
  );
}

export default product;
