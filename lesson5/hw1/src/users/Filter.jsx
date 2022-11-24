import React, { useState } from "react";
import { connect } from "react-redux";
import { filterAction } from "./users.actions";

const Filter = ({ filterClick, actualValue, filterText }) => {
  // const [inputsValue, setInputsValue] = useState("");
  // const hadleInput = (event) => {
  //   setInputsValue(event.target.value);
  // };
  console.dir(actualValue);

  return (
    <div>
      <div classNameName="filter">
        <span classNameName="filter__count"></span>
        <input
          type="text"
          classNameName="filter__input"
          value={filterText}
          onChange={() => filterClick(event)}
        />
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    filterText: state.user.filterText,
    actualValue: state.user.filterText,
  };
};

const mapDispatch = {
  filterClick: filterAction,
};
export default connect(mapState, mapDispatch)(Filter);
