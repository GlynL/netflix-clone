import React, { useState } from "react";
import { API_KEY } from "../variables";
import Video from "./Video";

const MovieSingle = ({ movie }) => {
  const [video, setVideo] = useState(null);

  const fetchVideos = async id => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/369972?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    const data = await response.json();
    setVideo(data.videos.results[0]);
  };

  const handleClick = e => {
    fetchVideos(e.currentTarget.id);
  };

  return (
    <li key={movie.id} id={movie.id} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt=""
      />
      {movie.title}
      {video && <Video video={video} />}
    </li>
  );
};

export default MovieSingle;
