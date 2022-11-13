import { ADD_USER, DELETE_USER, UPDATE_USER } from "./users.actions";

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log("a");
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(
          (user) => user.id !== action.payload.userId
        ),
      };
    case UPDATE_USER:
      const newUsersList = state.usersList.map((user) => {
        if (user.id === action.payload.userId) {
          return { ...user, ...action.payload.userData };
        }
      });
      return newUsersList;
    default:
      return state;
  }
};

export default usersReducer;
