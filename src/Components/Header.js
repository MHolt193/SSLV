import React from "react";
import classes from "./Header.module.css";
import {Link} from 'react-router'

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["top-nav"]}>
        <p>SSLV</p>
        <ul className={classes.list}>
          <li>
            <i className="fas fa-search"></i>
          </li>
          <li onClick={props.settingsHandler}>
            <i className="fas fa-cog"></i>
          </li>
        </ul>
      </div>
      <nav className={classes.nav}>
        <ul className={classes["nav-list"]}>
          <li>TV Shows</li>
          <li>Movies</li>
         <Link to='/Catagories'> <li>Catagories</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
