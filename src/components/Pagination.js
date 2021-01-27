import React from 'react';
import ReactPaginate from 'react-paginate';
import '../css/styles.css';


export const Pagination = ({pageCount, handlePageClick}) => {

  return (

      /*
        marginPagesDisplayed: The number of pages to display for margins.
        pageRangeDisplayed: The range of pages displayed.
      */

      <div className='pagination-container'>
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>

      </div>

  );
};
export default Pagination;

