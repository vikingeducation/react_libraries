import React from "react";
import Tiles from "grommet/components/Tiles";

const tiles = ({ children }) => (
  <Tiles fill={false} selectable={true}>
    {children}
  </Tiles>
);

export default tiles;
