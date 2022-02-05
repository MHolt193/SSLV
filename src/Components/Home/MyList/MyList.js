//Imports
import React from "react";
import MovieCard from "../MovieCard";
import classes from "./MyList.module.css";

//My List Component

const MyList = (props) => {
  
  

  return (
    <div className={classes.myList}>
      {props.myList.map((title) => (
        <MovieCard
        onClick={props.titleInfoHandler}
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
