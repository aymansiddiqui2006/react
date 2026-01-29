const API_KEY = "fc6f9fed"
const BASE_URL = "https://www.omdbapi.com/"


export const searchMovies = async (query) => {
    if (!query) return [];
    const res = await fetch(`${BASE_URL}?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
    const data = await res.json();
    return data.Search || [];
};

export const getMovieDetails = async (imdbID) => {
    const res = await fetch(`${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`);
    return await res.json();
};