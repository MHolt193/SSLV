import React, { useState } from "react";
import { selections } from "./selections";
import classes from "./Catagories.module.css";
import Catagory from './Catagory'

const Catagories = (props) => {
    const [catagoryUp, setShown] = useState(false)
    const [propId, setPropId] = useState(null)

  const  catagoryHandler = (event) =>{
        setPropId(event.target.id);
        setShown(true)
    }
  return (
      <>
    {catagoryUp === true ? <Catagory cid={propId} />:''}
    <ul className={classes["catagories-container"]}>
      {catagoryUp === true ? '':selections.map((selection) => (
        <li className={classes.catagories} id={selection.id} key={selection.id}  onClick={catagoryHandler} tabIndex='0'>{selection.name}</li>
      ))}
    </ul>
    </>
  );
};

export default Catagories;
