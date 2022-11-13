import store from "./store";
import { deleteUser, addUser, updateUser } from "./users.actions";
import { increment, decrement, reset } from "./counter.actions";

store.dispatch(increment());

store.dispatch(addUser({ name: "Tom", id: 2 }));
store.dispatch(addUser({ name: "Marta", id: 1 }));
store.dispatch(deleteUser(1));
store.dispatch(updateUser(2, { name: "Ben" }));

console.log(store.getState());
