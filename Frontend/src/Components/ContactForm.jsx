import React from "react";
import "../Style/ContactForm.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to send to backend
    const formData = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Message sent successfully! ");
        // Clear the form after success
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Something went wrong  " + result.detail);
      }
    } catch (error) {
      alert("Cannot connect to server  Make sure backend is running!");
    }
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Send your inquiries to us and we will try to help you at our most.</p>
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        />
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
