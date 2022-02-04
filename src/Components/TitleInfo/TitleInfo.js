import React, { useState, useEffect, useCallback } from "react";
import classes from "./TitleInfo.module.css";
import apiKey from "../../key";

const TitleInfo = (props) => {
  /* WATCHMODE API */
  const [watchModeApiResponse, setWatchModeApiResults] = useState([]);
  const [watchModeApiRetrieved, setWatchModeApiRetrieved] = useState(false);

  const callWatchModeApi = useCallback( async () => {
    const response = await fetch(
      `https://api.watchmode.com/v1/title/${props.id}/details/?apiKey=${apiKey}&append_to_response=sources`
    );
    const data = await response.json();
    setWatchModeApiResults(data);
    setWatchModeApiRetrieved(true);
    console.log(data);
  },[props.id]);

  useEffect(() => {
    callWatchModeApi();
    //eslint-disable-next-line
  }, []);

  /* TMDB IMAGE API */

  const [tmdbApiResponse, setTmdbApiResults] = useState([]);
  const [tmdbApiRetrieved, setTmdbApiRetrieved] = useState(false);

 


  let titleLink = "";
    if (watchModeApiRetrieved && watchModeApiResponse.sources !== undefined) {
      for (let i = 0; i < watchModeApiResponse.sources.length; i++) {
        if (
          localStorage.getItem(watchModeApiResponse.sources[i]["source_id"]) ===
          "true"
        ) {
         titleLink = `${watchModeApiResponse.sources[i]["web_url"]}`;
          break;
        } else {
         
          titleLink = `${watchModeApiResponse.sources[0]["web_url"]}`;
        }
      }
    };

  const callTmdbApi = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/find/${watchModeApiResponse["imdb_id"]}?api_key=5f027ed6c33a834707d6d1b883944a4b&external_source=imdb_id`
    );
    const data = await response.json();
    setTmdbApiResults(data);
    setTmdbApiRetrieved(true);
  }, [watchModeApiResponse]);

  useEffect(() => {
    if (watchModeApiRetrieved && watchModeApiResponse.sources !== undefined) {
      callTmdbApi();
    }
  }, [watchModeApiRetrieved, watchModeApiResponse, callTmdbApi]);
  return (
    <div className={classes.container}>
      <div className={classes.infoCard}>
        <div className={classes.poster}>
          {watchModeApiRetrieved === true &&
          watchModeApiResponse.length !== 0 ? (
            <a href={titleLink} target="_blank" rel="noreferrer">
              <img
                src={
                  tmdbApiRetrieved &&
                  tmdbApiResponse["movie_results"].length >= 1
                    ? `http://image.tmdb.org/t/p/w185${tmdbApiResponse["movie_results"][0]["poster_path"]}`
                    : tmdbApiRetrieved &&
                      tmdbApiResponse["tv_results"].length >= 1
                    ? `http://image.tmdb.org/t/p/w185${tmdbApiResponse["tv_results"][0]["poster_path"]}`
                    : `http://img.omdbapi.com/?apikey=89a451f1&i=${watchModeApiResponse["imdb_id"]}`
                }
                alt={`${watchModeApiResponse.title} poster`}
              />
            </a>
          ) : null}
        </div>
        <div className={classes.info}>
          <button className={classes.close} onClick={props.titleInfoHandler}>
            X
          </button>
          <h3 className={classes.title}>{watchModeApiResponse.title}</h3>
          <p className={classes.description}>
            {watchModeApiResponse["plot_overview"]}
          </p>

          <p className={classes.rating}>
            Viewer Rating: {watchModeApiResponse["user_rating"]}/10
          </p>
          {/*onMySources === false ? (
            <p className={classes.sources}>
              {" "}
              This title does not appear to be on any of your selected sources,
              Click the poster to see where to watch
            </p>
          ) : null */}
        </div>
        <div className={classes.cast}></div>
      </div>
    </div>
  );
};
export default TitleInfo;
