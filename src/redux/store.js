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

export default store;
