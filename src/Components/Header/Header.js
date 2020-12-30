import React from "react";
import "./Header.css";
import NavItems from "./NavItems";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>
      <nav className="desktop-only">
        <NavItems />
      </nav>
    </div>
  );
};

export default Header;
