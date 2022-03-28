import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie" key={movie.Title}>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://api.placeholder.com/400'} alt={movie.Title}/>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
}

export default MovieCard