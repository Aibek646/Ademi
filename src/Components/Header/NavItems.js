import React from "react";
import NavItem from "../Header/NavItem";
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/login">Login</NavItem>
      <NavItem link="/signin">Signin</NavItem>
      <NavItem link="/services">Services</NavItem>
    </ul>
  );
};

export default NavItems;
