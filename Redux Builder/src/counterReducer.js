// counterReducer.js

import { ADD, REDUCE } from "./action";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case REDUCE:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
