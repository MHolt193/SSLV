import React, { useEffect, useState, useCallback} from "react";
import apiKey from "../../key";
import classes from "./TvShows.module.css";
import services from '../Settings/services'

import MovieCard from "../Home/MovieCard";

const TvShows = (props) => {
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);

  

  const callApi = useCallback(async () => {
    const myServices = services.map((service) => localStorage.getItem(service.id) === 'true' ?
  service.id + ',':'')
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}&types=tv_series,tv_special,tv_miniseries`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  },[]);

  useEffect(() => {
    callApi();
  }, [callApi]);


  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {apiRetrieved === true && apiResponse.titles.length > 1
          ? apiResponse.titles.map((title) => (
              <MovieCard
                imdbid={title["imdb_id"]}
                imgalt={title.title}
                key={title.id}
              >
                {title.title}
              </MovieCard>
            ))
          : ""}
      </div>
    </div>
  );
};
export default TvShows;
