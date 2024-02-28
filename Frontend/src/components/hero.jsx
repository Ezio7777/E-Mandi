import React from "react";
import "../styles/hero.css";
import { Link, useNavigate } from "react-router-dom";

const Hero = (props) => {
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="Hero_Body">
        <div className="hero-img"></div>
        <div className="hero-text">
          {/* <h1>"Sow, Grow, Harvest, Repeat."</h1>
          <p>Choose Your Fresh Food</p> */}
          {role == "buyer" ? (
            <Link className="btn buy-btn" to="/market">
              Let's Buy <i class="fa-solid fa-circle-arrow-right"></i>
            </Link>
          ) : (
            <Link className="btn buy-btn" to="/market">
              List Item <i class="fa-solid fa-circle-arrow-right"></i>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Hero;
