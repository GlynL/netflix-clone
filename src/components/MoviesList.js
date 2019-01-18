import React from "react";
import styled from "styled-components";
import MovieSingle from "./MovieSingle";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  padding: 3rem 4rem;
  background: #333;
`;

const MoviesList = ({ movies, genre }) => {
  if (movies.length === 0) return <div>loading...</div>;

  const list = movies.map(movie => <MovieSingle movie={movie} />);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <h2>{genre}</h2>
      <Wrapper>
        <Slider {...settings}>{list}</Slider>
      </Wrapper>
    </section>
  );
};

export default MoviesList;
