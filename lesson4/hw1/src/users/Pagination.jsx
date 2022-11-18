import React from "react";
import UsersList from "./UsersList";

const Pagination = () => {
  return (
    <div>
      <div className="pagination">
        <button className="btn">←</button>
        <span className="pagination__page">1</span>
        <button className="btn">→</button>
      </div>
      <UsersList />
    </div>
  );
};

export default Pagination;
