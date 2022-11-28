import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { connect } from "react-redux";
import { createTask, updateTask, deleteTask } from "../tasks.gateway";
import { getTasksListSelector } from "../tasks.selectors";

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTaskList();
  }

  onCreate = (text) => {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = (id) => {
    const { done, text } = this.state.tasks.find((task) => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.props.taskList;
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.handleTaskStatusChange}
              onDelete={this.handleTaskDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  getTaskList: getTasksListSelector,
};
const mapState = (state) => {
  return { taskList: state.tasksList.tasksList };
};

export default connect(mapState, mapDispatch)(TasksList);
