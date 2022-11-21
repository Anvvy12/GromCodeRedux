export const NEST_PAGE = "PAGE/NEST_PAGE";
export const PREVIOUS_PAGE = "PAGE/PREVIOUS_PAGE";

export const goNextPage = (coreentPage) => {
  return {
    type: NEST_PAGE,
    payload: {
      coreentPage,
    },
  };
};

export const goPreviousPage = (coreentPage) => {
  return {
    type: PREVIOUS_PAGE,
    payload: {
      coreentPage,
    },
  };
};
