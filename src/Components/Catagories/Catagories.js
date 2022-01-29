import React, { useState } from "react";
import { selections } from "./selections";
import classes from "./Catagories.module.css";
import Catagory from './Catagory'

const Catagories = (props) => {
    const [catagoryUp, setShown] = useState(false)
    const [propId, setPropId] = useState(null)

  const  catagoryHandler = (event) =>{
       if (catagoryUp === false){ 
          setPropId(event.target.id);
         setShown(true)
        }else {
          setShown(false)
        }
    }
  return (
      <>
    {catagoryUp === true ? <Catagory cid={propId} catagoryHandler={catagoryHandler} />:null}
    <ul className={classes["catagories-container"]} style={catagoryUp? {display: 'none'}:{display: 'flex'}}>
      {catagoryUp === true ? null:selections.map((selection) => (
        <li className={classes.catagories} id={selection.id} key={selection.id}  onClick={catagoryHandler} tabIndex='0'>{selection.name}</li>
      ))}
    </ul>
    </>
  );
};

export default Catagories;
