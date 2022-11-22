import React from "react";

const Options = ({ title, options, moveOption }) => {
  return (
    <div classNameName="options">
      <div classNameName="options__title">{title}</div>
      <ul classNameName="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button
              classNameName="options__list-item"
              onClick={() => moveOption(option.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
