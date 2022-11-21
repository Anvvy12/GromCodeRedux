import { createStore } from "redux";
import usersReducer from "./reduser";

const store = createStore(usersReducer);

export default store;
