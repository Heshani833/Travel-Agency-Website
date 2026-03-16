import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
// import Signup from "./Pages/SignUp";
import { Login } from "./Pages/Login";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
          {/* <Route path="/signup" element={<Signup/>}/> */}
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
