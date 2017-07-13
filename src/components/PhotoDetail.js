import React from "react";

const PhotoDetail = ({ label, data }) => {
  return (
    <p>
      <strong>{label}: </strong>
      {data}
    </p>
  );
};

export default PhotoDetail;
