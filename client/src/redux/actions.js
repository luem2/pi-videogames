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
export const ARE_YOU_SURE = 'ARE_YOU_SURE';
export const CLOSE_MODAL_ARE_YOU_SURE = 'CLOSE_MODAL_ARE_YOU_SURE';
export const VIDEOGAME_UPDATE = 'VIDEOGAME_UPDATE';
export const CLOSE_MODAL_VIDEOGAME_UPDATE = 'CLOSE_MODAL_VIDEOGAME_UPDATE';
export const VIDEOGAME_DELETE = 'VIDEOGAME_DELETE';
export const CLOSE_MODAL_VIDEOGAME_DELETE = 'CLOSE_MODAL_VIDEOGAME_DELETE';
export const VIDEOGAME_ALREADY_EXISTS = 'VIDEOGAME_ALREADY_EXISTS';
export const CLOSE_MODAL_VIDEOGAME_ALREADY_EXISTS =
  'CLOSE_MODAL_VIDEOGAME_ALREADY_EXISTS';
export const CLEAR_HOME = 'CLEAR_HOME';

//actions:
export function getAllVideogames() {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/videogames`);
      const videogames = await result.data;
      dispatch({
        type: GET_ALL_GAMES,
        payload: videogames,
      });
    } catch (e) {
      console.error(e);
    }
  };
}

export function searchVideogames(search) {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/videogames?name=${search}`);

      const videogames = await result.data;

      dispatch({
        type: GET_QUERY_GAMES,
        payload: videogames,
      });
    } catch (e) {
      dispatch({
        type: GAME_NOT_FOUND,
      });
      dispatch({
        type: CLEAR_FILTERS,
      });
      console.error(e);
    }
  };
}

export function getDetails(id) {
  return async dispatch => {
    try {
      const result = await axios.get(`/api/videogame/${id}`);
      const videogame = await result.data;
      dispatch({
        type: GET_DETAILS,
        payload: videogame,
      });
    } catch (e) {
      console.error(e);
    }
  };
}

export const createVideogame = videogame => {
  return async () => {
    try {
      await axios.post(`/api/videogame`, videogame);
    } catch (e) {
      console.error(e);
    }
  };
};

export const updateVideogame = (id, videogame) => {
  return async () => {
    try {
      await axios.put(`/api/videogame/${id}`, videogame);
    } catch (e) {
      console.error(e);
    }
  };
};

export const deleteGame = id => {
  return async () => {
    try {
      await axios.delete(`api/videogame/${id}`);
    } catch (e) {
      console.error(e);
    }
  };
};

export const getGenres = () => {
  return async dispatch => {
    try {
      const genres = await axios.get(`/api/genres`);
      dispatch({
        type: GET_GENRES,
        payload: genres,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const clearDetail = () => ({
  type: CLEAR_DETAILS,
});

export const clearFilters = () => ({ type: CLEAR_FILTERS });

export const clearHome = () => ({ type: CLEAR_HOME });

export const clearFilteredVideogames = () => {
  return {
    type: CLEAR_FILTEREDVIDEOGAMES,
  };
};

export const alphaSort = order => ({ type: ALPHA_SORT, payload: order });

export const ratingSort = order => ({ type: RATING_SORT, payload: order });

export const genresSort = order => ({ type: GENRES_SORT, payload: order });

export const gamesSort = order => ({ type: GAMES_SORT, payload: order });

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

export const areYouSureFunction = () => ({ type: ARE_YOU_SURE });

export const closeModalAreYouSure = () => ({
  type: CLOSE_MODAL_ARE_YOU_SURE,
});

export const videogameUpdateFunction = () => ({ type: VIDEOGAME_UPDATE });

export const closeModalVideogameUpdate = () => ({
  type: CLOSE_MODAL_VIDEOGAME_UPDATE,
});

export const videogameDeleteFunction = () => ({ type: VIDEOGAME_DELETE });

export const closeModalVideogameDelete = () => ({
  type: CLOSE_MODAL_VIDEOGAME_DELETE,
});

export const videogameAlreadyExists = () => ({
  type: VIDEOGAME_ALREADY_EXISTS,
});

export const closeModalVideogameAlreadyExists = () => ({
  type: CLOSE_MODAL_VIDEOGAME_ALREADY_EXISTS,
});
