import React from "react";
import { connect } from "react-redux";

const User = ({ usersList }) => {
  return (
    <ul className="users">
      {usersList.map(({ id, name, age }) => (
        <li className="user" key={id}>
          <span className="user__name">{name}</span>
          <span className="user__age">{age}</span>
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
