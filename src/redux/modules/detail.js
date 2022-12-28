import React from "react";
import { isHtmlElement } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

//////////////////////

// const CHANGE_TITLE = "CHANGE_TITLE";

// export const changeTitle = (paylaod) => {
//   return { type: CHANGE_TITLE, paylaod };
// };

// const initialState = [];

// const detail = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_TITLE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
// export default detail;

////////////////////////////

const ADD_POSTDETAIL = "ADD_POSTDETAIL";

export const addPostDetail = (paylaod) => {
  return { type: ADD_POSTDETAIL, paylaod };
};

//초기값
const initialState = [
  {
    id: uuidv4(),
    title: "제목",
    user: "이름",
    contents: "내용",
  },
];

// //reducers

const postdetail = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTDETAIL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default postdetail;
