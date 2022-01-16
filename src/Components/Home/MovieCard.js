import React, { useState, useEffect, useCallback } from "react";
import classes from "./MovieCard.module.css";

const MovieCard = (props) => {
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);
  const callApi = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/find/${props.imdbid}?api_key=5f027ed6c33a834707d6d1b883944a4b&external_source=imdb_id`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  }, [props.imdbid]);
  useEffect(() => {
    callApi();
  }, [callApi]);


  return (
    <div className={classes.card} onClick={props.onClick}>
      {apiRetrieved === true && apiResponse['movie_results'].length  >= 1 ?
      <img  id={props.id}
        src={`http://image.tmdb.org/t/p/w154${apiResponse['movie_results'][0]['poster_path']}`}
        alt={`${props.imgalt} poster`}
      />: apiRetrieved === true && apiResponse['tv_results'].length >= 1 ?<img  id={props.id}
      src={`http://image.tmdb.org/t/p/w154${apiResponse['tv_results'][0]['poster_path']}`}
      alt={`${props.imgalt} poster`}
    />:<img  id={props.id}
    src={`http://image.tmdb.org/t/p/w150/`}
    alt={`${props.imgalt} poster`}
  />}
    </div>
  );
};

export default MovieCard;
