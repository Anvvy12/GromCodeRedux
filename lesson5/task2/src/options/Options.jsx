import React from "react";
import { connect } from "react-redux";
import { optionsListSelector } from "./options.selectors";

const Options = ({ title, options }) => {
  return (
    <div className="options">
      <div className="options__title">{title}</div>
      <ul className="options__list">
        {options.map((option) => (
          <li key={option.id}>
            <button
              className="options__list-item"
              onClick={() => console.log(option.id)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    options: optionsListSelector(state),
  };
};

export default connect(mapState)(Options);
