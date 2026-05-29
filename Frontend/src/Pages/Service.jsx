import React from "react";
import ServiceImg from "../assets/ServiceImg.png";
import "../Style/Img.css";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

const Service = () => {
  return (
    <div>
      <div className="ServiceImg">
        <img alt="ServiceImg" src={ServiceImg}></img>
      </div>
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;
