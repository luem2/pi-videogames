import path from 'path'

import { Sequelize } from 'sequelize-typescript'

import { config } from '../config/env'

export const sequelize = new Sequelize(
    config.DB_NAME,
    config.DB_USER,
    config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        port: Number(config.DB_PORT),
        dialect: 'postgres',
        logging: false,
        models: [path.join(__dirname, '/models')],
        pool: {
            max: 3,
            min: 1,
            idle: 10000,
        },
    }
)
