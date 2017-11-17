import React from "react";

import Button from "../elements/Button";

const planetLinks = data => {
  return data.map((single, index) => {
    return (
      <Button key={single} path={single.substring(20)} label={index + 1} />
    );
  });
};

const Planet = ({ planetData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!planetData) {
    return <p>Error</p>;
  } else if (planetData.residents) {
    return (
      <div className="planet card" key={planetData.name}>
        <h3>{planetData.name}</h3>
        <p>Climate: {planetData.climate}</p>
        <p>Diameter: {planetData.diameter}</p>
        <p>Gravity: {planetData.gravity}</p>
        <p>Orbital Period: {planetData.orbital_period}</p>
        <p>Rotation Period: {planetData.rotation_period}</p>
        <p>Surface Water: {planetData.surface_water}</p>
        <p>Terrain: {planetData.terrain}</p>
        <p>Residents: {planetLinks(planetData.residents)}</p>
        {planetData.films ? (
          <p>Films: {planetLinks(planetData.films)}</p>
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Planet;
