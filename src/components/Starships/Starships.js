import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Starships = ({ starshipsData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!starshipsData) {
    return <p>Error</p>;
  } else if (starshipsData.results) {
    //map styling
    return starshipsData.results.map(starship => {
      return (
        <Link to={starship.url.substring(20)} key={starship.name}>
          <Tile heading={starship.name} />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Starships;
