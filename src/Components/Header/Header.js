import React from "react";
import "./Header.css";
import NavItems from "./NavItems";
import Aux from "../../hoc/Aux";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import Logo from "../UI/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaShoppingBag } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";

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
          <NavItems isAuth={props.isAuthenticated} />
        </nav>
      </div>
      <div className="sub-header">
        <div>
          <h3 onClick={props.openDrawer} className="btn">
            Shop
          </h3>
          <h3 className="btn">Discover</h3>
        </div>

        <div className="icon">
          {props.isAuthenticated ? (
            <Link to="/checkout">
              <FaShoppingBag />
            </Link>
          ) : null}
        </div>
      </div>
    </Aux>
  );
};

export default Header;
