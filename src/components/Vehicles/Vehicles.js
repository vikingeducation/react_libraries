import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Vehicles = ({ vehiclesData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!vehiclesData) {
    return <p>Error</p>;
  } else if (vehiclesData.results) {
    //map styling
    return vehiclesData.results.map((vehicle, index) => {
      return (
        <Link to={vehicle.url.substring(20)} key={vehicle.name}>
          <Tile heading={vehicle.name} />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Vehicles;
