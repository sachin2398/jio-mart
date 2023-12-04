import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const init = {
  token: "",
  isAuth: false,
  error: false,
  error_msg: null,
};

export const login_reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, error: false, error_msg: null };
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, token: payload };
    case LOGIN_ERROR:
      return { ...state, error: true, token: "", error_msg: payload };
    default:
      return state;
  }
};
