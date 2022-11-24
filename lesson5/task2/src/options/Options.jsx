import React, { useState } from "react";

const Options = ({ title, options, moveOption }) => {
  return (
    <div classNameNameName="options">
      <div classNameNameName="options__title">{title}</div>
      <ul classNameNameName="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button
              classNameNameName="options__list-item"
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
