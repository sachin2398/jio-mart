import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";
import { setLoginSuccess } from "../Login_store/action";
import { app } from "../../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const setSignupRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  };
};

const setSignupSuccess = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload,
  };
};

const setSignupError = (payload) => {
  return {
    type: SIGNUP_ERROR,
    payload:payload
  };
};

const auth = getAuth(app);

export const signup = (email, password, userName) => async (dispatch) => {
  dispatch(setSignupRequest());
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(setLoginSuccess(res.user.accessToken));
    dispatch(setSignupSuccess({ email, userName }));
  } catch (error) {
    dispatch(setSignupError(error.message));
  }
};
