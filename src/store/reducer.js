import * as actionTypes from "./actions";

const initialState = {
  initPrice: 89,
  price: 89,
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SHIRT:
      return {
        ...state,
        count: state.count + 1,
        price: state.price + state.initPrice,
      };
    case actionTypes.REMOVE_SHIRT:
      return {
        ...state,
        count: state.count - 1,
        price: state.price - state.initPrice,
      };
    default:
      return state;
  }
};

export default reducer;
