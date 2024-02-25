import React from "react";
import "../styles/about.css";

const about = () => {
  return (
    <div className="container  about_body">
      <div className="h1">About Us</div>
      <div className="h3">
        E-Mandi is an innovative online platform revolutionizing agricultural
        trading. It connects farmers directly with consumers, facilitating
        seamless transactions and eliminating middlemen. Through a user-friendly
        interface, farmers can showcase their produce, while consumers gain
        access to fresh, locally sourced goods. E-Mandi promotes fair pricing,
        transparency, and sustainability in the agricultural supply chain.
      </div>
      <br />
      <div className="h2">Team Members</div>
      {/* cards */}
      <div className="row about-img">
        <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
          <div className="card5 vedi"></div>
          <p class="text1">
            Name : Vedi Gupta <br /> Enroll No. : 211B343
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
          <div className="card5 sunit"></div>
          <p class="text1">
            Name : Sunit Pal <br /> Enroll No. : 211B384
          </p>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 about-card-img">
          <div className="card5 soumya"></div>
          <p class="text1">
            Name : Soumya Gupta <br /> Enroll No. : 211B317
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
