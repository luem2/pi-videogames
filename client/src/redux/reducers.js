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
  GAME_NOT_FOUND,
  CLOSE_MODAL_NOT_FOUND,
  CLOSE_MODAL_EMPTY_INPUT,
  EMPTY_INPUT,
  VIDEOGAME_CREATED,
  CLOSE_MODAL_VIDEOGAME_CREATED,
  CLEAR_HOME,
} from './actions';

import { ASCENDENTE, EXTERNAL_API } from '../utility';

const initialState = {
  videogames: [],
  filteredVideogames: [],
  videogameDetail: {},
  genres: [],
  modal: {
    emptyInput: false,
    gameNotFound: false,
    gameCreated: false,
  },
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
      if (action.payload === 'default') {
        return {
          ...state,
          filteredVideogames: state.videogames,
        };
      }
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
      if (action.payload === 'default') {
        return {
          ...state,
          filteredVideogames: state.videogames,
        };
      }
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
      if (action.payload === 'default') {
        return {
          ...state,
          filteredVideogames: state.videogames,
        };
      }
      const genresVideogames = [...state.filteredVideogames].filter(g =>
        g.genres?.includes(action.payload)
      );

      if (!genresVideogames.length) {
        return {
          ...state,
          modal: {
            ...state.modal,
            gameNotFound: true,
          },
        };
      }

      return {
        ...state,
        filteredVideogames: genresVideogames,
      };

    case GAMES_SORT:
      if (action.payload === 'default') {
        return {
          ...state,
          filteredVideogames: state.videogames,
        };
      }

      const gamesVideogames = [...state.videogames].filter(g => {
        if (action.payload === EXTERNAL_API) {
          return g.id.length !== 36;
        } else {
          return g.id.length === 36;
        }
      });

      if (!gamesVideogames.length) {
        return {
          ...state,
          modal: {
            ...state.modal,
            gameNotFound: true,
          },
        };
      }

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

    case CLEAR_HOME:
      return {
        ...state,
        filteredVideogames: state.videogames,
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

    case GAME_NOT_FOUND:
      return {
        ...state,
        modal: {
          ...state.modal,
          gameNotFound: true,
        },
      };

    case CLOSE_MODAL_NOT_FOUND:
      return {
        ...state,
        modal: {
          ...state.modal,
          gameNotFound: false,
        },
      };

    case EMPTY_INPUT:
      return {
        ...state,
        modal: {
          ...state.modal,
          emptyInput: true,
        },
      };

    case CLOSE_MODAL_EMPTY_INPUT:
      return {
        ...state,
        modal: {
          ...state.modal,
          emptyInput: false,
        },
      };

    case VIDEOGAME_CREATED:
      return {
        ...state,
        modal: {
          ...state.modal,
          gameCreated: true,
        },
      };

    case CLOSE_MODAL_VIDEOGAME_CREATED:
      return {
        ...state,
        modal: {
          ...state.modal,
          gameCreated: false,
        },
      };

    default:
      return { ...state };
  }
}

export default reducer;
