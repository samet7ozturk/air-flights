import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        className={`px-3 py-1 mx-1 ${currentPage === 1 ? "opacity-50" : ""}`}
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>

      <button
        className={`px-3 py-1 mx-1 ${
          currentPage === 1 ? "bg-[#4a0097] text-white" : "bg-gray-200"
        }`}
        onClick={() => handleClick(1)}
      >
        1
      </button>

      {currentPage > 2 && <span className="mx-2">...</span>}

      {currentPage > 1 && currentPage < totalPages && (
        <button className="px-3 py-1 mx-1 bg-[#4a0097] text-white">
          {currentPage}
        </button>
      )}

      {currentPage < totalPages - 1 && <span className="mx-2">...</span>}

      {totalPages > 1 && (
        <button
          className={`px-3 py-1 mx-1 ${
            currentPage === totalPages
              ? "bg-[#4a0097] text-white"
              : "bg-gray-200"
          }`}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </button>
      )}

      <button
        className={`px-3 py-1 mx-1 ${
          currentPage === totalPages ? "opacity-50" : ""
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
