import { useState } from 'react';

export function useGHPagination(per_page: number) {
  const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setStartIndex((prevIndex) => prevIndex + per_page);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setStartIndex((prevIndex) => prevIndex - per_page);
  };

  return {
    since: startIndex,
    page: currentPage,
    nextPage,
    prevPage,
  };
}
