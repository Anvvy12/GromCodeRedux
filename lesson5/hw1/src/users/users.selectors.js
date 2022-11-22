import { createSelector } from "reselect";

export const filtersValueSelector = (state) => {
  return state.user.filterText;
};

export const filterUsersList = (state) => {
  return state.user.usersList;
};

export const showActualUsersSelector = (state) => {
  const actualUsers = filterUsersList(state).filter((user) =>
    user.name.includes(filtersValueSelector(state))
  );
  return actualUsers;
};
