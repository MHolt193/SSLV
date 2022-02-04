//Imports
import React from "react";
import MovieCard from "../MovieCard";
import classes from "./MyList.module.css";

//My List Component

const MyList = (props) => {
  let myList = JSON.parse(localStorage.getItem("myList"));

  return (
    <div className={classes.myList}>
      {myList.map((title) => (
        <MovieCard
          imdbid={title["imdb_id"]}
          imgalt={title.title}
          key={title.id}
          id={title.id}
        />
      ))}
    </div>
  );
};

export default MyList;
