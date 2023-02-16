import type { Application } from 'express'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'

import getGenres from './controllers/genres.controller'
import genresRoutes from './routes/genres.route'
import videogameRoutes from './routes/videogame.route'
import videogamesRoutes from './routes/videogames.route'
import { handleError } from './middlewares/handleError'
import { config } from './config/env'
import db from './database/connection'

class Server {
    readonly app: Application
    readonly port: string | number
    readonly apiPaths = {
        genres: '/api/genres',
        videogame: '/api/videogame',
        videogames: '/api/videogames',
    }

    constructor() {
        this.app = express()
        this.port = config.PORT

        this.dbConnection()

        this.middlewares()
        this.routes()
    }

    async dbConnection(): Promise<void> {
        try {
            await db.authenticate()
            await db.sync({ force: false })
            await getGenres()
            console.log('Database connected')
        } catch (error) {
            console.error(error)
        }
    }

    middlewares(): void {
        // CORS
        this.app.use(
            cors({
                origin: 'https://henrygames.lucianopinol.com',
                credentials: true,
                methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
                allowedHeaders: [
                    'Origin',
                    'X-Requested-With',
                    'Content-Type',
                    'Accept',
                ],
            })
        )

        // MORGAN
        this.app.use(morgan('dev'))

        // COOKIE PARSER
        this.app.use(cookieParser())

        // Lectura del body
        this.app.use(
            express.json({
                limit: '50mb',
            })
        )

        // URLEncoded
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }))

        // Carpeta publica
        this.app.use(express.static('public'))

        // Handle Error
        this.app.use(handleError)
    }

    routes(): void {
        this.app.use(this.apiPaths.genres, genresRoutes)
        this.app.use(this.apiPaths.videogame, videogameRoutes)
        this.app.use(this.apiPaths.videogames, videogamesRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

export default Server
