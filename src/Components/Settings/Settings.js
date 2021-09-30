import React, { useEffect } from "react";
import classes from "./Settings.module.css";
import services from './services'

const Settings = (props) => {
      const checkHandler = (event) =>{
        if(event.target.checked === true){
          localStorage.setItem(event.target.id, true);
        }
      }
  return (
    <div className={classes.settings}>
      <div className={classes["settings-card"]}>
        <div className={classes["title-section"]}>
          <h2>Settings</h2>
          <button
            onClick={props.settingsHandler}
            className={classes["close-button"]}
          >
            X
          </button>
        </div>
        <div className={classes.body}>
          <p>Select your streaming services.</p>
          <ul >
            {services.map((service) => (
              <li key={service.id} className={classes.services}>
                <label htmlFor={service.id}>
                  {service.name}
                  <input type="checkbox" id={service.id} onClick={checkHandler}/>
                </label>
              </li>
            ))}
          </ul>
         
        </div>
        <div className={classes.footer}>
         <button onClick={props.settingsHandler}>Save</button>
        </div>
      </div>
      
    </div>
  );
};

export default Settings;