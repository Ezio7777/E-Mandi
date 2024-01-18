import React from "react";
import "../styles/hero.css";

const Hero = (props) => {
  return (
    <>
      <div className="Hero_Body">
        <div className="hero-img"></div>
        <div className="hero-text">
          <h1>Your Journey Your Story</h1>
          <p>Choose Your Destination</p>
          <button className="btn travel-btn">Travel Plan</button>
        </div>
      </div>
    </>
  );
};
export default Hero;
