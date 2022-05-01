import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../Pagination/Pagination.css";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-outline-primary next"
      previousClassName="btn btn-outline-primary prev"
      breakLabel="..."
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(e) => setPageNumber(e.selected + 1)}
      pageCount={info?.pages}
    />
  );
};

export default Pagination;
