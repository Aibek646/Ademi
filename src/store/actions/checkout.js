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

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFailed = () => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    const queryParams =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get(
        "https://ademi-bf204-default-rtdb.firebaseio.com/orders.json" +
          queryParams
      )
      .then((res) => {
        const fetchOrders = [];
        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key]["shirt"],
            id: key,
          });
        }
        console.log(fetchOrders);
        dispatch(fetchOrdersSuccess(fetchOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFailed());
      });
  };
};
