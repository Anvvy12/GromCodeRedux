export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: {
      id,
    },
  };
};

export const addProduct = (item) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      item,
    },
  };
};
