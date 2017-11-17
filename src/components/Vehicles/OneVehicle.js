import React from "react";

import Button from "../elements/Button";

const vehicleLinks = data => {
  return data.map((single, index) => {
    return (
      <Button key={single} path={single.substring(20)} label={index + 1} />
    );
  });
};

const Vehicle = ({ vehicleData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!vehicleData) {
    return <p>Error</p>;
  } else if (vehicleData.films) {
    return (
      <div className="vehicle card" key={vehicleData.name}>
        <h3>{vehicleData.name}</h3>
        <p>Cargo Capacity: {vehicleData.cargo_capacity}</p>
        <p>Consumables: {vehicleData.consumables}</p>
        <p>Cost: {vehicleData.cost_in_credits}credits</p>
        <p>Crew: {vehicleData.crew}</p>
        <p>Length: {vehicleData.length}</p>
        <p>Manufacturer: {vehicleData.manufacturer}</p>
        <p>Max Atmosphering Speed: {vehicleData.max_atmosphering_speed}</p>
        <p>Model: {vehicleData.model}</p>
        {vehicleData.pilots ? (
          <p>Pilots: {vehicleLinks(vehicleData.pilots)}</p>
        ) : (
          <div />
        )}
        <p>Passenagers: {vehicleData.passengers}</p>
        <p>Vehicle Class: {vehicleData.vehicle_class}</p>
        <p>Films: {vehicleLinks(vehicleData.films)}</p>
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Vehicle;
