import React from "react";
import MovieSingle from "./MovieSingle";
import Slider from "./Slider";
import styled from "styled-components";

const Heading = styled.h2`
  margin-left: 3rem;
`;

const MoviesList = ({ movies, genre }) => {
  if (movies.length === 0) return <div>loading...</div>;

  const list = movies.map(movie => (
    <MovieSingle key={movie.id} movie={movie} />
  ));

  return (
    <section>
      <Heading>{genre}</Heading>
      <Slider movies={list} />
    </section>
  );
};

export default MoviesList;
