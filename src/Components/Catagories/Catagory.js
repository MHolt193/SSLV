import { useEffect, useState, useCallback } from "react";
import services from "../Settings/services";
import apiKey from "../../key";
import TitleInfo from "../TitleInfo/TitleInfo";
import classes from "../TV Shows/TvShows.module.css";
import MovieCard from "../Home/MovieCard";

const Catagory = (props) => {
  /* MOVIE LIST API CALL */
  const [watchModeApiResponse, setApiResults] = useState([]);
  const [watchModeApiRetrieved, setApiRetrieved] = useState(false);

  const callApi = useCallback(async () => {
    const myServices = services.map((service) =>
      localStorage.getItem(service.id) === "true" ? service.id + "," : ""
    );
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}&genres=${props.cid}`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  }, [props.cid]);

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
  return (
    <div className={classes.container}>
      {titleInfoUp === true ? (
        <TitleInfo titleInfoHandler={titleInfoHandler} id={titleId} />
      ) : null}
     
      <div className={classes.list}>
      <div className={classes.backButton}>
      <button onClick={props.catagoryHandler}>Close</button>
      </div>
        {watchModeApiRetrieved === true &&
        watchModeApiResponse.titles.length > 1
          ? watchModeApiResponse.titles.map((title) => (
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
          : null}
      </div>
    </div>
  );
};

export default Catagory;
