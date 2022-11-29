import * as gateWay from "./tasks.gateway";

import { getTasksListSelector } from "./tasks.selectors";

export const ADD_TASK = "TASK/ADD_TASK";
export const TASK_LIST_RESIVED = "TASK/TASK_LIST_RESIVED";
export const DELETE_TASK = "TASK/DELETE_TASK";

export const taskListResivedAction = (tasks) => {
  console.log(tasks);
  return {
    type: TASK_LIST_RESIVED,
    payload: {
      tasks,
    },
  };
};

export const addTaskAction = (newTask) => {
  return {
    type: ADD_TASK,
    payload: {
      newTask,
    },
  };
};

export const deleteCurrentTaskAction = (id) => {
  return {
    type: DELETE_TASK,
    payload: {
      id,
    },
  };
};

export const getTaskList = () => {
  return function (dispatch) {
    gateWay
      .fetchTasksList()
      .then((taskList) => dispatch(taskListResivedAction(taskList)));
  };
};

export const updateTaskList = (id) => {
  return function (dispatch, getState) {
    const state = getState();
    const taskList = getTasksListSelector(state);
    console.log(taskList);
    const task = taskList.find((task) => task.id === id);
    const updateTask = {
      ...task,
      done: !task.done,
    };
    console.log(updateTask);
    gateWay.updateTask(id, updateTask).then(() => dispatch(getTaskList()));
  };
};

export const deleteTaskCurrentTask = (id) => {
  return function (dispatch, getState) {
    const state = getState();
    const taskList = getTasksListSelector(state);
    console.log(taskList);
    const task = taskList.find((task) => task.id === id);
    const updateTask = {
      ...task,
      done: !task.done,
    };
    console.log(updateTask);
    gateWay.updateTask(id, updateTask).then(() => dispatch(getTaskList()));
  };
};

// export const deleteTaskAction = () => {
//   return function (dispatch) {
//     deleteTask(id).then(() => dispatch(getTaskListAction()));
//   };
// };
