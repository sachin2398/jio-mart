import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { login_reducer } from "./Login_store/login_reducer";
import { signup_reducer } from "./Signup_store/signup_reducer";

const store = legacy_createStore(
  combineReducers({ login_reducer, signup_reducer }),
  applyMiddleware(thunk)
);

export default store;
