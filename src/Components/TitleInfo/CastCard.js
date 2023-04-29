import React from 'react';
import classes from './CastCard.module.css'

const CastCard = (props) =>{

    return (
        <div className={classes.card}>
            <img src={props.headshot} alt="" className={classes.headshot} />
            <p className={classes.name}>{props.name}</p>
            <p className={classes.role}>{props.role}</p>
        </div>
    )
}
export default CastCard