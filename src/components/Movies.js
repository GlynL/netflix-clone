import React, { useState, useEffect } from "react";
import { API_KEY } from "../variables";
import MoviesList from "./MoviesList";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Error fetching data. Please refresh and try again.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending Now</h2>
      {error && <div>{error}</div>}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
