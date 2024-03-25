import React from "react";
import Card from "./product_card.jsx";

function product() {
  return (
    <div className="container">
      <div className="product row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default product;
