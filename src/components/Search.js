import React from "react";
import TextField from "material-ui/TextField";

const Search = ({ onChange }) => {
	return (
		<div className="search-box">
			<TextField hintText="Search" onChange={onChange} />
		</div>
	);
};

export default Search;
