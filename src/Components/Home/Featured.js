import React from "react";
import classes from "./Featured.module.css";

const Featured = (props) => {
  let randomResult = Math.floor(
    Math.random() * props.results.titles.length - 1
  );

  return (
    <div
      className={classes.featured}
    >
      <img
        src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomResult]["imdb_id"]}`}
        alt={props.results.titles[randomResult].title}
      ></img>
      <div>
        <button>+ My List</button>
        <button>Info</button>
      </div>
    </div>
  );
};
export default Featured;
