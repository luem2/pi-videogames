export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_USER: string
            DB_PASSWORD: string
            DB_HOST: string
            DB_PORT: string | number
            DB_NAME: string
            PORT: string | number
            API_KEY: string
            PGUSER: string
            PGPASSWORD: string
            PGHOST: string
            PGPORT: string | number
            PGDATABASE: string
            NODE_ENV: 'development' | 'production'
        }
    }
}
