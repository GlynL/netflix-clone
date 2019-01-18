import React, { useState, useEffect } from "react";
import { API_KEY, genres } from "../variables";

import Genres from "./Genres";
import MoviesList from "./MoviesList";

// add in duplicate check
const randomGenres = (number = 5) => {
  let randomised = [];
  for (let i = 0; i < number; i++) {
    const rnd = Math.floor(Math.random() * genres.length);
    randomised.push(genres[rnd]);
  }
  return randomised;
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Error fetching data. Please refresh and try again.");
    }
  };

  const generateRandomGenres = (number = 5) => {
    setGenres(randomGenres(number));
  };

  useEffect(() => {
    fetchMovies();
    generateRandomGenres(2);
  }, []);

  if (movies.lenght === 0 || genres.length === 0) return "loading";
  return (
    <div>
      {error && <div>{error}</div>}
      <MoviesList movies={movies} genre={"Trending Now"} />
      <Genres genres={genres} />
    </div>
  );
};

export default Movies;
