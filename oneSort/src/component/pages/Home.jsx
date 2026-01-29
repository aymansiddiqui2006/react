import React, { useEffect, useState } from 'react'
import MovieCard from '../movie card/MovieCard'
import NavBar from '../navBar/NavBar';
import { searchMovies } from '../../services/Api';
function Home() {

    const [movies, setmovies] = useState([]);
    const [err, seterr] = useState(null);
    const [loading, setLoading] = useState(true);
    const [name, setname] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            try {
                const data = await searchMovies("avengers")
                setmovies(data)
            } catch (err) {
                seterr("Failed to load movies")
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [])

    const search = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;  
        setLoading(true);
        seterr(null);

        try {
            const data = await searchMovies(name);

            if (!data || data.length === 0) {
                setmovies([]);
                seterr("No movies found");
            } else {
                setmovies(data);
            }
        } catch (err) {
            console.error(err);
            seterr("Failed to search movies");
        } finally {
            setLoading(false);
        }
    };



    return (
        <>
            <div className="home flex flex-col items-center w-full">

                <form onSubmit={search} className='search_form '>
                    <input type="text" placeholder='Search for movie...' className='text-black bg-white mt-10 mb-7 w-48 h-8 rounded '
                        value={name}
                        onChange={(e) => {
                            setname(e.target.value)
                        }} />
                    <button type='submit'>Search</button>
                </form>
                {loading && <p className="text-center mt-5">Loading...</p>}
                {err && <p className="text-center mt-5">{err}</p>}
                <div className="flex flex-wrap gap-8 p-11 w-full">
                    {movies
                        .filter(movie => {
                            if (!name.trim()) return true; 
                            return movie.Title.toLowerCase().includes(name.toLowerCase());  
                        })
                        .map(movie => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))
                    }
                </div>


            </div>

        </>

    )
}

export default Home