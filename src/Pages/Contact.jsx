import React from "react";
import ContactImg from "../assets/ContactImg.png";
import "../Style/Img.css";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="ContactImg">
        <img alt="ContactImg" src={ContactImg}></img>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
