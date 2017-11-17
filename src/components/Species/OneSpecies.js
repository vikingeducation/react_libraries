import React from "react";

import Button from "../elements/Button";

const specieLinks = data => {
  return data.map((single, index) => {
    return (
      <Button key={single} path={single.substring(20)} label={index + 1} />
    );
  });
};

const Specie = ({ specieData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!specieData) {
    return <p>Error</p>;
  } else if (specieData.films) {
    return (
      <div className="specie card" key={specieData.name}>
        <h3>{specieData.name}</h3>
        <p>Height ≈ {specieData.average_height}cm</p>
        <p>Lifespan ≈ {specieData.average_lifespan}</p>
        <p>Classification: {specieData.classification}</p>
        <p>Designation: {specieData.designation}</p>
        <p>Eye Colors: {specieData.eye_colors}</p>
        <p>Hair Colors: {specieData.hair_colors}</p>
        <p>Skin Colors: {specieData.skin_colors}</p>
        <p>
          Homeworld:{" "}
          <Button path={specieData.homeworld.substring(20)} label={"1"} />
        </p>
        <p>Languages: {specieData.language}</p>
        <p>Films: {specieLinks(specieData.films)}</p>
        {specieData.people ? (
          <p>People: {specieLinks(specieData.people)}</p>
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Specie;
