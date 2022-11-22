import React from "react";
import Filter from "./Filter";
import User from "./User";
import { connect } from "react-redux";

const UsersList = ({ usersList }) => {
  console.log(usersList);
  return (
    <div>
      <Filter />
      <User />
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: state.user.usersList,
  };
};

// const mapDispatch = {
//   filterClick: filterAction,
// };
export default connect(mapState)(UsersList);
