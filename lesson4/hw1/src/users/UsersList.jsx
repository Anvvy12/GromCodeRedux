import React from "react";
import User from "./User";
import Pagination from "./Pagination";

const UsersList = () => {
  return (
    <div>
      <Pagination />
      <ul>
        <User />
      </ul>
    </div>
  );
};

export default UsersList;
