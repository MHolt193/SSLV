import React, { useEffect, useState, useCallback} from "react";
import apiKey from "../../key";
import classes from "./Home.module.css";
import services from '../Settings/services'

import MovieCard from "./MovieCard";
import Featured from "./Featured";

const Home = (props) => {
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);

  

  const callApi = useCallback(async () => {
    const myServices = services.map((service) => localStorage.getItem(service.id) === 'true' ?
  service.id + ',':'')
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  },[]);

  useEffect(() => {
    callApi();
  }, [callApi]);
  console.log(apiRetrieved);
  console.log(apiResponse);

  return (
    <div className={classes.container}>
      <div>
        {apiRetrieved === true && apiResponse.titles.length > 1 ? (
          <Featured results={apiResponse} />
        ) : (
          ""
        )}
      </div>
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
export default Home;
