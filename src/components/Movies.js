import React, { useState, useEffect } from "react";
import { genres } from "../variables";

import Genres from "./Genres";

// add in duplicate check
const randomGenres = (number = 5) => {
  let randomised = [];
  const rndNums = [];

  const getRandomNum = () => {
    const rnd = Math.floor(Math.random() * genres.length);
    if (rndNums.includes(rnd)) {
      getRandomNum();
    } else {
      rndNums.push(rnd);
      randomised.push(genres[rnd]);
    }
  };

  for (let i = 0; i < number; i++) {
    getRandomNum();
  }

  return randomised;
};

const Movies = () => {
  const [genres, setGenres] = useState([]);

  const generateRandomGenres = (number = 5) => {
    setGenres(randomGenres(number));
  };

  useEffect(() => {
    generateRandomGenres(2);
  }, []);

  if (genres.length === 0) return "loading";
  return (
    <div>
      <Genres genres={genres} />
    </div>
  );
};

export default Movies;
