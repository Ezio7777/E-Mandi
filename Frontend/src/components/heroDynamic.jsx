import React from "react";
import "../styles/heroDynamic.css";
import MarketHero from "../images/Hero/slider-1.png";

function heroDynamic() {
  return (
    <>
      <div className="Hero_Body">
        <div className="hero-img">
          <img src={MarketHero} alt="" />
        </div>
        <div className="hero-text">
          <h1>"Sow, Grow, Harvest, Repeat."</h1>
          <p>Choose Your Fresh Food</p>
        </div>
      </div>
    </>
  );
}

export default heroDynamic;
