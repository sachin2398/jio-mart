import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const init = {
  userName: "",
  userEmail: "",
  error_msg: null,
};

export const signup_reducer = (state = init, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state ,error_msg:null};
    case SIGNUP_SUCCESS:
      return { userEmail: payload.email, userName: payload.userName };
    case SIGNUP_ERROR:
      return { userEmail: "", userName: "", error_msg: payload };
    default:
      return { ...state };
  }
};
