// action.js

// Action Types
export const ADD = "ADD";
export const REDUCE = "REDUCE";
export const SWITCH_THEME = "SWITCH_THEME";

// Action Creators
export const handleAdd = (value) => ({
  type: ADD,
  payload: value,
});

export const handleReduce = (value) => ({
  type: REDUCE,
  payload: value,
});

export const handleTheme = (theme) => ({
  type: SWITCH_THEME,
  payload: theme,
});
