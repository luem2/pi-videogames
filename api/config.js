const dotenv = require('dotenv');
dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  PORT,
  API_KEY,
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGPORT,
  PGDATABASE,
} = process.env;

//Enabled endpoints-flags API
const API_GAMES_EP = 'https://api.rawg.io/api/games';
const API_GAMES_ID_EP = 'https://api.rawg.io/api/games';
const API_GAMES_QUERY_EP = 'https://api.rawg.io/api/games?search=';
const API_GENRES_EP = 'https://api.rawg.io/api/genres';

module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  PORT,
  API_KEY,
  API_GAMES_EP,
  API_GAMES_ID_EP,
  API_GAMES_QUERY_EP,
  API_GENRES_EP,
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGPORT,
  PGDATABASE,
};
