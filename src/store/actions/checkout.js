import axios from "axios";
import * as actionTypes from "../actions/actionTypes";

export const addShirt = () => {
  return {
    type: actionTypes.ADD_SHIRT,
  };
};

export const removeShirt = () => {
  return {
    type: actionTypes.REMOVE_SHIRT,
  };
};
