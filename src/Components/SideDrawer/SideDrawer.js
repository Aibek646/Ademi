import React from "react";
import Backdrop from "../UI/Backdrop";
import Aux from "../../hoc/Aux";
import "./SideDrawer.css";
import Logo from "../UI/Logo";
import { NavLink } from "react-router-dom";
const SideDrawer = (props) => {
  let attachedClasses = ["sidedrawer", "close"];
  if (props.open) {
    attachedClasses = ["sidedrawer", "open"];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.clicked} />
      <div className={attachedClasses.join(" ")}>
        <div className="logo-side">
          <Logo />
        </div>
        <div className="men-x">
          <NavLink onClick={props.close} to="/men">
            Men
          </NavLink>
          <button onClick={props.close} className="btn-x">
            X
          </button>
        </div>
        <NavLink onClick={props.close} to="/boys">
          Boys
        </NavLink>
      </div>
    </Aux>
  );
};

export default SideDrawer;
