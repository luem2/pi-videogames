export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_USER: string
            DB_PASSWORD: string
            DB_HOST: string
            DB_PORT: string
            DB_NAME: string
            PORT: string
            API_KEY: string
            PGUSER: string
            PGPASSWORD: string
            PGHOST: string
            PGPORT: string
            PGDATABASE: string
            ORIGIN_CORS: string
            NODE_ENV: 'development' | 'production'
        }
    }
}
