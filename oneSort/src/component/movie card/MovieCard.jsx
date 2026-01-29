import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useMovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { isFav, add, removeFav } = useMovieContext();

  const fav = isFav(movie.imdbID);

   const toggleFav = (e) => {
    e.preventDefault();
    if (fav) {
      removeFav(movie.imdbID); 
    } else {
      add(movie);              
    }
  };

  return (
    <div className="relative h-72 w-52 bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition">

      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
        alt={movie.Title}
        className="h-44 w-full object-cover"
      />

      <button
        onClick={toggleFav}
        className="absolute top-1 right-1 opacity-80 bg-black/60 p-2 rounded-full"
      >
        {fav ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-white text-xl" />
        )}
      </button>

      <div className="p-3 text-white">
        <p className="font-semibold truncate">{movie.Title}</p>
        <p className="text-sm text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
