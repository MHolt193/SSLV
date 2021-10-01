import React, { useState } from "react";
import { selections } from "./selections";
import classes from "./Catagories.module.css";

const Catagories = (props) => {
    const [catagoryUp, setShown] = useState(false)

  const  catagoryHandler = (event) =>{
        
    }
  return (
      <>

    <ul className={classes["catagories-container"]}>
      {selections.map((selection) => (
        <li className={classes.catagories} id={selection.id} key={selection.id}>{selection.name}</li>
      ))}
    </ul>
    </>
  );
};

export default Catagories;
