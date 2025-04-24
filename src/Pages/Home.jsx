import React from "react";
import catTravel from "../assets/cat-travel.png";
import "../Style/Home.css";
const Home = () => {
  return (
    <>
      <div className="HomeImg">
        <img alt="HomeImg" src={catTravel} />
      </div>

      <div className="Home-text">
        <h1>Discover The World</h1>
        <p>
          Explore the world with us adventure, comfort, and unforgettable
          memories!
        </p>
        <br></br>
        <a href="/">Your Plan</a>
      </div>
    </>
  );
};

export default Home;
