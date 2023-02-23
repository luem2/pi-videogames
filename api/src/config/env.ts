import dotenv from 'dotenv'

dotenv.config()

export const config = {
    DB_USER: process.env.DB_USER ?? 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD ?? 'password-poderosa-123',
    DB_HOST: process.env.DB_HOST ?? 'localhost',
    DB_PORT: process.env.DB_PORT ?? 5432,
    DB_NAME: process.env.DB_NAME ?? 'videogames',
    PORT: process.env.PORT ?? 3000,
    API_KEY: process.env.API_KEY ?? '9b01d9sa0620458599ca079cegfa92e4',
    PGUSER: process.env.PGUSER ?? 'postgres',
    PGPASSWORD: process.env.PGPASSWORD ?? 'password-megapoderosa-123',
    PGHOST: process.env.PGHOST ?? 'https://urldatabase.com/',
    PGPORT: process.env.PGPORT ?? 5432,
    PGDATABASE: process.env.PGDATABASE ?? 'db-postgres',
    NODE_ENV: process.env.NODE_ENV ?? 'development',
}

export const API_GAMES_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_ID_EP = 'https://api.rawg.io/api/games'
export const API_GAMES_QUERY_EP = 'https://api.rawg.io/api/games?search='
export const API_GENRES_EP = 'https://api.rawg.io/api/genres'
