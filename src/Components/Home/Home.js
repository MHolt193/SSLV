import React, { useEffect, useState } from "react";
import apiKey from "../../key";
import classes from "./Home.module.css";

import MovieCard from "./MovieCard";

const Home = (props) => {
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);

  useEffect(() => {
    callApi();
  }, []);
  console.log(apiRetrieved);
  const callApi = async () => {
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=203,157,26,444`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  };
  return (
    <div className={classes.container}>
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
  );
};
export default Home;
