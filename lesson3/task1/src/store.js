import { createStore, combineReducers } from "redux";
import usersReducer from "./users.reducer";
import counterReduser from "./counder.reduser";

const appReducer = combineReducers({
  counter: counterReduser,
  users: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
