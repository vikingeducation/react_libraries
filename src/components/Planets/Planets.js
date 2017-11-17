import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Planets = ({ planetsData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!planetsData) {
    return <p>Error</p>;
  } else if (planetsData.results) {
    //map styling
    return planetsData.results.map(planet => {
      return (
        <Link to={planet.url.substring(20)} key={planet.name}>
          <Tile heading={planet.name} />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Planets;
