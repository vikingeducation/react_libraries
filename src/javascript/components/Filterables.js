import React from "react";
import IgFilters from "./IgFilters";
import DateSorter from "./DateSorter";
import SearchTerm from "./SearchTerm";

const Filterables = ({
  onChangeFilter,
  onChangeSearch,
  onDateClick,
  dateSortDirection,
  searchTerm
}) =>
  <div className="md-grid">
    <div className="md-cell--4">
      <h3>Sort Your Results</h3>
      <IgFilters onChangeInput={onChangeFilter} />
    </div>
    <div className="md-cell--4">
      <SearchTerm onChangeInput={onChangeSearch} searchTerm={searchTerm} />
    </div>
    <div className="md-cell--4">
      <DateSorter
        onDateClick={onDateClick}
        dateSortDirection={dateSortDirection}
      />
    </div>
  </div>;

export default Filterables;
