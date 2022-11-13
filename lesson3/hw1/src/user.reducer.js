import { ADD_USER, DELETE_USER } from "./user.actions";

const initialState = { users: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload.user),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default userReducer;
