import { v4 as uuidv4 } from "uuid";

// 글작성페이지에서 제목쓰는 페이지

//action value
const ADD_TITLE = "ADD_TITLE";
const ADD_CONTENTS = "ADD_CONTENTS";

//action creator
export const addTitle = (payload) => {
  return { type: ADD_TITLE, payload };
};

//그냥 예비로 적어놨음 나중에 확인 후 삭제
const initialState = [
  {
    id: uuidv4(),
    title: "11",
    userName: "22",
    category: 1,
  },
  {
    id: uuidv4(),
    title: "33",
    userName: "44",
    category: 2,
  },
];

//reducers
const Article = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default Article;
