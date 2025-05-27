import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const PaginationWrapper = ({ data, itemsPerPage, onPageDataChange }) => {
  const [currentPage, setCurrentPage] = useState(0);
  

  const pageCount = Math.ceil(data.length / itemsPerPage);

  useEffect(() => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = data.slice(start, end);
    onPageDataChange(currentItems); // ✅ جلوگیری از حلقه بینهایت
  }, [currentPage, data, itemsPerPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <div className="flex justify-center mt-4">
      <ReactPaginate
        previousLabel={'قبلی'}
        nextLabel={'بعدی'}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={'pagination  flex items-center gap-4 cursor-pointer px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-md'}
        activeClassName={'bg-sky-500 text-white rounded'}
        pageLinkClassName={'px-5 max-sm:px-2 py-12  rounded'}
        previousLinkClassName={'px-3 py-1  rounded'}
        nextLinkClassName={'px-3 py-1  rounded'}
        breakLabel={'...'}
        breakClassName={'px-3 py-1'}
      />
    </div>
  );
};

export default PaginationWrapper;
