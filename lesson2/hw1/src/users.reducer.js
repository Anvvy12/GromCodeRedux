import data from "./store";

const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";

export const userReducer = (state = data, action, user, id) => {
  switch (action.type) {
    case ADD_USER:
      return {
        usersList: state.usersList.concat(user),
      };
    case DELETE_USER:
      return {
        usersList: state.usersList.filter((user) => user.id !== id),
      };
    default:
      return state;
  }
};
