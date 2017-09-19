import React from "react";
import Loading from "./Loading";

const ShowPlanet = ({ resource }) => {
  const planet = resource;
  return (
    <div>
      <Loading condition={Object.keys(resource).length} />
      <h1>{planet.name}</h1>
      <hr />
      <div>
        <h2>Basic Information</h2>
        <strong>Rotation Period:</strong> {planet.rotation_period}
        <br />
        <strong>Orbital Period:</strong> {planet.orbital_period}
        <br />
        <strong>Diameter:</strong> {planet.diameter}
        <br />
        <strong>Climate:</strong> {planet.climate}
        <br />
        <strong>Gravity:</strong> {planet.gravity}
        <br />
        <strong>Terrain:</strong> {planet.terrain}
        <br />
        <strong>Surface Water:</strong> {planet.surface_water}
        <br />
        <strong>Population:</strong> {planet.population}
        <br />
      </div>
    </div>
  );
};

export default ShowPlanet;
