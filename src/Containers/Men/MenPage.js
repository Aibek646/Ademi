import React, { Component } from "react";
import "./MenPage.css";
import { connect } from "react-redux";
import Spinner from "../../Components/UI/Spinner";
import MenCard from "../../Components/UI/MenCard";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Aux from "../../hoc/Aux";
import * as actions from "../../store/actions/index";

class Men extends Component {
  componentDidMount() {
    this.props.onFetchCards();
  }

  cardSelectorHandler = (id) => {
    this.props.history.push({
      pathname: "/men/" + id,
    });
  };

  render() {
    return (
      <div className="all-cards">
        {this.props.cards ? (
          this.props.cards.map((card) => (
            <MenCard
              key={card.id}
              image={card.image}
              name={card.name}
              text={card.text}
              price={card.price}
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

const mapStateToProps = (state) => {
  return {
    cards: state.menPage.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCards: () => dispatch(actions.initCards()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Men);
