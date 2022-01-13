import React from "react";
import classes from "./TitleInfo.module.css";

const TitleInfo = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.infoCard}>
        <div className={classes.poster}>
          <img alt="Movie Poster Here" />
        </div>
        <div className={classes.info}>
          <button className={classes.close}>X</button>
          <h3 className={classes.title}>Elf</h3>
          <p className={classes.description}>Raised as an over-sized elf, a human travels from the North Pole to NYC to meet his biological father who doesn't know he exists and is in desperate need of some Christmas spirit.</p>

          <p className={classes.rating}>****</p>
        </div>
      </div>
    </div>
  );
};
export default TitleInfo;
