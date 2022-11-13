import { ADD_PRODUCT, DELETE_PRODUCT } from "./cart.actions";

const cart = { products: [] };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.item),
      };
    case DELETE_PRODUCT:
      const newList = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      return {
        ...state,
        products: newList,
      };
    default:
      return state;
  }
};

export default productsReducer;
