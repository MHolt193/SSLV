import React from "react";
import classes from "./Header.module.css";
import {Link} from 'react-router'

const Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes["top-nav"]}>
       <Link to='/'> <p>SSLV</p> </Link>
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
         <Link to='/Tv' ><li>TV Shows</li></Link>
          <Link to='/movies'><li>Movies</li></Link>
         <Link to='/Catagories'> <li>Catagories</li></Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
