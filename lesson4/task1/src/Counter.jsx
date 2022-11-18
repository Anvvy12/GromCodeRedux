import React from "react";
import { connect } from "react-redux";
import * as counterActions from "./counter.actions";
const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div classNameName="counter">
      <button classNameName="counter__button" onClick={decrement}>
        -
      </button>
      <span classNameName="counter__value" onClick={reset}>
        {counter}
      </span>
      <button classNameName="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
};

const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = (state) => {
  return {
    counter: state,
  };
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);
