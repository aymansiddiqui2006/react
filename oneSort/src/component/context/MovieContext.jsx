import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [fav, setfav] = useState([]);

  useEffect(() => {
    const storefav = localStorage.getItem("fav");
    if (storefav) setfav(JSON.parse(storefav));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const add = (movie) => {
    setfav(prev => [...prev, movie]);
  };

  const removeFav = (movieId) => {
    setfav(prev => prev.filter(movie => movie.imdbID !== movieId));
  };

  const isFav = (movieId) => {
    return fav.some(movie => movie.imdbID === movieId);
  };

  const value = {
    fav,
    add,
    removeFav,
    isFav
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
