import * as pg from 'pg'
import { Sequelize } from 'sequelize'

import { config } from '../config/env'

const db =
    process.env.NODE_ENV === 'production'
        ? new Sequelize({
              database: config.PGDATABASE,
              dialectModule: pg,
              dialect: 'postgres',
              host: config.PGHOST,
              port: config.PGPORT as number,
              username: config.PGUSER,
              password: config.PGPASSWORD,
              pool: {
                  max: 3,
                  min: 1,
                  idle: 10000,
              },
              dialectOptions: {
                  ssl: {
                      require: true,
                      rejectUnauthorized: false,
                  },
                  keepAlive: true,
              },
              ssl: true,
          })
        : new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
              host: config.DB_HOST,
              port: config.DB_PORT as number,
              dialect: 'postgres',
              logging: false,
          })

export default db
