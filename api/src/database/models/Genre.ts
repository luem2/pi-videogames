import type { IGenre } from '../../types'

import {
    Model,
    BelongsToMany,
    Table,
    Column,
    AllowNull,
} from 'sequelize-typescript'

import { Videogame } from './Videogame'
import { VideogameGenre } from './VideogameGenre'

@Table({ timestamps: false })
export class Genre extends Model<IGenre> {
    @AllowNull(false)
    @Column
    public declare name: string

    @BelongsToMany(() => Videogame, () => VideogameGenre)
    public declare videogames: Videogame[]
}
