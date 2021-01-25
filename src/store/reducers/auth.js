import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utulity";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  login: false,
  signUp: false,
  redirect: false,
  authRedirectPath: "/",
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
    login: false,
    signUp: false,
    redirect: true,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const openLogin = (state, action) => {
  return updateObject(state, {
    login: !state.login,
  });
};

const openSignUp = (state, action) => {
  return updateObject(state, {
    signUp: !state.signUp,
  });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, {
    authRedirectPath: action.path,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null, redirect: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.OPEN_LOGIN:
      return openLogin(state, action);
    case actionTypes.OPEN_SIGNUP:
      return openSignUp(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};

export default reducer;
