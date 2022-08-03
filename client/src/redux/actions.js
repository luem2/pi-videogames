import axios from 'axios';

//actions types:
export const GET_ALL_GAMES = 'GET_ALL_GAMES';
export const GET_QUERY_GAMES = 'GET_QUERY_GAMES';
export const ALPHA_SORT = 'ALPHA_SORT';
export const RATING_SORT = 'RATING_SORT';
export const GENRES_SORT = 'GENRES_SORT';
export const GAMES_SORT = 'GAMES_SORT';
export const GET_DETAILS = 'GET_DETAILS';
export const POST_GAME = 'POST_GAME';
export const GET_GENRES = 'GET_GENRES';
export const CLEAR_DETAILS = 'CLEAR_DETAILS';
export const CLEAR_ALL_GAMES = 'CLEAR_ALL_GAMES';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_FILTEREDVIDEOGAMES = 'CLEAR_FILTEREDVIDEOGAMES';
export const GAME_NOT_FOUND = 'GAME_NOT_FOUND';
export const CLOSE_MODAL_NOT_FOUND = 'CLOSE_MODAL_NOT_FOUND';
export const EMPTY_INPUT = 'EMPTY_INPUT';
export const CLOSE_MODAL_EMPTY_INPUT = 'CLOSE_MODAL_EMPTY_INPUT';
export const VIDEOGAME_CREATED = 'VIDEOGAME_CREATED';
export const CLOSE_MODAL_VIDEOGAME_CREATED = 'CLOSE_MODAL_VIDEOGAME_CREATED';

//actions:
export function getAllVideogames() {
  return async dispatch => {
    try {
      const result = await axios.get(`/videogames`);
      const videogames = await result.data;
      dispatch({
        type: GET_ALL_GAMES,
        payload: videogames,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function searchVideogames(search) {
  return async dispatch => {
    try {
      const result = await axios.get(`/videogames?name=${search}`);

      const videogames = await result.data;

      dispatch({
        type: GET_QUERY_GAMES,
        payload: videogames,
      });
    } catch (error) {
      dispatch({
        type: GAME_NOT_FOUND,
      });
      dispatch({
        type: CLEAR_FILTERS,
      });
      console.log(error);
    }
  };
}

export function getDetails(id) {
  return async dispatch => {
    try {
      const result = await axios.get(`/videogame/${id}`);
      const videogame = await result.data;
      dispatch({
        type: GET_DETAILS,
        payload: videogame,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const clearDetail = () => ({
  type: CLEAR_DETAILS,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });

export const clearFilteredVideogames = () => ({
  type: CLEAR_FILTEREDVIDEOGAMES,
});

export function alphaSort(order) {
  return {
    type: ALPHA_SORT,
    payload: order,
  };
}

export function ratingSort(order) {
  return {
    type: RATING_SORT,
    payload: order,
  };
}

export function genresSort(order) {
  return {
    type: GENRES_SORT,
    payload: order,
  };
}

export function gamesSort(order) {
  return {
    type: GAMES_SORT,
    payload: order,
  };
}

export const createVideogame = videogame => async () => {
  try {
    const response = await axios.post(`/videogames`, videogame);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = () => async dispatch => {
  try {
    const response = await axios.get(`/genres`);
    dispatch({
      type: GET_GENRES,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const closeModalNotFound = () => ({
  type: CLOSE_MODAL_NOT_FOUND,
});

export const emptyInputFunction = () => ({
  type: EMPTY_INPUT,
});

export const closeModalEmptyInput = () => ({
  type: CLOSE_MODAL_EMPTY_INPUT,
});

export const videogameCreatedFunction = () => ({
  type: VIDEOGAME_CREATED,
});

export const closeModalVideogameCreated = () => ({
  type: CLOSE_MODAL_VIDEOGAME_CREATED,
});
