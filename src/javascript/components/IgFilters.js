import React from "react";
import { getFilters } from "../helpers";
import Select from "./elements/Select";
import SelectField from 'react-md/lib/SelectFields';

const IgFilters = ({ onChangeInput }) => {
  const filters = getFilters();
  return (
    <div className="form-group">
      <SelectField name="igFilter" placeholder="Instagram Filters" menuItems={filters} onChange={onChangeInput} />
    </div>
  );
};

export default IgFilters;
