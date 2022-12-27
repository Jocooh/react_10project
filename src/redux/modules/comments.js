import { v4 as uuidv4 } from "uuid";

const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (payload) => {
    return {
        type: ADD_COMMENT,
        payload,
    };
};

export const removeComment = (payload) => {
    return {
        type: REMOVE_COMMENT,
        payload,
    };
};

const initialState = [
    // {
    //     id: uuidv4(),
    //     comment: "블라블라블라",
    //     password: 1234,
    // },
    // {
    //     id: uuidv4(),
    //     comment: "시간 어떻게 불러오지",
    //     password: 2345,
    // },
    // {
    //     id: uuidv4(),
    //     comment: "리덕스 진짜 너무 어렵다",
    //     password: 3456,
    // },
    // {
    //     id: uuidv4(),
    //     comment: "그냥 코딩이 다 어렵다",
    //     password: 789,
    // },
];

const comments = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload];
        case REMOVE_COMMENT:
            return state.map((item) => {
                if (item.id === action.payload) {
                    return state.filter(
                        (item) => item.password !== action.payload
                    );
                }
            });
        default:
            return state;
    }
};

export default comments;
