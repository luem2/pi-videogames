import {
  GET_ALL_GAMES,
  GET_QUERY_GAMES,
  ALPHA_SORT,
  RATING_SORT,
  GENRES_SORT,
  GAMES_SORT,
  GET_DETAILS,
  POST_GAME,
  GET_GENRES,
  CLEAR_DETAILS,
  CLEAR_FILTERS,
  CLEAR_FILTEREDVIDEOGAMES,
} from './actions';

import { ASCENDENTE, EXTERNAL_API } from '../utility';

const initialState = {
  videogames: [],
  filteredVideogames: [],
  videogameDetail: {},
  genres: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        videogames: action.payload,
        filteredVideogames: action.payload,
      };

    case GET_QUERY_GAMES:
      return {
        ...state,
        filteredVideogames: action.payload,
      };

    case ALPHA_SORT:
      const alphabeticVideogames = [...state.filteredVideogames];
      alphabeticVideogames.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase())
          return action.payload === ASCENDENTE ? -1 : 1;
        else if (a.name.toLowerCase() > b.name.toLowerCase())
          return action.payload === ASCENDENTE ? 1 : -1;
        else return 0;
      });

      return {
        ...state,
        filteredVideogames: alphabeticVideogames,
      };

    case RATING_SORT:
      const ratingVideogames = [...state.filteredVideogames];
      ratingVideogames.sort((a, b) => {
        if (a.rating < b.rating) return action.payload === ASCENDENTE ? -1 : 1;
        else if (a.rating > b.rating)
          return action.payload === ASCENDENTE ? 1 : -1;
        else return 0;
      });

      return {
        ...state,
        filteredVideogames: ratingVideogames,
      };

    case GENRES_SORT:
      const genresVideogames = [...state.filteredVideogames];
      const filteredVideogames = genresVideogames.filter(g =>
        g.genres?.includes(action.payload)
      );
      return {
        ...state,
        filteredVideogames: filteredVideogames,
      };

    case GAMES_SORT:
      let gamesVideogames = [...state.videogames].filter(g => {
        if (action.payload === EXTERNAL_API) {
          return g.id.length !== 36;
        } else {
          return g.id.length === 36;
        }
      });

      return {
        ...state,
        filteredVideogames: gamesVideogames,
      };

    case GET_DETAILS:
      return {
        ...state,
        videogameDetail: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        videogameDetail: {},
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filteredVideogames: state.videogames,
      };

    case CLEAR_FILTEREDVIDEOGAMES:
      return {
        ...state,
        filteredVideogames: [],
      };

    case POST_GAME:
      return {
        ...state,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return { ...state };
  }
}

export default reducer;
