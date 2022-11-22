export const FILTER = "USERS/FILTER";

export const filterAction = (value) => {
  return {
    type: FILTER,
    payload: {
      value,
    },
  };
};
