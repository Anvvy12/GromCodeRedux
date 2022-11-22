import React from "react";
import { connect } from "react-redux";

const User = () => {
  return (
    <li className="user">
      <span className="user__name">Tad</span>
      <span className="user__age">18</span>
    </li>
  );
};

const mapState = () => {
  return null;
};

const mapDispatch = () => {
  return null;
};
export default connect(mapState, mapDispatch)(User);
