import data from "./store";
import { ADD_USER, DELETE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: state.usersList.concat(action.user),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

export default usersReducer;
