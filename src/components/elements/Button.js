import React from "react";
import Button from "grommet/components/Button";
import Box from "grommet/components/Box";

const button = ({ path, label }) => (
  <Box
    pad="small"
    direction="row"
    justify="start"
    align="center"
    wrap={true}
    margin="none"
    colorIndex="light-2"
  >
    <Button
      label={label ? label : ""}
      primary={true}
      secondary={false}
      accent={false}
      critical={false}
      plain={false}
      path={path ? path : "/"}
    />
  </Box>
);

export default button;
