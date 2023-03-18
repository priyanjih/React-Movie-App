
import React, { useState, useEffect } from 'react';
import './App.css'
import searchIcon from './search.svg'
import MoviesCard from './components/MoviesCard';


const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=941244cc'


const App=()=>{
    const [movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('')

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
    
        setMovies(data.Search);
      };


    useEffect(()=>{
        searchMovies()
    },[])
    return(
        <div className='app'>
            <h1>Movie Land</h1>

            <div className='search'>
                <input placeholder='search for movies' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={searchIcon} alt="search Icon" onClick={()=>searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length>0?(
                    <div className='container'>
                        {movies.map((movie)=>(
                            <MoviesCard movie={movie} />
                        ))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No Movie Found</h2>
                    </div>
                )
            }

        </div>
    )
}

export default App;