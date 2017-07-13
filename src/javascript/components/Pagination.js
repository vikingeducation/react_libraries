import React from "react";
import Button from 'react-md/lib/Buttons/Button';

const PaginationButton = ({ direction, onClick }) => {
  return (
    <Button raised secondary label={direction} onClick={onClick} />
      
  );
};

const Pagination = ({ page, onIncrement, onDecrement }) => {
  return (
    <div className="md-grid">
      <div className="md-cell--4">
        <PaginationButton direction="Previous" onClick={onDecrement} />
      </div>
      <div className="md-cell--4">
        <h3>
          Page {page}
        </h3>
      </div>
      <div className="md-cell--4">
        <PaginationButton direction="Next" onClick={onIncrement} />
      </div>
    </div>
  );
};

export default Pagination;
