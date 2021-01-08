import React from "react";
import "./buttonAdd.css";

const buttonAdd = (props) => {
  return (
    <button onClick={props.clickedBtn} id="add-to-card" type="button">
      {props.children}
    </button>
  );
};

export default buttonAdd;
