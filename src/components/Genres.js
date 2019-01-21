import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MoviesList from "./MoviesList";
import { API_KEY } from "../variables.js";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Genres = ({ genres }) => {
  const [popGenres, setPopGenres] = useState([]);
  const [error, setError] = useState(null);

  const fetchTrending = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      return data;
    } catch (err) {
      return Promise.reject();
    }
  };

  const fetchMovies = async () => {
    try {
      const urls = genres.map(
        genre =>
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
            genre.id
          }`
      );
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const data = await Promise.all(
        responses.map(response => response.json())
      );
      const trendingData = await fetchTrending();
      const trending = {
        name: "Trending Now",
        id: 0,
        results: trendingData.results
      };
      const genreData = data.reduce((acc, curr, i) => {
        const genreResults = { ...genres[i], results: curr.results };
        return [...acc, genreResults];
      }, []);
      setPopGenres([trending, ...genreData]);
    } catch (err) {
      setError("Error fetching data. Please refresh and try again.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const list = popGenres.map(genre => (
    <li key={genre.id}>
      <MoviesList movies={genre.results} genre={genre.name} />
    </li>
  ));

  if (error) return <div>{error}</div>;

  if (popGenres.length === 0) return "genres loading";
  return (
    <section>
      <List>{list}</List>
    </section>
  );
};

export default Genres;
