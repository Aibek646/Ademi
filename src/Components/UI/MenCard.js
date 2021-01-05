import React from "react";
import "./MenCard.css";
import { Link } from "react-router-dom";

const MenCard = (props) => {
  console.log(props);
  return (
    <div onClick={props.clicked} className="card-base box-1">
      <div className="card-header box-1 ">
        <div className="box-1">
          <img className="box-1" src="/images/t-shirt.jpeg" alt="men-picture" />
        </div>
      </div>
      <div className="card-body box-1">
        <p>{props.name}It was popularised in the 1960s</p>
        <p>{props.name}It was popularised in the 1960s</p>
        <p>{props.name}It was popularised in the 1960s</p>
      </div>
    </div>
  );
};

export default MenCard;
