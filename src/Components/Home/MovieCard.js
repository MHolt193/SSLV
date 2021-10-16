import React from 'react';
import classes from './MovieCard.module.css'


const MovieCard = (props) =>{
    
 return(
     <div className={classes.card}>
         <img src={`http://img.omdbapi.com/?apikey=89a451f1&i=${props.imdbid}`} alt={`${props.imgalt} poster`}/>
         <p>{props.children}</p>
     </div>
 )
}

export default MovieCard