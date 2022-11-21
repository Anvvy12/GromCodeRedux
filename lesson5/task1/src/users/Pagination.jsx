import React from "react";
const Pagination = ({
  currentPage,
  goNext,
  goPrev,
  itemsPerPage,
  totalItems,
}) => {
  const prevPageAvailable = currentPage > 0;
  const nextPageAvaliable = totalItems - itemsPerPage * (currentPage + 1) >= 0;

  return (
    <div classNameName="pagination">
      <button
        classNameName="btn"
        disabled={!prevPageAvailable}
        onClick={goPrev}
      >
        {prevPageAvailable && "←"}
      </button>
      <span classNameName="pagination__page">{currentPage + 1}</span>
      <button
        classNameName="btn"
        disabled={!nextPageAvaliable}
        onClick={goNext}
      >
        {nextPageAvaliable && "→"}
      </button>
    </div>
  );
};

export default Pagination;
