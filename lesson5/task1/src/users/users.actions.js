export const GO_PREV = "PAGE/GO_PREV";
export const GO_NEXT = "PAGE/GO_NEXT";

export const goPrev = () => {
  return {
    type: GO_PREV,
    // payload: {
    //     page
    // }
  };
};

export const goNext = () => {
  return {
    type: GO_NEXT,
    // payload: {
    //     page
    // }
  };
};
