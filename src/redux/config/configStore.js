import { createStore } from "redux";
import { combineReducers } from "redux";
import Article from "../modules/article";

// 1. create rootReducer with reducers
const rootReducer = combineReducers({
  Article,
});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;
