import React from "react";
import { Link } from "react-router-dom";
import Tile from "../elements/Tile";

const Films = ({ filmData, isFetching }) => {
  if (isFetching) {
    return <p>Loading...</p>;
  } else if (!filmData) {
    return <p>Error</p>;
  } else if (filmData.results) {
    //Sort Films by episode
    let sortedFilms = filmData;
    sortedFilms.results.sort((a, b) => {
      return a.release_date > b.release_date;
    });
    //map styling
    return sortedFilms.results.map(film => {
      return (
        <Link to={film.url.substring(20)} key={film.episode_id}>
          <Tile
            heading={film.title + " Episode " + film.episode_id}
            text={
              <span>
                <small>{film.release_date} </small>
                <small>
                  <b>Director:</b> {film.director}{" "}
                </small>
                <small>
                  <b>Producer:</b> {film.producer}{" "}
                </small>
                <p>{film.opening_crawl}</p>
              </span>
            }
          />
        </Link>
      );
    });
  } else {
    return <p>Error</p>;
  }
};

export default Films;
