import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask,
} from "./tasks.gateway";

export const ADD_TASK = "TASK/ADD_TASK";
export const TASK_LIST_RESIVED = "TASK/TASK_LIST_RESIVED";
export const DELETE_TASK = "TASK/DELETE_TASK";

export const taskListResived = (tasks) => {
  return {
    type: TASK_LIST_RESIVED,
    payload: {
      tasks,
    },
  };
};

export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: {
      newTask,
    },
  };
};

export const deleteCurrentTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const getTaskListAction = () => {
  return function (dispatch) {
    fetchTasksList().then((taskList) => dispatch(taskListResived(taskList)));
  };
};

// export const deleteTaskAction = () => {
//   return function (dispatch) {
//     deleteTask(id).then(() => dispatch(getTaskListAction()));
//   };
// };
