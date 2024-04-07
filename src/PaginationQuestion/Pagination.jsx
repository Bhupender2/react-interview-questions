import React, { useState } from "react";
import Paginate from "react-paginate";

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <Paginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;