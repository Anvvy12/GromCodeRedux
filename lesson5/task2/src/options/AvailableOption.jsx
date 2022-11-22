import { connect } from "react-redux";
import { avaibleOptionsSelector } from "./options.selectors";
import Options from "./Options";
import { togglOption } from "./options.actions";

const mapState = (state) => {
  return {
    options: avaibleOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: togglOption,
};

export default connect(mapState, mapDispatch)(Options);
