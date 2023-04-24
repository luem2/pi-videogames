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
            ORIGIN_CORS: string
        }
    }
}
