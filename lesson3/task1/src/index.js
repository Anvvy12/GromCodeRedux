import store from "./store";
import { deleteUser, addUser, updateUser } from "./users.actions";
import { increment, decrement, reset } from "./counter.actions";

store.subscribe(() => console.log(store.getState()));

const user = { id: 76, name: "Sarah" };
const user2 = { id: 716, name: "Tom" };
const user3 = { id: 7, name: "Kaka" };

const onAddUser = (user) => {
  store.dispatch(addUser(user));
};

onAddUser(user);
onAddUser(user2);
onAddUser(user3);

const onDeleteUser = (id) => {
  store.dispatch(deleteUser(id));
};

onDeleteUser(7);

const onUpdateUser = (id, userData) => {
  store.dispatch(updateUser(id, userData));
};

onUpdateUser(76, { name: "lol" });
