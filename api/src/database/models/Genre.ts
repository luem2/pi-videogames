import type { IGenre } from 'src/types'

import {
    Model,
    BelongsToMany,
    Table,
    Column,
    AllowNull,
} from 'sequelize-typescript'

import { Videogame } from './Videogame'
import { VideogameGenre } from './VideogameGenre'

@Table
export class Genre extends Model<IGenre> {
    @AllowNull(false)
    @Column
    name: string

    @BelongsToMany(() => Videogame, () => VideogameGenre)
    videogames: Videogame[]
}
