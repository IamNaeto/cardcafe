import React, { useState, useEffect } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  useEffect(() => {
    setShowLeftArrow(currentPage > 1);
    setShowRightArrow(currentPage < totalPages);
  }, [currentPage, totalPages]);

  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-lg ${
            currentPage === i ? 'bg-orange text-white' : 'bg-[#FEF0E8] text-orange'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center my-4">
      <button
        className={`mx-1 px-3 py-1 rounded-lg ${!showLeftArrow ? 'bg-gray-100 text-orange cursor-not-allowed' : 'bg-orange text-white cursor-pointer'}`}
        disabled={!showLeftArrow}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {renderPageNumbers()}
      <button
        className={`mx-1 px-3 py-1 rounded-lg ${!showRightArrow ? 'bg-gray-100 text-orange cursor-not-allowed' : 'bg-orange text-white cursor-pointer'}`}
        disabled={!showRightArrow}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
