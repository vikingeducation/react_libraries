import React from "react";
import Input from "./elements/Input";

const SearchTerm = ({ onChangeInput, searchTerm }) => {
  return (
    <div className="form-group">
      <label htmlFor="SearchTerm">Search by Keyword</label>
      <Input name="searchTerm" onChange={onChangeInput} value={searchTerm} />
    </div>
  );
};

export default SearchTerm;
