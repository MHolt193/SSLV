import React, { useEffect, useState, useCallback } from "react";
import apiKey from "../../key";
import classes from "../TV Shows/TvShows.module.css";
import services from "../Settings/services";
import TitleInfo from "../TitleInfo/TitleInfo";

import MovieCard from "../Home/MovieCard";

const Movies = (props) => {
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const callApi = useCallback(async () => {
    const myServices = services.map((service) =>
      localStorage.getItem(service.id) === "true" ? service.id + "," : ""
    );
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}&types=movie,short_film&page=${pageNumber}`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  }, [pageNumber]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  /* TITLE INFO */
  const [titleInfoUp, controlTitleInfo] = useState(false);
  const [titleId, getTitleId] = useState(undefined);

  const titleInfoHandler = (event) => {
    if (titleInfoUp === false) {
      getTitleId(event.target.id);
      controlTitleInfo(true);
      console.log(event.target.id);
    } else if (titleInfoUp === true) {
      controlTitleInfo(false);
    }
  };
  const nextPageHandler = () => {
    window.scroll(0, 0);
    setPageNumber(pageNumber + 1);
  };
  const prevPageHandler = () => {
    window.scroll(0, 0);
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className={classes.container}>
      {titleInfoUp === true ? (
        <TitleInfo titleInfoHandler={titleInfoHandler} id={titleId} />
      ) : null}
      <div className={classes.list}>
        {apiRetrieved === true && apiResponse.titles.length > 1
          ? apiResponse.titles.map((title) => (
              <MovieCard
                onClick={titleInfoHandler}
                imdbid={title["imdb_id"]}
                imgalt={title.title}
                key={title.id}
                id={title.id}
              >
                {title.title}
              </MovieCard>
            ))
          : ""}
        {pageNumber === 1 ? (
          <div className={classes.pageControl}>
            <p>page {pageNumber}</p>
            <button onClick={nextPageHandler}>Next Page</button>
          </div>
        ) : pageNumber > 1 ? (
          <div className={classes.pageControl}>
            <button onClick={prevPageHandler}>Prev. Page</button>
            <p>page {pageNumber}</p>
            <button onClick={nextPageHandler}>Next Page</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Movies;
