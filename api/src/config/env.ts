import dotenv from 'dotenv'
dotenv.config()

export const {
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
    NODE_ENV,
} = process.env

//Enabled endpoints-flags API
export const API_GAMES_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_ID_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_QUERY_EP = 'https://api.rawg.io/api/games?search='
export const API_GENRES_EP = 'https://api.rawg.io/api/genres'
