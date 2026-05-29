import React from "react";
import ContactImg from "../assets/ContactImg.png";
import "../Style/Img.css";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="ContactImg">
        <img alt="ContactImg" src={ContactImg}></img>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
