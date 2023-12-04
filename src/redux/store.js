
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer/cartReducer'; // Import your cart reducer
import authReducer from './authReducer/authReducer';
// Combine multiple reducers if needed
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  // Add more reducers as needed
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { login_reducer } from "./Login_store/login_reducer";
import { signup_reducer } from "./Signup_store/signup_reducer";

const store = legacy_createStore(
  combineReducers({ login_reducer, signup_reducer }),
  applyMiddleware(thunk)
);


export default store;
