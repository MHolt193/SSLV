//Imports
import React, { useState, useCallback, useEffect } from "react";
import apiKey from "../../key";
import TitleInfo from "../TitleInfo/TitleInfo";
import SearchResultsCard from "./SearchResultsCard";
import classes from "./SearchResults.module.css";

// SearchResults component
const SearchResults = (props) => {
  const [watchModeApiResponse, setWatchModeApiResults] = useState([]);
  const [watchModeApiRetrieved, setWatchModeApiRetrieved] = useState(false);

  const setSearchValue = props.setSearchValue;

  //CLOSE BUTTON handler
  const closeButtonHandler = () => {
    setSearchValue("");
  };

  //API CALL
  const callApi = useCallback(async () => {
    const response = await fetch(
      `https://api.watchmode.com/v1/search/?apiKey=${apiKey}&search_field=name&search_value=${props.searchValue}`
    );
    const data = await response.json();
    setWatchModeApiResults(data);
    setWatchModeApiRetrieved(true);
  }, [props.searchValue]);

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
       console.log(event.target.id)
     } else if (titleInfoUp === true) {
       controlTitleInfo(false);
     }
   };

  console.log(watchModeApiResponse);
  return (<div>
      {titleInfoUp === true ? (
          <TitleInfo titleInfoHandler={titleInfoHandler} id={titleId} />
        ) : (
          null
        )}
    <div className={classes.list}>
      <button onClick={closeButtonHandler}>Close</button>
      {watchModeApiRetrieved ? (
        watchModeApiResponse["title_results"].map((title) => (
          <SearchResultsCard
            onClick={titleInfoHandler}
            imdbid={title["imdb_id"]}
            imgalt={title.name}
            key={title.id}
            id={title.id}
            title={title.name}
            year={title.year}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
  );
};
export default SearchResults;
