import React from "react";
import "../styles/hero.css";

const Hero = (props) => {
  return (
    <>
      <div className="Hero_Body">
        <div className="hero-img"></div>
        <div className="hero-text">
          <h1>"Sow, Grow, Harvest, Repeat."</h1>
          <p>Choose Your Fresh Food</p>
          <button className="btn travel-btn">Explore</button>
        </div>
      </div>
    </>
  );
};
export default Hero;
