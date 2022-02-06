import React, { useEffect, useState, useCallback } from "react";
import classes from "./Featured.module.css";

const Featured = (props) => {
  const [randomMovie, setRandomMovie] = useState(0);
  useEffect(() => {
    setRandomMovie(Math.floor(Math.random() * props.results.titles.length - 1));
    //eslint-disable-next-line
  }, []);
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);
  const callApi = useCallback(async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/find/${props.results.titles[randomMovie]["imdb_id"]}?api_key=5f027ed6c33a834707d6d1b883944a4b&external_source=imdb_id`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  }, [props.results.titles, randomMovie]);
  useEffect(() => {
    callApi();
  }, [callApi]);

  let myList = props.myList;

  const myListHandler = () => {
    myList.push({
      title: props.results.titles[randomMovie].title,
      imdb_id: props.results.titles[randomMovie]["imdb_id"],
      id: props.results.titles[randomMovie].id,
    });
    props.setMyListLength(myList.length);
    localStorage.setItem("myList", JSON.stringify(myList));
  };
  return (
    <div className={classes.featured}>
      <h1 style={{ fontSize: 28 + "px" }}>Featured Title</h1>
      {apiRetrieved === true && apiResponse["movie_results"].length >= 1 ? (
        <img
          id={props.id}
          src={`http://image.tmdb.org/t/p/w300${apiResponse["movie_results"][0]["poster_path"]}`}
          alt={`${props.imgalt} poster`}
        />
      ) : apiRetrieved === true && apiResponse["tv_results"].length >= 1 ? (
        <img
          id={props.id}
          src={`http://image.tmdb.org/t/p/w300${apiResponse["tv_results"][0]["poster_path"]}`}
          alt={`${props.imgalt} poster`}
        />
      ) : (
        <img
          id={props.id}
          src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomMovie]["imdb_id"]}`}
          alt={`${props.results.titles[randomMovie].title}`}
        />
      )}
      <div className={classes.buttons}>
        <button onClick={myListHandler}>+ My List</button>
        <button
          onClick={props.titleInfoHandler}
          id={props.results.titles[randomMovie].id}
        >
          Info
        </button>
      </div>
    </div>
  );
};
export default Featured;
