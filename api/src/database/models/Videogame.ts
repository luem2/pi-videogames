import type { IVideogame, PlatformName } from '../../types'

import {
    Model,
    BelongsToMany,
    Table,
    Column,
    AllowNull,
    DataType,
    Unique,
    IsNumeric,
    PrimaryKey,
} from 'sequelize-typescript'

import { Genre } from './Genre'
import { VideogameGenre } from './VideogameGenre'

@Table({ timestamps: false })
export class Videogame extends Model<IVideogame> {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    public declare id: number

    @Unique('The videogame already exists')
    @AllowNull(false)
    @Column
    public declare name: string

    @AllowNull(false)
    @Column(DataType.STRING(400))
    public declare description: string

    @Column(DataType.TEXT)
    public declare background_image: string

    @AllowNull(false)
    @Column
    public declare released: string

    @IsNumeric
    @Column(DataType.FLOAT)
    public declare rating: number

    @AllowNull(false)
    @Column(DataType.ARRAY(DataType.STRING))
    public declare platforms: PlatformName[]

    @BelongsToMany(() => Genre, () => VideogameGenre)
    public declare genres: Genre[]
}
