import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";
import Backdrop from "../../Components/UI/Backdrop";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  sideDrawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Header
          openDrawer={this.sideDrawerOpenHandler}
          open={this.state.showSideDrawer}
          close={this.sideDrawerCloseHandler}
          clicked={this.sideDrawerCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
          redirect={this.props.redirect}
        />

        <main className="content">{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    redirect: state.auth.redirect,
  };
};

export default connect(mapStateToProps)(Layout);
