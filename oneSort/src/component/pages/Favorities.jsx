import React from 'react'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../movie card/MovieCard'

function Favorities() {
  const { fav } = useMovieContext()

  if (fav.length > 0) {
    return(
      <div className="flex flex-wrap gap-8 p-11 w-full">
        {fav.map(movie => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    );
  }


  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold">No favorite movies for now</h2>
      <p className="text-gray-500">Start exploring 🎬</p>
    </div>
  )
}

export default Favorities