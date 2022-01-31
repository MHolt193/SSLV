import React, { useRef, useEffect} from "react";
import classes from "./Header.module.css";
import { Link } from "react-router";

const Header = (props) => {
  const searchRef = useRef();

  useEffect(() =>{
    if (props.searchActive) {
      searchRef.current.focus();
    }
  })

  return (
    <div className={classes.container}>
      <div className={classes["top-nav"]}>
        <Link to="/">
          {" "}
          <p>SSLV</p>{" "}
        </Link>
        <ul className={classes.list}>
          <li>
            <form onSubmit={props.searchSubmitHandler}>
              <input
                type="text"
                name="search"
                className={classes.search}
                placeholder="NAME OF TITLE"
                ref={searchRef}
                style={
                  props.searchActive === true
                    ? { display: "inline"}
                    : { display: "none" }
                }
              />
            </form>
          </li>
          <li>
            <i className="fas fa-search" onClick={props.searchHandler}></i>
          </li>
          <li onClick={props.settingsHandler}>
            <i className="fas fa-cog"></i>
          </li>
        </ul>
      </div>
      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <Link to="/Tv">
            <li>TV Shows</li>
          </Link>
          <Link to="/movies">
            <li>Movies</li>
          </Link>
          <Link to="/Catagories">
            {" "}
            <li>Catagories</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
