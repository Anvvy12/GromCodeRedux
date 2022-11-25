import { SHOW_SPINNER, USER_DATA_RESIVED } from "./user.actions";
const users = {
  userData: null,
  isFetching: false,
};

const userReducer = (state = users, action) => {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        isFetching: true,
      };

    case USER_DATA_RESIVED:
      return {
        ...state,
        userData: action.payload.userData,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default userReducer;
