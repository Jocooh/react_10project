import { v4 as uuidv4 } from "uuid";

//action value
const ADD_TITLE = "ADD_TITLE";

//action creator
export const addTitle = (payload) => {
  return { type: ADD_TITLE, payload };
};

//그냥 예비로 적어놨음 나중에 확인 후 삭제
const initialState = [
  {
    id: uuidv4(),
    title: "11",
    contents: "22",
  },
  {
    id: uuidv4(),
    title: "33",
    contents: "44",
  },
];

//reducers
const Article = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default Article;
