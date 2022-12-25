import { createStore } from "redux";
import { combineReducers } from "redux";
import Article from "../modules/article";
import detail from "../modules/detail";

// 1. create rootReducer with reducers
const rootReducer = combineReducers({
  Article,
  detail,
});

// 2. create store
const store = createStore(rootReducer);

// 3. export
export default store;
