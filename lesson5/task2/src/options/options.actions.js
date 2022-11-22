export const TOGGLE_OPTION = "OPTION/TOGGLE_OPTION";

export const togglOption = (optionId) => {
  return {
    type: TOGGLE_OPTION,
    payload: {
      optionId,
    },
  };
};
