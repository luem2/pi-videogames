import axios from 'axios';
import { DOMAIN, SV_PORT } from '../utility';

//actions types:
export const GET_ALL_GAMES = 'GET_ALL_GAMES';

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
