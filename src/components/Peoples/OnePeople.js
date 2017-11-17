import React from "react";

import Button from "../elements/Button";

const personLinks = data => {
  return data.map((single, index) => {
    return (
      <Button key={single} path={single.substring(20)} label={index + 1} />
    );
  });
};

const Peoples = ({ peopleData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!peopleData) {
    return <p>Error</p>;
  } else if (peopleData.films) {
    return (
      <div className="people card" key={peopleData.name}>
        <h3>{peopleData.name}</h3>
        <p>Born: {peopleData.birth_year}</p>
        {peopleData.species ? (
          <p>Species: {personLinks(peopleData.species)}</p>
        ) : (
          <div />
        )}
        <p>Gender: {peopleData.gender}</p>
        <p>Hair: {peopleData.hair_color}</p>
        <p>Eye: {peopleData.eye_color}</p>
        <p>Skin Color: {peopleData.skin_color}</p>
        <p>Height: {peopleData.height}cm</p>
        <p>Mass: {peopleData.mass}</p>
        {peopleData.homeworld ? (
          <p>
            Homeworld:{" "}
            <Button path={peopleData.homeworld.substring(20)} label={"1"} />
          </p>
        ) : (
          <div />
        )}
        {peopleData.films ? (
          <p>Films: {personLinks(peopleData.films)}</p>
        ) : (
          <div />
        )}
        {peopleData.starships ? (
          <p>Starships: {personLinks(peopleData.starships)}</p>
        ) : (
          <div />
        )}
        {peopleData.vehicles ? (
          <p>Vehicles: {personLinks(peopleData.vehicles)}</p>
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <p>Error</p>;
  }
};

export default Peoples;
