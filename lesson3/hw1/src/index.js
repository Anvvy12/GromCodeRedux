import store from "./store";
import { setLanguage } from "./language.actions";
import { setUser, removeUser } from "./user.actions";
import { addProduct, removeProduct } from "./cart.actions";

store.subscribe(() => console.log(store.getState()));

const user1 = { id: 13, name: "Bob" };
const user2 = { id: 12, name: "Leonid" };

store.dispatch(setLanguage("en"));
store.dispatch(addProduct({ id: 76, name: "milk" }));
store.dispatch(setUser(user1));
store.dispatch(removeUser());

let resul = {
  language: "en",
  user: null,
  cart: {
    products: [],
  },
};
