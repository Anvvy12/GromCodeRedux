import data from "./store";

export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";

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
