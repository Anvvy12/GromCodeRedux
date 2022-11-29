import React, { useEffect } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { connect } from "react-redux";
import { filterListSelector } from "../tasks.selectors";
import * as taskActions from "../tasks.actions";

const TasksList = (args) => {
  useEffect(() => getTaskList(), []);

  const {
    getTaskList,
    updateTaskList,
    deleteCurrentTask,
    createNewTask,
    tasks,
  } = args;

  return (
    <div className="todo-list">
      <CreateTaskInput onCreate={createNewTask} />
      <ul className="list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onChange={updateTaskList}
            onDelete={deleteCurrentTask}
          />
        ))}
      </ul>
    </div>
  );
};

const mapDispatch = {
  getTaskList: taskActions.getTaskList,
  updateTaskList: taskActions.updateTaskList,
  deleteCurrentTask: taskActions.deleteCurrentTask,
  createNewTask: taskActions.createNewTask,
};

const mapState = (state) => {
  return {
    tasks: filterListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TasksList);
