import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import searchIcon from './search.svg'
import MovieCard from "./MovieCard";

const App = () => {

    const [movies, setMovies] = useState([])    
    const [searchTerm, setSearchTerm] = useState('')
    // const movie1 = {
    //     Poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    //     Title: "Captain America: The First Avenger",
    //     Type: "movie",
    //     Year: "2011",
    //     imdbID: "tt0458339"
    // }

    const API_URL = 'http://www.omdbapi.com/?apikey=5334a3fb'

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('captain')
    },[])

    return(
        <div className="app">
            <h1>ZeddFlix</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt="Search Icon" onClick={()=>searchMovies(searchTerm)}/>
            </div>
            {
            movies?.length > 0 
            ? (
            <div className="container">
                {
                movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))
                }
            </div>
            ) :
            (
            <div className="empty">
                No movies found
            </div>
            )
            }
        </div>
    )
}

export default App