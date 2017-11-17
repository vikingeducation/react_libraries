import React from "react";
import Tile from "grommet/components/Tile";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";

const tile = ({ heading, text }) => (
  <Tile separator="top" align="start">
    <Header size="small" pad={{ horizontal: "small" }}>
      <Heading tag="h4" strong={true} margin="none">
        {heading ? heading : ""}
      </Heading>
    </Header>
    <Box pad="small">
      <Paragraph margin="none">{text ? text : ""}</Paragraph>
    </Box>
  </Tile>
);

export default tile;
