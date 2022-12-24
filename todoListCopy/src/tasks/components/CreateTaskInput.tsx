import React, { useState } from "react";

interface CreateTask {
  onCreate(title: string): void;
}

const CreateTaskInput: React.FC<CreateTask> = ({ onCreate }) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleTaskCreate = () => {
    onCreate(value);
    setValue("");
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button className="btn create-task__btn" onClick={handleTaskCreate}>
        Create
      </button>
    </div>
  );
};

export default CreateTaskInput;
