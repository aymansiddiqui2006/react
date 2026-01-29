import React, { useState } from 'react'
import { useMovieContext } from '../context/MovieContext'

function MovieCard({ movie }) {
    const { isFav, removeFav, add } = useMovieContext()
    const fav = isFav(movie.id)


    function like(e) {
        e.preventDefault()

        if (fav) removeFav(movie.id)
        else add(movie)
    }
    return (
        <>
            <div className='flex flex-col overflow-hidden h-64 w-52 bg-gray-800 rounded hover:scale-105 transition-transform duration-200'>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"} alt={movie.Title} className="h-40 w-full object-cover" />

                <div className="p-2">
                    <button
                        className={`fav ${fav ? "active" : ""} opacity-50`}
                        onClick={like}
                    >
                        {fav ? "❤️" : "🤍"}
                    </button>
                </div>
                <div className='flex-col gap-2'>
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>

                </div>

            </div>

        </>
    )
}

export default MovieCard