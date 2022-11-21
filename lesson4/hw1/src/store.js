import { createStore } from "redux";
import usersReducer from "./users.reduser";

const store = createStore(usersReducer);

export default store;
