import type { Application } from 'express'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import swaggerUi from 'swagger-ui-express'

import getGenres from '../controllers/genres.controller'
import genresRoutes from '../routes/genres.route'
import videogameRoutes from '../routes/videogame.route'
import videogamesRoutes from '../routes/videogames.route'
import swaggerSetup from '../docs/swagger'
import { sequelize } from '../database/connection'
import { handleError } from '../middlewares/handleError'

import { config } from './env'

class Server {
    readonly app: Application
    readonly port: number
    readonly apiPaths = {
        docs: '/docs',
        genres: '/api/genres',
        videogame: '/api/videogame',
        videogames: '/api/videogames',
    }

    constructor() {
        this.app = express()
        this.port = Number(config.PORT)

        this.middlewares()
        this.routes()
    }

    async dbConnection(): Promise<void> {
        try {
            await sequelize.authenticate()
            await sequelize.sync({ force: false })
            await getGenres()

            console.info('🟢 Database connected')
        } catch (error) {
            console.error(error)
        }
    }

    middlewares(): void {
        this.app.use(
            cors({
                origin: config.ORIGIN_CORS,
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

        this.app.use(morgan('dev'))
        this.app.use(cookieParser())
        this.app.use(
            express.json({
                limit: '50mb',
            })
        )

        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }))
        this.app.use(express.static('public'))
        this.app.use(handleError)
    }

    routes(): void {
        this.app.use(this.apiPaths.genres, genresRoutes)
        this.app.use(this.apiPaths.videogame, videogameRoutes)
        this.app.use(this.apiPaths.videogames, videogamesRoutes)

        this.app.use(
            this.apiPaths.docs,
            swaggerUi.serve,
            swaggerUi.setup(swaggerSetup)
        )
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.info(`🟢 Server listening on port ${this.port}`)
        })
    }
}

export default Server
