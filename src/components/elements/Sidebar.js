import React from "react";
import Sidebar from "grommet/components/Sidebar";
import Header from "grommet/components/Header";

import Box from "grommet/components/Box";
import Menu from "grommet/components/Menu";
import Anchor from "./Anchor";

const sideBar = ({ header, links }) => {
  let linksMapped = "";
  if (links) {
    linksMapped = links.map(single => (
      <Anchor key={single.href} path={single.href}>
        {single.title}
      </Anchor>
    ));
  }

  return (
    <Sidebar id="sidebar-grommet" colorIndex="neutral-1" size="xsmall">
      <Header justify="between">{header}</Header>
      <Box justify="start">
        <Menu primary={true}>{linksMapped}</Menu>
      </Box>
    </Sidebar>
  );
};

export default sideBar;
