import React from "react";
import AboutImg1 from "../assets/AboutImg.png";
import "../Style/About.css";

const About = () => {
  return (
    <div>
      <div className="AboutImg">
        <img alt="AboutImg" src={AboutImg1}></img>
        <div className="About-text"></div>
      </div>
    </div>
  );
};

export default About;
