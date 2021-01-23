import React from 'react';

type PaginationProps = {
  onNextClick: () => void;
  onPrevClick: () => void;
  page: number;
};

export function Pagination({ onNextClick, onPrevClick, page }: PaginationProps) {
  const arrowStyles = {
    border: 'solid black',
    borderWidth: '0 3px 3px 0',
    display: 'inline-block',
    padding: '3px',
  };

  const arrowLeft = {
    transform: 'rotate(135deg)',
    WebkitTransform: 'rotate(135deg)',
  };

  const arrowRight = {
    transform: 'rotate(-45deg)',
    WebkitTransform: 'rotate(-45deg)',
  };

  return (
    <div>
      <i style={{ ...arrowStyles, ...arrowLeft }} onClick={onPrevClick} />
      {page}
      <i style={{ ...arrowStyles, ...arrowRight }} onClick={onNextClick} />
    </div>
  );
}
