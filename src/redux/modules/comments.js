const ADD_COMMENT = "ADD_COMMENT";
// const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

// export const removeComment = (payload) => {
//     return {
//         type: REMOVE_COMMENT,
//         payload,
//     };
// };

const initialState = [
  {
    comment: "블라블라블라",
  },
  {
    comment: "시간 어떻게 불러오지",
  },
  {
    comment: "리덕스 진짜 너무 어렵다",
  },
  {
    comment: "그냥 코딩이 다 어렵다",
  },
];

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default comments;
