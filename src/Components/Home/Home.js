import React, { useEffect, useState, useCallback } from "react";
import apiKey from "../../key";
import classes from "./Home.module.css";
import services from "../Settings/services";
import TitleInfo from "../TitleInfo/TitleInfo";
import MyList from "./MyList/MyList";

import MovieCard from "./MovieCard";
import Featured from "./Featured";

const Home = (props) => {
  /* MOVIE LIST API CALL */
  const [apiResponse, setApiResults] = useState([]);
  const [apiRetrieved, setApiRetrieved] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const callApi = useCallback(async () => {
    const myServices = services.map((service) =>
      localStorage.getItem(service.id) === "true" ? service.id + "," : ""
    );
    const response = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${apiKey}&source_ids=${myServices}&page=${pageNumber}`
    );
    const data = await response.json();
    setApiResults(data);
    setApiRetrieved(true);
  },[pageNumber]);

  useEffect(() => {
    callApi();
  }, [callApi]);

  const nextPageHandler =()=>{
    window.scroll(0,0);
    setPageNumber(pageNumber + 1);
  }
  const prevPageHandler =()=>{
    window.scroll(0,0);
    setPageNumber(pageNumber - 1) ;
  }

  /* TITLE INFO */
  const [titleInfoUp, controlTitleInfo] = useState(false);
  const [titleId, getTitleId] = useState(undefined);

  const titleInfoHandler = (event) => {
    if (titleInfoUp === false) {
      getTitleId(event.target.id);
      controlTitleInfo(true);
      console.log(event.target.id);
    } else if (titleInfoUp === true) {
      controlTitleInfo(false);
    }
  };
  //My List
  if(localStorage.getItem('myList')===null){
    localStorage.setItem('myList','[]')
  }
  const [myListLength, setMyListLength] = useState(
    JSON.parse(localStorage.getItem("myList")).length
  );
  let myList = JSON.parse(localStorage.getItem("myList")) || [];

  return (
    <div className={classes.container}>
      {titleInfoUp === true ? (
        <TitleInfo titleInfoHandler={titleInfoHandler} id={titleId} />
      ) : null}
      <div className={classes.list}>
        <div>
          {apiRetrieved === true && apiResponse.titles.length !== undefined ? (
            <Featured
              results={apiResponse}
              titleInfoHandler={titleInfoHandler}
              setMyListLength={setMyListLength}
              myListLength={myListLength}
              myList={myList}
            />
          ) : null}
        </div>
        {myListLength > 0 ? (
          <div>
            <p>My List</p>
            <MyList myList={myList} titleInfoHandler={titleInfoHandler} />
          </div>
        ) : null}
        {apiRetrieved === true && apiResponse.titles.length !== undefined ? (
          apiResponse.titles.map((title) => (
            <MovieCard
              onClick={titleInfoHandler}
              imdbid={title["imdb_id"]}
              imgalt={title.title}
              key={title.id}
              id={title.id}
            />
          ))
        ) : (
          <p>No Titles Loaded, Out of API calls?</p>
        )}
        {apiRetrieved === true &&
          apiResponse.titles.length !== undefined &&
        pageNumber === 1 ? (
          <div className={classes.pageControl}>
            <p>page {pageNumber}</p>
            <button onClick={nextPageHandler}>Next Page</button>
          </div>
        ) : 
          pageNumber > 1 ? (
          <div className={classes.pageControl}>
            <button onClick={prevPageHandler}>
              Prev. Page
            </button>
            <p>page {pageNumber}</p>
            <button onClick={nextPageHandler}>Next Page</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Home;
