import React from "react";
import Task from "./Task";
import CreateTaskInput from "./CreateTaskInput";
import { connect } from "react-redux";
import { createTask } from "../tasks.gateway";
import { getTasksListSelector } from "../tasks.selectors";
import * as taskActions from "../tasks.actions";

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

  render() {
    const sortedList = this.props.tasks;
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTaskList}
              onDelete={this.props.deleteTaskCurrentTask}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatch = {
  getTaskList: taskActions.getTaskList,
  updateTaskList: taskActions.updateTaskList,
  deleteTaskCurrentTask: taskActions.deleteTaskCurrentTask,
};
const mapState = (state) => {
  return { tasks: getTasksListSelector(state) };
};

export default connect(mapState, mapDispatch)(TasksList);
