import React from 'react';
import classes from './Settings.module.css'

const Settings = (props) =>{
    return(
        <div className={classes.settings}> 
            <div className={classes['settings-card']}>
                <div className={classes['title-section']}>
                <h2>Settings</h2>
                </div>
                <button onClick={props.settingsHandler}>Save</button>
            </div> 
        </div>
    )
};


export default Settings;