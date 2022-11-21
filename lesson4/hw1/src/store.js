import { createStore } from "redux";
import usersReducer from "./users/users.reduser";

const store = createStore(usersReducer);

export default store;
