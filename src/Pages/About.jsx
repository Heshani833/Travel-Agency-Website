import React from "react";
import AboutImg1 from "../assets/AboutImg.png";
import "../Style/Img.css";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div>
      <div className="AboutImg">
        <img alt="AboutImg" src={AboutImg1}></img>
        <div className="About-text"></div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
