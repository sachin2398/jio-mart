import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import { app } from "../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const setLoginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const setLoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload,
  };
};

const setLoginError = (payload) => {
  return {
    type: LOGIN_ERROR,
    payload:payload
  };
};

export const signin = (email, password) => async (dispatch) => {
  dispatch(setLoginRequest());
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    dispatch(setLoginSuccess(res.user.accessToken));
  } catch (error) {
    dispatch(setLoginError(error.message));
  }
};

export const signin_G = () => async (dispatch) => {
  dispatch(setLoginRequest());
  try {
    let res = await signInWithPopup(auth, googleProvider);
    dispatch(setLoginSuccess(res.user.accessToken));
  } catch (error) {
    dispatch(setLoginError(error.message));
  }
};
