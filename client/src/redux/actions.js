import axios from 'axios';
import { DOMAIN, SV_PORT } from '../utility';

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

//actions:
export function getAllVideogames() {
  return async dispatch => {
    try {
      const result = await axios.get(`${DOMAIN}${SV_PORT}/api/videogames`);
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
      const result = await axios.get(
        `${DOMAIN}${SV_PORT}/api/videogames?name=${search}`
      );
      const videogames = await result.data;
      dispatch({
        type: GET_QUERY_GAMES,
        payload: videogames,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function getDetails(id) {
  return async dispatch => {
    try {
      const result = await axios.get(`${DOMAIN}${SV_PORT}/api/videogame/${id}`);
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

export function clearDetail() {
  return {
    type: CLEAR_DETAILS,
  };
}
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
    const response = await axios.post(
      `${DOMAIN}${SV_PORT}/api/videogames`,
      videogame
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = () => async dispatch => {
  try {
    const response = await axios.get(`${DOMAIN}${SV_PORT}/api/genres`);
    dispatch({
      type: GET_GENRES,
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};
