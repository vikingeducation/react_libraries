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
  <div className="row well">
    <h3>Sort Your Results</h3>
    <div className="col-md-3">
      <IgFilters onChangeInput={onChangeFilter} />
    </div>
    <div className="col-md-3">
      <SearchTerm onChangeInput={onChangeSearch} searchTerm={searchTerm} />
    </div>
    <div className="col-md-3">
      <DateSorter
        onDateClick={onDateClick}
        dateSortDirection={dateSortDirection}
      />
    </div>
  </div>;

export default Filterables;
