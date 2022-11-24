import React from "react";
import { connect } from "react-redux";

const User = ({ usersList }) => {
  return (
    <ul classNameName="users">
      {usersList.map(({ id, name, age }) => (
        <li classNameName="user" key={id}>
          <span classNameName="user__name">{name}</span>
          <span classNameName="user__age">{age}</span>
        </li>
      ))}
    </ul>
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
export default connect(mapState)(User);
