import React from "react";
import Input from "./elements/Input";
import TextField from 'react-md/lib/TextFields';

const SearchTerm = ({ onChangeInput, searchTerm }) => {
  return (
    <div className="form-group">
      <label htmlFor="SearchTerm">Search by Keyword</label>
      <TextField name="searchTerm" onChange={onChangeInput} value={searchTerm} />
    </div>
  );
};

export default SearchTerm;
