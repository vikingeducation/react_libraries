import React from "react";
import TextField from 'react-md/lib/TextFields';

const SearchTerm = ({ onChangeInput, searchTerm }) => {
  return (
    <div className="form-group">
      <TextField name="searchTerm" placeholder="Enter a search keyword" onChange={onChangeInput} value={searchTerm} />
    </div>
  );
};

export default SearchTerm;
