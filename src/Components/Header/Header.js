import React from "react";
import "./Header.css";
import NavItems from "./NavItems";
import Aux from "../../hoc/Aux";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Logo from "../UI/Logo";

const Header = (props) => {
  return (
    <Aux>
      <div className="header">
        <SideDrawer
          open={props.open}
          close={props.close}
          clicked={props.clicked}
        />

        <Logo />
        <nav className="desktop-only">
          <NavItems />
        </nav>
      </div>
      <div className="sub-header">
        <h3 onClick={props.openDrawer} className="btn">
          Shop
        </h3>
        <h3 className="btn">Discover</h3>
      </div>
    </Aux>
  );
};

export default Header;
