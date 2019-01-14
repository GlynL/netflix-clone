import React from "react";
import MovieSingle from "./MovieSingle";

const MoviesList = ({ movies }) => {
  if (movies.length === 0) return <div>loading...</div>;

  const list = movies.map(movie => <MovieSingle movie={movie} />);

  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default MoviesList;
