import React, { Component } from "react";
import NavItem from "../Header/NavItem";
import "./NavItems.css";
import SignUpModal from "../../Containers/Auth/SignUp";
import LoginModal from "../../Containers/Auth/Login2";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";
import * as actions from "../../store/actions/index";

class NavItems extends Component {
  state = {
    signUp: false,
    login: false,
  };

  openSignUp = () => {
    this.props.onSignOpen();
  };

  openLogin = () => {
    this.props.onLoginOpen();
  };
  render() {
    return (
      <Aux>
        <ul className="nav-items">
          {!this.props.isAuth ? (
            <NavItem clicked={this.openLogin} link="#">
              Log In
            </NavItem>
          ) : (
            <NavItem link="/logout">LogOut</NavItem>
          )}
          {!this.props.isAuth ? (
            <NavItem clicked={this.openSignUp} link="#">
              SignUp
            </NavItem>
          ) : null}
          <NavItem link="/services">Services</NavItem>
        </ul>

        {this.props.signUp ? (
          <SignUpModal show={this.props.signUp} closed={this.openSignUp} />
        ) : null}
        {this.props.login ? (
          <LoginModal closed={this.openLogin} show={this.props.login} />
        ) : null}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    signUp: state.auth.signUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginOpen: () => dispatch(actions.openLogin()),
    onSignOpen: () => dispatch(actions.openSignUp()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavItems);
