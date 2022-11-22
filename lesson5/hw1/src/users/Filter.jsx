import React, { useState } from "react";
import { connect } from "react-redux";
import { filtersValueSelector } from "./users.actions";

const Filter = () => {
  const [inputsValue, setInputsValue] = useState("");
  const hadleInput = (event) => {
    setInputsValue(event.target.value);
  };

  return (
    <div>
      <div className="filter">
        <span className="filter__count"></span>
        <input
          type="text"
          className="filter__input"
          value={inputsValue}
          onChange={() => hadleInput(event)}
        />
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: state.user.usersList,
  };
};

const mapDispatch = {
  filterClick: filterAction,
};
export default connect(mapState, mapDispatch)(Filter);
