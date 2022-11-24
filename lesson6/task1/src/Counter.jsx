import React from "react";
import { connect } from "react-redux";
import * as counterActions from "./counter.action";
import { countSelector } from "./counter.selector";

const Counter = ({ increment, decrement, reset, count }) => {
  console.log(count);
  return (
    <div className="counter">
      <button className="counter__button" onClick={() => decrement()}>
        -
      </button>
      <span className="counter__value" onClick={() => reset()}>
        {count}
      </span>
      <button className="counter__button" onClick={() => increment()}>
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
    count: countSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Counter);

// export default Counter;
