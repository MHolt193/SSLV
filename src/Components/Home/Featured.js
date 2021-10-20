import React from "react";
import classes from "./Featured.module.css";

const Featured = (props) => {
  let randomResult = Math.floor(
    Math.random() * props.results.titles.length - 1
  );

  return (
    <div
      className={classes.featured}
      stlye={{
        backgroundImage: `url("http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomResult]["imdb_id"]}")`,
      }}
    >
      <img
        src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomResult]["imdb_id"]}`}
        alt={props.results.titles[randomResult].title}
      ></img>
      <p>{props.results.titles[randomResult].title}</p>
      <div>
        <button>+ My List</button>
        <button>Play</button>
        <button>Info</button>
      </div>
    </div>
  );
};
export default Featured;
