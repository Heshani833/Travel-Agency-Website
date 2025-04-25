import React from "react";
import "../Style/Destination.css";

const DestinationData = (props) => {
  return (
    <div>
      <div className="first-des">
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="Image">
          <img alt="Image1" src={props.img1} />
          <img alt="Image2" src={props.img2} />
          <img alt="Image3 " src={props.img3} />
        </div>
      </div>
    </div>
  );
};

export default DestinationData;
