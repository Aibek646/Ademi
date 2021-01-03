import React from "react";
import "./MenCards.css";

const MenCards = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <img src="./t-shirt.jpeg" alt="men-picture" />
        </div>
      </div>
      <div className="card-body">
        <p>
          {props.name}It was popularised in the 1960s with It was popularised in
          the 1960s withIt was popularised in the
        </p>
      </div>
    </div>
  );
};

export default MenCards;
