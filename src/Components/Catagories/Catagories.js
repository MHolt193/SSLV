// Imports
import React, { useState } from "react";
import { selections } from "./selections";
import classes from "./Catagories.module.css";
import Catagory from "./Catagory";

//Catagories Component
const Catagories = (props) => {
  //State
  const [catagoryUp, setShown] = useState(false);
  const [propId, setPropId] = useState(null);

  /* catagory handler. will be assigned to click event
when click event occurs will check state of catagoryUp if it is false
it sets  to true and the <Catagory> componenet is rendered */
  const catagoryHandler = (event) => {
    if (catagoryUp === false) {
      setPropId(event.target.id);
      setShown(true);
    } else {
      setShown(false);
    }
  };
  return (
    <>

      {catagoryUp === true ? (
        <Catagory cid={propId} catagoryHandler={catagoryHandler} />
      ) : null} {/* if catagoryUp state is true, render <Catagory /> else render nothing */}
      <ul
        className={classes["catagories-container"]}
        style={catagoryUp ? { display: "none" } : { display: "flex" }}
      >{/* if catagoryUp state is true set display: none to hide this component */}
        {catagoryUp === true
          ? null
          : selections.map((selection) => (
              <li
                className={classes.catagories}
                id={selection.id}
                key={selection.id}
                onClick={catagoryHandler}
                tabIndex="0"
              >
                {selection.name}
              </li>
            ))}{/* loop over each selection and renders a list item with selection id
                  and click event listener with catagoryHandler to pass onto <Catagory /> component*/}
      </ul>
    </>
  );
};

export default Catagories;
