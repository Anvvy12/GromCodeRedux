export const GO_NEXT = "PAGE/GO_NEXT";
export const GO_PREV = "PAGE/GO_PREV";

export const goNext = (currentPage) => {
  return {
    type: NEST_PAGE,
    payload: {
      currentPage,
    },
  };
};

export const goPrev = (currentPage) => {
  return {
    type: PREVIOUS_PAGE,
    payload: {
      currentPage,
    },
  };
};
