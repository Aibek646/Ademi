import React, { Component } from "react";
import NavItem from "../Header/NavItem";
import "./NavItems.css";
import SignUpModal from "../../Containers/Auth/SignUp";
import LoginModal from "../../Containers/Auth/Login2";
import { connect } from "react-redux";
import Aux from "../../hoc/Aux";

class NavItems extends Component {
  state = {
    signUp: false,
    login: false,
  };

  openSignUp = () => {
    this.setState({
      signUp: !this.state.signUp,
    });
  };

  openLogin = () => {
    this.setState({
      login: !this.state.login,
    });
  };
  render() {
    return (
      <Aux>
        <ul className="nav-items">
          {!this.props.isAuthenticated ? (
            <NavItem clicked={this.openLogin} link="#">
              Log In
            </NavItem>
          ) : (
            <NavItem link="/logout">LogOut</NavItem>
          )}
          {!this.props.isAuthenticated ? (
            <NavItem clicked={this.openSignUp} link="#">
              SignUp
            </NavItem>
          ) : null}
          <NavItem link="/services">Services</NavItem>
        </ul>

        {this.state.signUp ? (
          <SignUpModal show={this.state.signUp} closed={this.openSignUp} />
        ) : null}
        {this.state.login ? (
          <LoginModal closed={this.openLogin} show={this.state.login} />
        ) : null}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(NavItems);
