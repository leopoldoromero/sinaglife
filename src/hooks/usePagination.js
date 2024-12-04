'use client'
import { useState } from 'react';

const usePagination = (itemsPerPage, data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const start = (currentPage - 1) * itemsPerPage;
  const end = currentPage * itemsPerPage - 1;
  const dataToShow = data?.slice(start, end);

  const nextHandler = () => setCurrentPage(currentPage + 1);
  const prevHandler = () => setCurrentPage(currentPage - 1);
  const selectPage = (page) => setCurrentPage(page);

  return {
    currentPage,
    dataToShow,
    nextHandler,
    prevHandler,
    selectPage,
  };
};

export default usePagination;
