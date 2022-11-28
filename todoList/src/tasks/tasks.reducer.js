import { ADD_TASK } from "./tasks.actions";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasks.gateway";

const initialState = {};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tasksReducer;
