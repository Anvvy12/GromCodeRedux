import React, { useState } from "react";
import User from "./User";
import Pagination from "./Pagination";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goPrev = () => {
    currentPage === 1 ? null : setCurrentPage(currentPage - 1);
  };
  const goNext = () => {
    currentPage === 3 ? null : setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <Pagination goPrev={goPrev} currentPage={currentPage} goNext={goNext} />
      <ul>
        <User />
      </ul>
    </div>
  );
};

export default UsersList;
