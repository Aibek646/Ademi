import React from "react";
import "./Modal.css";
import Button from "../UI/buttonAdd";
const Modal = (props) => {
  return (
    <div
      className="modal-bg"
      style={{
        visibility: props.show ? "visible" : "hidden",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div>
        <img className="image" src="/images/polo-men1.jpeg" />
      </div>
      <div className="modal">
        <p></p>
        <p>Vintage Fit Sherpa Trucker Jacket</p>
        <p>Lite - Light Wash</p>
        <p>$128</p>
        <p>size: S</p>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Modal;
