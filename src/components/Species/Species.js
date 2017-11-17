import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Species = ({ speciesData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!speciesData) {
    return <p>Error</p>;
  } else if (speciesData.results) {
    //map styling
    return speciesData.results.map(specie => {
      return (
        <Link to={specie.url.substring(20)} key={specie.name}>
          <Tile heading={specie.name} />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Species;
