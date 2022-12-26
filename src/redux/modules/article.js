// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import axios from "axios";

// 글작성페이지에서 제목쓰는 페이지

//action value
const ADD_TITLE = "ADD_TITLE";
const ADD_CONTENTS = "ADD_CONTENTS";

const SUBMIT_ARTICLE = "SUBMIT_ARTICLE";

//action creator
export const addTitle = (payload) => {
  return { type: ADD_TITLE, payload };
};

export const addContents = (payload) => {
  return { type: ADD_CONTENTS, payload };
};
// 유진 - addContents 생성

export const submitArticle = (payload) => {
  return { type: SUBMIT_ARTICLE, payload };
};

const initialState = [
  // {
  //   id: uuidv4(),
  //   title: "11",
  //   userName: "22",
  //   category: 1,
  // },
  // {
  //   id: uuidv4(),
  //   title: "33",
  //   userName: "44",
  //   category: 2,
  // },
];

//reducers
const Article = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return [...state, action.payload];
    // case SUBMIT_ARTICLE:
    //   return fetchArticle();
    default:
      return state;
  }
};

export default Article;
