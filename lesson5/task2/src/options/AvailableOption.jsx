import { connect } from "react-redux";
import { avaibleOptionsSelector } from "./options.selectors";
import Options from "./Options";

const mapState = (state) => {
  return {
    options: avaibleOptionsSelector(state),
  };
};

export default connect(mapState)(Options);
