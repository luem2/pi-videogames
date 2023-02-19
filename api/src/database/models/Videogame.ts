import type { IVideogame, PlatformName } from 'src/types'

import {
    Model,
    BelongsToMany,
    Table,
    Column,
    AllowNull,
    DataType,
    Unique,
    IsNumeric,
} from 'sequelize-typescript'

import { Genre } from './Genre'
import { VideogameGenre } from './VideogameGenre'

@Table
export class Videogame extends Model<IVideogame> {
    @Unique('The videogame already exists')
    @AllowNull(false)
    @Column
    name: string

    @AllowNull(false)
    @Column(DataType.STRING(400))
    description: string

    @Column(DataType.TEXT)
    background_image: string

    @AllowNull(false)
    @Column
    released: string

    @IsNumeric
    @Column(DataType.FLOAT)
    rating: number

    @AllowNull(false)
    @Column(DataType.ARRAY(DataType.STRING))
    platforms: PlatformName[]

    @BelongsToMany(() => Genre, () => VideogameGenre)
    genres: Genre[]
}
