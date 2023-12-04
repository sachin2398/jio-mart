import React from "react";

const intialState = {
  isAuth: false,
  name: "Dummy",
  email: "",
};
const AuthReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "login":
      return {
        ...state,
        isAuth: true,
        name: payload.name,
        email: payload.email,
      };
    case "logout":
      return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
      };

    default:
      return state;
  }
};

export default AuthReducer;
