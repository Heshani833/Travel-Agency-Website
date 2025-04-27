import React from "react";
import AboutImg1 from "../assets/AboutImg.png";
import "../Style/Img.css";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

const About = () => {
  return (
    <div>
      <div className="AboutImg">
        <img alt="AboutImg" src={AboutImg1}></img>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
