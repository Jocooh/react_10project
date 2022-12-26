import React from "react";
import { isHtmlElement } from "react-router-dom";
//dist/dom";
import { v4 as uuidv4 } from "uuid";

//////////////////////

const CHANGE_TITLE = "CHANGE_TITLE";

export const changeTitle = (paylaod) => {
  return { type: CHANGE_TITLE, paylaod };
};

const initialState = [];

const detail = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TITLE:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default detail;

////////////////////////////

// const POST_EDIT = "POST_EDIT"; // 유진 - detail 페이지 버튼 구현하려고 하는데 이 파일이 맞나요
// const POST_DELETE = "POST_DELETE";

// export const postEdit = (payload) => {
//   return { type: POST_EDIT, payload };
// };

// export const postDelete = (payload) => {
//   return { type: POST_DELETE, payload };
// };

// //초기값
// const initialState = [
//   { id: uuidv4(), title: "제목", user: "최치원", contents: "내용" },
// ];

// //reducers

// const postPage = (state = initialState, action) => {
//   switch (action.type) {
//     case POST_EDIT:
//       return [...state, action.payload];
//     case POST_DELETE:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
