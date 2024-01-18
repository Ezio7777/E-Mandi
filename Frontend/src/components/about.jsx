import React from "react";
import "../styles/about.css";

const about = () => {
  return (
    <div className="container  about_body">
      <div className="h1">About Us</div>
      <div className="h3">
        "Travelista" will offer users a seamless travel experience through its
        MERN stack platform. Users can register, log in, and manage profiles
        securely. Tour providers can create, edit, and delete tours, with users
        having the ability to search, book, and review these experiences. The
        platform includes a messaging system for user-provider interaction and
        implements robust security measures. A responsive design ensures a
        smooth experience across devices, while an admin dashboard monitors user
        and tour activities. The system also undergoes rigorous testing for
        reliability and scalability. Clear documentation aids developers,
        contributing to successful deployment and ongoing maintenance of a
        user-friendly travel booking solution.
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
