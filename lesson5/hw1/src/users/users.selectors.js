import { createSelector } from "reselect";

export const filtersValue = (state) => {
  return state.user.filterText;
};

export const filterUsersList = (state) => {
  return state.user.usersList;
};

export const filtersValueSelector = (state) => {
  const actualValues = filtersValue(state);
  return actualValues;
};

export const showActualUsersSelector = (state) => {
  // const actualUsers = filterUsersList(state).filter((user) =>
  //   user.name.includes(filtersValue(state))
  // );
  // return actualUsers;
  console.log(filterUsersList(state) == "odddd");
  return filterUsersList(state) == "o";
};
