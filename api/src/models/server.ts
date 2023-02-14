import express, { Application } from 'express'
import { PORT } from '../config/env'

class Server {
    private app: Application
    private port: string

    constructor() {
        this.app = express()
        this.port = PORT || '3000'
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`)
        })
    }
}

export default Server

// import express, { Application } from 'express'
// import cookieParser from 'cookie-parser'
// import bodyParser from 'body-parser'
// import morgan from 'morgan'
// import routes from './routes'
// import cors from 'cors'

// import './db'

// const server = express()

// server.use(cors())
// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
// server.use(bodyParser.json({ limit: '50mb' }))
// server.use(cookieParser())
// server.use(morgan('dev'))

// server.use((req, res, next) => {
//     res.header(
//         'Access-Control-Allow-Origin',
//         'https://henrygames.lucianopinol.com'
//     )
//     res.header('Access-Control-Allow-Credentials', 'true')
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     res.header(
//         'Access-Control-Allow-Methods',
//         'GET, POST, OPTIONS, PUT, DELETE'
//     )
//     next()
// })

// server.use('/api', routes)

// // Error catching endware.
// server.use((err, req, res, next) => {
//     // eslint-disable-line no-unused-vars
//     const status = err.status || 500
//     const message = err.message || err
//     console.error(err)
//     res.status(status).send(message)
// })

// export default server
