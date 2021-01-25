import * as actions from "../actions/actionTypes";
import axios from "axios";

export const setSinglePage = (page) => {
  return {
    type: actions.FETCH_SINGLE_PAGE_SUCCESS,
    page: page,
  };
};

export const setSinglePageFailed = () => {
  return {
    type: actions.FETCH_SINGLE_PAGE_FAILED,
  };
};

export const purchaseShirtStart = () => {
  return {
    type: actions.PURCHASE_SHIRT_START,
  };
};

export const purchaseShirtSuccess = (id, orderData) => {
  return {
    type: actions.PURCHASE_SHIRT_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purchaseShirtFailed = (error) => {
  return {
    type: actions.PURCHASE_SHIRT_FAILED,
    error: error,
  };
};

// export const openModal = () => {
//   this.setState(
//     {
//       modal: !this.state.modal,
//     },
//     () => {
//       setTimeout(() => {
//         this.closeModal();
//       }, 4000);
//     }
//   );
// };

export const openModal = () => {
  return {
    type: actions.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: actions.CLOSE_MODAL,
  };
};

export const initCloseModal = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(closeModal());
    }, 4000);
  };
};

export const initSinglePage = (id) => {
  return (dispatch) => {
    axios
      .get(`https://ademi-bf204-default-rtdb.firebaseio.com/cards/${id}.json`)
      .then((res) => {
        console.log(res.data);
        dispatch(setSinglePage(res.data));
      })
      .catch((err) => {
        dispatch(setSinglePageFailed());
      });
  };
};

export const purchaseShirt = (order, token) => {
  return (dispatch) => {
    dispatch(purchaseShirtStart());
    axios
      .post(
        "https://ademi-bf204-default-rtdb.firebaseio.com/orders.json?auth=" +
          token,
        order
      )
      .then((res) => {
        dispatch(purchaseShirtSuccess(res.data.name, order));
        dispatch(openModal());
        dispatch(initCloseModal());
        console.log(res);
      })
      .catch((error) => {
        dispatch(purchaseShirtFailed(error));
        dispatch(initCloseModal());
      });
  };
};
