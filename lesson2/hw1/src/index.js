import store from "./store";
import { deleteUser, addUser } from "./users.actions";

const onDeleteUser = (id) => {
  store.dispatch(deleteUser(id));
};

const onAddUser = () => {
  store.dispatch(addUser(user));
};
