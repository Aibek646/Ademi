import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";
import Backdrop from "../../Components/UI/Backdrop";
import SideDrawer from "../../Components/SideDrawer/SideDrawer";
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
        />

        <main className="content">{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
