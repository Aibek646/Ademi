import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loadedPage: null,
  error: false,
  ordering: false,
  modal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SINGLE_PAGE_SUCCESS:
      return {
        ...state,
        loadedPage: action.page,
      };
    case actionTypes.FETCH_SINGLE_PAGE_FAILED:
      return {
        ...state,
        error: true,
      };
    case actionTypes.PURCHASE_SHIRT_START:
      return {
        ...state,
        ordering: true,
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        ordering: false,
        modal: true,
      };
    default:
      return state;
  }
};

export default reducer;
