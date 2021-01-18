import React from "react";
import "./buttonAdd.css";

const buttonAdd = (props) => {
  return (
    <button
      onClick={props.clickedBtn}
      id="add-to-card"
      type="button"
      style={{
        width: props.width,
        marginLeft: props.left,
        marginTop: props.top,
      }}
    >
      {props.children}
    </button>
  );
};

export default buttonAdd;
