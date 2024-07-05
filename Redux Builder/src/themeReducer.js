// themeReducer.js

import { SWITCH_THEME } from "./action";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
