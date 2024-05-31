import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="container about-body">
      <div className="about-header">About E-Mandi</div>

      {/* cards */}
      <div className="about-content">
        <div className="about-card">
          <div className="about-card-img sunit"></div>
          <p className="about-card-text">
            Name: Sunit Pal <br /> Enroll No: 211B384
          </p>
        </div>
        <div className="about-description">
          <h3 className="about-subheader">Project Developer</h3>
          <p>
            I am a student at Jaypee University of Engineering and Technology,
            Guna, and I have developed and maintained the E-Mandi website.
          </p>
          <p>
            E-Mandi is an innovative online platform revolutionizing
            agricultural trading. It connects farmers directly with consumers,
            facilitating seamless transactions and eliminating middlemen.
            Through a user-friendly interface, farmers can showcase their
            produce, while consumers gain access to fresh, locally sourced
            goods. E-Mandi promotes fair pricing, transparency, and
            sustainability in the agricultural supply chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
