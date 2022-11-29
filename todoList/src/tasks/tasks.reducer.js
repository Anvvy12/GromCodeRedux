import { ADD_TASK, TASK_LIST_RESIVED, DELETE_TASK } from "./tasks.actions";

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RESIVED:
      return {
        ...state,
        tasksList: action.payload.tasks.sort((a, b) => a.done - b.done),
      };
    case DELETE_TASK: {
      return {
        ...state,
        tasksList: action.payload.tasks,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
