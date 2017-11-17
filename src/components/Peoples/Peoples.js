import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Peoples = ({ peopleData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!peopleData) {
    return <p>Error</p>;
  } else if (peopleData.results) {
    //map styling
    return peopleData.results.map(person => {
      return (
        <Link to={person.url.substring(20)} key={person.name}>
          <Tile heading={person.name} />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Peoples;
