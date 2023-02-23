import { Table, Column, ForeignKey, Model } from 'sequelize-typescript'

import { Genre } from './Genre'
import { Videogame } from './Videogame'

@Table({
    timestamps: false,
})
export class VideogameGenre extends Model<VideogameGenre> {
    @ForeignKey(() => Genre)
    @Column
    public declare genreId: number

    @ForeignKey(() => Videogame)
    @Column
    public declare videogameId: number
}
