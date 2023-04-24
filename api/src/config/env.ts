import dotenv from 'dotenv'

dotenv.config()

export const config = {
    DB_USER: process.env.DB_USER ?? 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD ?? 'password123',
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: process.env.DB_PORT ?? 5432,
    DB_NAME: process.env.DB_NAME ?? 'videogames',
    PORT: process.env.PORT ?? 3000,
    API_KEY: process.env.API_KEY ?? 'YOUR_API_KEY_HERE',
    ORIGIN_CORS:
        typeof process.env.ORIGIN_CORS !== 'undefined'
            ? JSON.parse(process.env.ORIGIN_CORS)
            : '*',
}

export const API_GAMES_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_ID_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_QUERY_EP = 'https://api.rawg.io/api/games?search='
export const API_GENRES_EP = 'https://api.rawg.io/api/genres'
