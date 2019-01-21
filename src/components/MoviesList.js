import React from "react";
import styled from "styled-components";
import MovieSingle from "./MovieSingle";
import Slider from "./Slider";

const MoviesList = ({ movies, genre }) => {
  if (movies.length === 0) return <div>loading...</div>;

  const list = movies.map(movie => (
    <MovieSingle key={movie.id} movie={movie} />
  ));

  return (
    <section>
      <h2>{genre}</h2>
      <Slider movies={list} />
    </section>
  );
};

export default MoviesList;
