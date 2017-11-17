import React from "react";
import Anchor from "grommet/components/Anchor";

const anchor = ({ label, path, className, children }) => {
  if (!path) {
    path = "#";
  }
  return (
    <Anchor path={path} className={className} reverse={false} disabled={false}>
      {children}
    </Anchor>
  );
};

export default anchor;
