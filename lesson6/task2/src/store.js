import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./users/users.reducer";

// const thunk = (state) => (next) => (action) => {
//   return next(action);
// };

// const reducers = combineReducers({ users: userReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
