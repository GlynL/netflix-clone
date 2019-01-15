import React, { useState, useEffect } from "react";
import { API_KEY } from "../variables";
import Video from "./Video";

const MovieSingle = ({ movie }) => {
  const [video, setVideo] = useState(null);
  const [active, setActive] = useState(false);

  const fetchVideo = async id => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
    );
    const data = await response.json();
    setVideo(data.videos.results[0]);
    setActive(true);
  };

  const handleClick = e => {
    fetchVideo(e.currentTarget.id);
    const handleActive = e => {
      const target = e.target.parentNode;
      if (target.id && Number(target.id) !== movie.id) {
        document.removeEventListener("click", handleActive);
        setActive(false);
      }
    };
    if (active === false) document.addEventListener("click", handleActive);
  };

  return (
    <li key={movie.id} id={movie.id} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
        alt=""
      />
      {movie.title}
      {video && active && <Video video={video} />}
    </li>
  );
};

export default MovieSingle;
