import React from "react";
import "./MenCard.css";
import { Link } from "react-router-dom";

const MenCard = (props) => {
  return (
    <div onClick={props.clicked} className="card-base box-1">
      <div className="card-header box-1 ">
        <div className="box-1">
          <img className="box-1" src={props.image} alt="men-picture" />
        </div>
      </div>
      <div className="card-body box-1">
        <p>{props.name}</p>
        <p>{props.text}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default MenCard;
