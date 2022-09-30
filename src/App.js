import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://omdbapi.com?apikey=18a27789';



const App = () => { 
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('superman');
    },[]);

    return(
        <div className='app'>
            <h1>NontonFilm</h1>

            <div className='search'>
            <input placeholder='Cari film disini'
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)} />

            <img 
            src={SearchIcon}
            alt='search'
            onClick={()=>searchMovies(searchTerm)}/>
            </div>

            {
                movies?.length>0?(
                    <div className='container'>
                        {movies.map((movie)=>(<MovieCard movie={movie}/>))}
                    </div>
                ):(
                    <div className='empty'>
                        <h2>No movies founs</h2>
                    </div>
                )
            }

       
        </div>
    );
}

export default App;