import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, deleteProduct } from "./cart.actions";
import { addUser, deleteUser } from "./user.actions";

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({ name: "Milk", id: 2 }));
store.dispatch(addProduct({ name: "Bread", id: 1 }));
store.dispatch(addProduct({ name: "Egs", id: 3 }));
store.dispatch(addProduct({ name: "Sigarets", id: 4 }));
store.dispatch(deleteProduct(2));

store.dispatch(addUser({ name: "Bob", id: 1 }));
store.dispatch(addUser({ name: "Bogdan", id: 2 }));
store.dispatch(addUser({ name: "Mishanya", id: 3 }));

store.dispatch(deleteUser(1));
