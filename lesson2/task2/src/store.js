import { createStore } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

const initialState = {
  history: [],
  value: 0,
};

const counterREduser = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
        history: state.history.concat("+1"),
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
        history: state.history.concat("-1"),
      };
    case RESET:
      return {
        ...state,
        value: 0,
        history: [],
      };
    default:
      return state;
  }
};

const store = createStore(counterREduser);

export default store;
