import React from "react";
import NavItem from "../Header/NavItem";
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/login">Log In</NavItem>
      <NavItem link="/signup">SignUp</NavItem>
      <NavItem link="/services">Services</NavItem>
    </ul>
  );
};

export default NavItems;
