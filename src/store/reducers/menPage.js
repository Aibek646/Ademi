import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cards: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };
    default:
      return state;
  }
};

export default reducer;
