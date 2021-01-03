import React, { Component } from "react";
import "./MenPage.css";
import Spinner from "../../Components/UI/Spinner";
import MenCards from "../../Components/UI/MenCards";
import axios from "axios";
import Aux from "../../hoc/Aux";

class Men extends Component {
  state = {
    cards: null,
  };

  componentDidMount() {
    axios
      .get("https://ademi-bf204-default-rtdb.firebaseio.com/.json")
      .then((res) => {
        this.setState({ cards: res.data.cards });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="all-cards">
        {this.state.cards ? (
          this.state.cards.map((card) => <MenCards />)
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Men;
