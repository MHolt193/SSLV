import React from "react";
import classes from "./Settings.module.css";

const Settings = (props) => {
  
    const streamingServices = [
    "Peacock",
    "Netflix",
    "HBO-Max",
    "Hulu",
    "Paramount+",
    "Discovery+",
    "Disney+",
    "Prime-Video",
  ];

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
            {streamingServices.map((service) => (
              <li key={service} className={classes.services}>
                <label htmlFor={service}>
                  <input type="checkbox" id={service} />
                  {service}
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
