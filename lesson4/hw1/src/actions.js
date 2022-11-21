export const NEST_PAGE = "PAGE/NEST_PAGE";
export const PREVIOUS_PAGE = "PAGE/PREVIOUS_PAGE";

export const goNextPage = (currentPage) => {
  return {
    type: NEST_PAGE,
    payload: {
      currentPage,
    },
  };
};

export const goPreviousPage = (currentPage) => {
  return {
    type: PREVIOUS_PAGE,
    payload: {
      currentPage,
    },
  };
};
