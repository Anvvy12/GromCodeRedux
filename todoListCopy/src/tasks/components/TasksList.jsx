import React, { useEffect } from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { connect } from "react-redux";
import { filterListSelector } from "../tasks.selectors";
import * as taskActions from "../tasks.actions";
import styled from "styled-components";

const DotoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  background-color: coral;
  border-radius: 8px;
  padding: 8px;
  max-width: 600px;
  margin: auto;
`;

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
    <DotoList>
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
    </DotoList>
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
