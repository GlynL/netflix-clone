import React, { useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../variables";
import Video from "./Video";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0.5rem;
  height: 250px;
`;

const Image = styled.img`
  margin: 0 auto;
  cursor: pointer;
`;

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
    // return if click is outside image
    if (!e.target.parentNode.classList.contains("movie-item")) return;
    // load video
    fetchVideo(e.currentTarget.id);
    // click listener to remove video when clicked elsewhere
    const handleActive = e => {
      const target = e.target.parentNode;
      if (!target.id || Number(target.id) !== movie.id) {
        document.removeEventListener("click", handleActive);
        setActive(false);
      }
    };
    if (active === false) document.addEventListener("click", handleActive);
  };

  return (
    <Container id={movie.id} className="movie-item" onClick={handleClick}>
      <h3>{movie.title}</h3>
      {!active && (
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          alt=""
        />
      )}
      {video && active && <Video video={video} />}
    </Container>
  );
};

export default MovieSingle;
