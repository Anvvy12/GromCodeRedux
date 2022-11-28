import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import tasksReducer from "./tasks/tasks.reducer";
import thunk from "redux-thunk";

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

const reducers = combineReducers({ tasksList: tasksReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  applyMiddleware(logger)
);

const store = createStore(reducers, enhancer);

export default store;
