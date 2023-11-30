import {legacy_createStore, applyMiddleware , combineReducers} from "redux"
import thunk from "redux-thunk"


const store = legacy_createStore()

export default store


//cart => ADD, REMOVE, INC QTY, DEC QTY
//with localstorage

//Auth => LOGIN, SIGNUP
//with localstorage




