import React from "react";
import "../Style/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Send your inquiries to us and we will try to help you at our most.</p>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
