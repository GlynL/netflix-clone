import { FETCH_MOVIES, SET_ACTIVE } from "./types";

export const fetchMovies = () => {
  return {
    type: FETCH_MOVIES,
    payload: "test"
  };
};
