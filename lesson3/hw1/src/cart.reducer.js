import { ADD_PRODUCT, DELETE_PRODUCT } from "./cart.actions";

const initialState = { cart: [] };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.cart.concat(action.payload.item),
      };
    case DELETE_PRODUCT:
      const newList = state.cart.filter(
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
