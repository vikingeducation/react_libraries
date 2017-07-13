import React from "react";

const PaginationButton = ({ direction, onClick }) => {
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      {direction}
    </button>
  );
};

const Pagination = ({ page, onIncrement, onDecrement }) => {
  return (
    <div className="row">
      <div className="col-md-4">
        <PaginationButton direction="Previous" onClick={onDecrement} />
      </div>
      <div className="col-md-4">
        <h3>
          Page {page}
        </h3>
      </div>
      <div className="col-md-4">
        <PaginationButton direction="Next" onClick={onIncrement} />
      </div>
    </div>
  );
};

export default Pagination;
