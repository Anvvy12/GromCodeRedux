import * as gateWay from "./tasks.gateway";

import { getTasksListSelector } from "./tasks.selectors";

export const ADD_TASK = "TASK/ADD_TASK";
export const TASK_LIST_RESIVED = "TASK/TASK_LIST_RESIVED";
export const DELETE_TASK = "TASK/DELETE_TASK";

export const taskListResivedAction = (tasks: object[]): object => {
  return {
    type: TASK_LIST_RESIVED,
    payload: {
      tasks,
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

export const updateTaskList = (id: number) => {
  return function (dispatch, getState) {
    const state = getState();
    const taskList = getTasksListSelector(state);
    const task = taskList.find((task) => task.id === id);
    const updateTask = {
      ...task,
      done: !task.done,
    };
    gateWay.updateTask(id, updateTask).then(() => dispatch(getTaskList()));
  };
};

export const deleteCurrentTask = (id) => {
  return function (dispatch) {
    gateWay.deleteTask(id).then(() => dispatch(getTaskList()));
  };
};
export const createNewTask = (text) => {
  return function (dispatch) {
    const taskData = {
      text,
      done: false,
    };
    gateWay.createTask(taskData).then(() => dispatch(getTaskList()));
  };
};
