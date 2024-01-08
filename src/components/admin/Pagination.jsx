import React from "react";
import "../../styles/admin/pagination.scss";

function Pagination(props) {
  const {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    setItemsPerPage,
    onSelectPage,
  } = props.paginationComponentOptions;

  const renderPageNumbers = () => {
    const maxVisiblePages = 4; // Adjust the number of visible page numbers
    const pages = [];

    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination_btn ${currentPage === i ? "active" : ""}`}
          onClick={() => onSelectPage(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const shouldShowNavigation = totalPages > 8; // Set the threshold for showing navigation buttons

  return (
    <div className="pagination_section">
      <div className="pagination_link">
        {shouldShowNavigation && (
          <button className="pre_btn" onClick={prevPage}>
            Previous
          </button>
        )}
        {renderPageNumbers()}
        {shouldShowNavigation && currentPage < totalPages && (
          <button className="next_btn" onClick={nextPage}>
            Next
          </button>
        )}
        {/* {shouldShowNavigation && (
          <div className="current_page">Page {currentPage} of {totalPages}</div>
        )} */}
      </div>
    </div>
  );
}

export default Pagination;
