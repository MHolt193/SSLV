import React, { useEffect, useState } from "react";
import classes from "./Featured.module.css";

const Featured = (props) => {
  const [randomMovie, setRandomMovie] = useState(0);
  useEffect(() => {
    setRandomMovie(Math.floor(Math.random() * props.results.titles.length - 1));
  //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.featured}>
      <img
        src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomMovie]["imdb_id"]}`}
        alt={props.results.titles[randomMovie].title}
      ></img>
      <div className={classes.buttons}>
        <button>+ My List</button>
        <button>Info</button>
      </div>
    </div>
  );
};
export default Featured;
