import { createStore } from "redux";
import { combineReducers } from "redux";

// 1. create rootReducer with reducers
const rootReducer = combineReducers({});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;
