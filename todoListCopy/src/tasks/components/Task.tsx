import React from "react";

interface newTask {
  text: string;
  done: boolean;
  //onChange(args: number) => return type
  onChange?: any;
  id: number;
  onDelete?: any;
}

const Task: React.FC<newTask> = ({ text, done, onChange, id, onDelete }) => {
  let isDone = done ? "list-item_done" : "list-item";

  return (
    <li className={isDone}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
};

// Task.propTypes = {
//   text: PropTypes.string,
//   done: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// Task.defaultProps = {
//   done: false,
//   text: "",
// };

export default Task;
