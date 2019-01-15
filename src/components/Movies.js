import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";
import { API_KEY } from "../variables";
import MoviesList from "./MoviesList";

const Movies = props => {
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
    props.test();
  }, []);

  return (
    <div>
      <h2>Trending Now</h2>
      {error && <div>{error}</div>}
      <MoviesList movies={movies} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(fetchMovies())
});

export default connect(
  null,
  mapDispatchToProps
)(Movies);
