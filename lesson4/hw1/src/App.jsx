import React from "react";
import Pagination from "./users/Pagination";
import UsersList from "./users/UsersList";

export default () => {
  return (
    <div>
      <Pagination />
      <UsersList />
    </div>
  );
};
