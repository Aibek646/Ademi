import React, { Component } from "react";
import "./MenPage.css";
import Spinner from "../../Components/UI/Spinner";
import MenCard from "../../Components/UI/MenCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
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

  cardSelectorHandler = (id) => {
    this.props.history.push({
      pathname: "/men/" + id,
    });
  };

  render() {
    return (
      <div className="all-cards">
        {this.state.cards ? (
          this.state.cards.map((card) => (
            <MenCard
              key={card.id}
              clicked={() => this.cardSelectorHandler(card.id)}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Men;
