import { FETCH_MOVIES, SET_ACTIVE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};
