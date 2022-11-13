import { createStore, combineReducers } from "redux";
import usersReducer from "./users.reducer";
import counterReduser from "./counder.reduser";

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
