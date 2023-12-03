import { combineReducers, legacy_createStore } from "redux";
import AuthReducer from "../components/Login/redux/AuthReducer";

// import ProductReducer from "../components/ProductPage/ProductReducer/productReducer";
// import ProductDetailReducer from "../components/ProductPage/Redux/ProductDetailReducer/ProductDetailReducer";


import CartReducer from "../components/CartPage/redux/CartReducers";
const combinereducers = combineReducers({ AuthReducer, CartReducer });
 const store = legacy_createStore(combinereducers);
 export default store;
