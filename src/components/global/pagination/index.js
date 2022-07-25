import React from 'react';
import { usePagination, DOTS } from './usePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
        className="flex items-center justify-between md:justify-start mt-8 mb-4 select-none"
    >
       {/* Left navigation arrow */}
      <li
        className= 'cursor-pointer hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500'
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber , index) => {
         
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={index} className="px-3 text-gray-600 dark:text-gray-100 hidden md:block select-none">&#8230;</li>;
        }
		
        // Render our Page Pills
        return (
          <li
            key={index}
            className={`${pageNumber === currentPage ? '!bg-blue-500 !text-white select-none' : ''} px-4 py-2 text-gray-600 dark:text-gray-100 mx-1 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500 rounded-md hidden md:block select-none cursor-pointer duration-300`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className='cursor-pointer hover:bg-gray-400 hover:text-white hover:dark:bg-gray-500'
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;