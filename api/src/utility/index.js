const dotenv = require('dotenv');
//SV & DB Info, API Key
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, SV_PORT, API_KEY } =
  dotenv.config().parsed;

//Enabled endpoints-flags API
const API_GAMES_EP = 'https://api.rawg.io/api/games';
const API_GAMES_ID_EP = 'https://api.rawg.io/api/games';
const API_GAMES_QUERY_EP = 'https://api.rawg.io/api/games?search=';
const API_GENRES_EP = 'https://api.rawg.io/api/genres';
const LOCALHOST = 'http://localhost:';

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SV_PORT,
  API_KEY,
  API_GAMES_EP,
  API_GAMES_ID_EP,
  API_GAMES_QUERY_EP,
  API_GENRES_EP,
  LOCALHOST,
};
