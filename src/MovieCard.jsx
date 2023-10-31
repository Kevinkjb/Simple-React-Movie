function MovieCard ({movie}){
  console.log(movie)
  return(
    <div className="movie">
      <>
        <div className="movie--year">
          <p>{movie.Year}</p>
        </div>
        <div className="movie--container">
          <img className="movie--poster" src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title}/>
        </div>
        <div className="movie--info">
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
          <p>{movie.Plot}</p>
        </div>
      </>
      
    </div>
  )
}
export default MovieCard