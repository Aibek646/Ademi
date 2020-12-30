import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Layout.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <main className="content">{this.props.children}</main>
        <Footer />
      </Aux>
    );
  }
}

export default Layout;
