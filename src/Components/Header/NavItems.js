import React from "react";
import NavItem from "../Header/NavItem";
import "./NavItems.css";

const NavItems = (props) => {
  return (
    <ul className="nav-items">
      <NavItem link="/">Home</NavItem>
      <NavItem link="/">Contact</NavItem>
      <NavItem link="/">Services</NavItem>
    </ul>
  );
};

export default NavItems;
