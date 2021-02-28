import React from 'react';
import './MoviesList.css';

const MoviesList = ({movies, icon, handleClick, expression}) => {
 
    return(
        // u can write js here with this syntax :
        <>
            {movies.map(movie => (
            <div className='container'>
                <div class='movies'>
                        <h3 className='title'> 
                            {movie.Title} 
                        </h3>
                        <div className='infos'>
                            <p> Year : {movie.Year} </p> 
                            <p> Type : {movie.Type} </p>
                        </div>
                        <img    src={movie.Poster} 
                                alt='movie poster'
                                className='poster'>

                        </img>
                </div>
                <div className='add-remove-wrap' onClick={() => handleClick(movie)}>
                            <p className='expression'> 
                                {expression} 
                                <i  className={icon} ></i> 
                            </p>
                </div>
            </div>
            ))}
        </>
    );
}
export default MoviesList;
