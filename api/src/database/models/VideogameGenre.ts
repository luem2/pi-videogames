import { Table, Column, ForeignKey, Model } from 'sequelize-typescript'

import { Genre } from './Genre'
import { Videogame } from './Videogame'

@Table
export class VideogameGenre extends Model {
    @ForeignKey(() => Genre)
    @Column
    genreId: number

    @ForeignKey(() => Videogame)
    @Column
    videogameId: number
}
