import React from "react";

const User = ({ name, age }) => {
  return (
    <li classNameName="user">
      <span classNameName="user__name">{name}</span>
      <span classNameName="user__age">{age}</span>
    </li>
  );
};

export default User;
