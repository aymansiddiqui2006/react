import React, { useEffect, useState } from 'react';
import MovieCard from '../movie card/MovieCard';
import { searchMovies } from '../../services/Api';

const defaultCategories = [
    { title: "Action", query: "avengers" },
    { title: "Comedy", query: "friends" },
    { title: "Horror", query: "conjuring" },
    { title: "Sci-Fi", query: "star wars" }
];

function Home() {
    const [moviesByCategory, setMoviesByCategory] = useState({}); // <--- Add this
    const [loading, setLoading] = useState(true);
    const [Err, setErr] = useState(null);
    const [name, setname] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            setErr(null);
            try {
                const results = await Promise.all(
                    defaultCategories.map(async (cat) => {
                        const data = await searchMovies(cat.query);
                        return { title: cat.title, movies: data || [] };
                    })
                );
                const moviesObj = {};
                results.forEach(r => moviesObj[r.title] = r.movies);
                setMoviesByCategory(moviesObj); // now this exists
            } catch (error) {
                console.error(error);
                setErr("Failed to load movies");
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    // Search function
    const search = async (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        setLoading(true);
        setErr(null);
        setIsSearching(true);

        try {
            const data = await searchMovies(name.trim());
            if (!data || data.length === 0) {
                setSearchResults([]);
                setErr("No movies found");
            } else {
                setSearchResults(data);
            }
        } catch (err) {
            console.error(err);
            setErr("Failed to search movies");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="home flex flex-col w-full">
            <form onSubmit={search} className='flex justify-center items-center mt-10 mb-7 gap-2'>
                <input
                    type="text"
                    placeholder='Search for movie...'
                    className='text-black bg-white w-64 h-10 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 h-10 rounded-r-md hover:bg-blue-600 transition'
                >
                    Search
                </button>
            </form>


            {loading && <p className="text-center mt-5">Loading...</p>}
            {Err && <p className="text-center mt-5">{Err}</p>}

            <div className="flex flex-col gap-12 p-6">
                {isSearching ? (
                    <div className="flex flex-wrap gap-6">
                        {searchResults.map(movie => (
                            <MovieCard movie={movie} key={movie.imdbID} />
                        ))}
                    </div>
                ) : (
                    Object.keys(moviesByCategory).map(category => (
                        <div key={category}>
                            <h2 className="text-xl font-bold mb-4">{category}</h2>
                            <div className="flex flex-wrap gap-6">
                                {moviesByCategory[category].map(movie => (
                                    <MovieCard movie={movie} key={movie.imdbID} />
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;
