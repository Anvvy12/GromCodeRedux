import { createStore } from "redux";
import counterReduser from "./counder.reduser";

const store = createStore(counterReduser);

export default store;
