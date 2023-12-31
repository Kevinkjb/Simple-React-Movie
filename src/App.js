import React from 'react'
import MovieCard from './MovieCard'
import { useEffect, useState } from "react";
import logo from "./search.png"
import './App.css'


const API_URL = "https://www.omdbapi.com?apikey=" + process.env.REACT_APP_API_KEY
function App(){
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search )

  }
  useEffect(()=>{
    searchMovies()
  }, [])
const handleKeyDown = (event) =>{
  if(event.key === "Enter"){
    searchMovies(searchTerm)
    setSearchTerm("")
  }
}
const SearchEvent = (e) =>{
  setSearchTerm(e.target.value)
}
  return(
    <>
      <div className="app">
      <div className='search--container'>
        <h1>Movie Search</h1>
        <div class="search">
          <input className='input' placeholder="Search for movies" 
          value={searchTerm} onChange={SearchEvent}
          onKeyDown={handleKeyDown}
          />
          <img className="logo" src={logo} alt="search" 
          onClick={()=>searchMovies(searchTerm)}
          />
        </div> 
      </div>
        {movies?.length > 0 ?(
          <div className="container">
            {movies.map((movie)=>{
              return(
                <MovieCard movie={movie}/>
              )
            })}
          </div>
          ):
          (
            <div className="empty">
              <h2>No movies found 😒</h2>
            </div>
          )
          }
          
      </div>

    </>
  )
}

export default App