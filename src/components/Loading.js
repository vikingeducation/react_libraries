import React from "react";
import CircularProgress from "material-ui/CircularProgress";

const Loading = ({ condition }) => {
	return condition ? null : (
		<div className="loading">
			<CircularProgress />
		</div>
	);
};

export default Loading;
