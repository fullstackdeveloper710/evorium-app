import { useState, useEffect } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data.slice(startIndex, endIndex));
  }, [currentPage, data, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, Math.ceil(data.length / itemsPerPage)));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(1, page), Math.ceil(data.length / itemsPerPage)));
  };

  return {
    currentData,
    currentPage,
    totalPages: Math.ceil(data.length / itemsPerPage),
    nextPage,
    prevPage,
    goToPage,
  };
};

export default usePagination;


// const { currentData, currentPage, totalPages, nextPage, prevPage, goToPage } = usePagination(data, itemsPerPage);