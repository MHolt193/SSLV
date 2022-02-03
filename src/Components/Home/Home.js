import React, { useEffect, useState } from "react";
import apiKey from "../../key";
import classes from "./Home.module.css";
import services from "../Settings/services";
import TitleInfo from "../TitleInfo/TitleInfo";

import MovieCard from "./MovieCard";
import Featured from "./Featured";

const Home = (props) => {
  /* MOVIE LIST API CALL */
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);

  const callApi = async () => {
    const myServices = services.map((service) =>
      localStorage.getItem(service.id) === "true" ? service.id + "," : ""
    );
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  };

  useEffect(() => {
    callApi();
  }, []);

  /* TITLE INFO */
  const [titleInfoUp, controlTitleInfo] = useState(false);
  const [titleId, getTitleId] = useState(undefined);

  const titleInfoHandler = (event) => {
    if (titleInfoUp === false) {
      getTitleId(event.target.id);
      controlTitleInfo(true);
      console.log(event.target.id)
    } else if (titleInfoUp === true) {
      controlTitleInfo(false);
    }
  };

  return (
    <div className={classes.container}>
      {titleInfoUp === true ? (
          <TitleInfo titleInfoHandler={titleInfoHandler} id={titleId} />
        ) : (
          null
        )}
      <div className={classes.list}>
        <div>
          {apiRetrieved === true && apiResponse.titles.length !== undefined ? (
            <Featured results={apiResponse} titleInfoHandler={titleInfoHandler} />
          ) : (
            null
          )}
        </div>
        {apiRetrieved === true && apiResponse.titles.length !== undefined
          ? apiResponse.titles.map((title) => (
              <MovieCard
                onClick={titleInfoHandler}
                imdbid={title["imdb_id"]}
                imgalt={title.title}
                key={title.id}
                id={title.id}
              />
              
            ))
          : <p>No Titles Loaded, Out of API calls?</p>}
      </div>
    </div>
  );
};
export default Home;
