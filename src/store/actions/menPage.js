import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setCards = (cards) => {
  return {
    type: actionTypes.SET_CARDS,
    cards: cards,
  };
};

export const fetchCardsFailed = () => {
  return {
    type: actionTypes.FETCH_CARDS_FAILED,
  };
};

export const initCards = () => {
  return (dispatch) => {
    axios
      .get("https://ademi-bf204-default-rtdb.firebaseio.com/cards.json")
      .then((response) => {
        console.log(response);
        dispatch(setCards(response.data));
      })
      .catch((error) => {
        dispatch(fetchCardsFailed());
      });
  };
};
