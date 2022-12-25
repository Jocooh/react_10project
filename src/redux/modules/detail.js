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
