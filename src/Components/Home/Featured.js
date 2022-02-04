import React, { useEffect, useState } from "react";
import classes from "./Featured.module.css";

const Featured = (props) => {
  const [randomMovie, setRandomMovie] = useState(0);
  useEffect(() => {
    setRandomMovie(Math.floor(Math.random() * props.results.titles.length - 1));
    //eslint-disable-next-line
  }, []);

  let myList = JSON.parse(localStorage.getItem("myList")) || [];

  const myListHandler = () => {
    myList.push({
      title: props.results.titles[randomMovie].title,
      imdb_id: props.results.titles[randomMovie]["imdb_id"],
      id: props.results.titles[randomMovie].id,
    });
    localStorage.setItem("myList", JSON.stringify(myList));
  };
  return (
    <div className={classes.featured}>
      <h1 style={{ fontSize: 28 + "px" }}>Featured Title</h1>
      <img
        src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.results.titles[randomMovie]["imdb_id"]}`}
        alt={props.results.titles[randomMovie].title}
      ></img>
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
