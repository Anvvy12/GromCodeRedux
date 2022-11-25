export const SHOW_SPINNER = "SHOW_SPINNER";
export const USER_DATA_RESIVED = "USER_DATA_RESIVED";
import fetchUserDataV1 from "./users.gateway";

export const showSpinner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataResived = (userData) => {
  return {
    type: USER_DATA_RESIVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpinner());
    fetchUserDataV1(userName).then((userDate) => {
      dispatch(userDataResived(userDate));
    });
  };
};
