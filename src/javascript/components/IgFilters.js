import React from "react";
import { getFilters } from "../helpers";
import Select from "./elements/Select";


const IgFilters = ({ onChangeInput }) => {
  const filters = getFilters();
  return (
    <div className="form-group">
      <label htmlFor="igFilter">Instagram Filters</label>
      <Select name="igFilter" options={filters} onChange={onChangeInput} />
    </div>
  );
};

export default IgFilters;
