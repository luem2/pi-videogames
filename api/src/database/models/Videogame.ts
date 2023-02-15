import { Model, DataTypes } from 'sequelize'
import db from '../connection'

class Videogame extends Model {
    declare id: number
    declare name: string
    declare description: string
    declare background_image: string
    declare released: string
    declare rating: number
    declare platforms: Array<string>
    //TODO: Hacer bien esto:
    declare setGenres: any
    declare addGenre: any
}

Videogame.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'The videogame already exists',
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        background_image: {
            type: DataTypes.TEXT,
        },

        released: {
            type: DataTypes.STRING,
        },

        rating: {
            type: DataTypes.FLOAT,
            validate: {
                isNumeric: true,
                is: {
                    args: /[+]?([0-4]*\.[0-9]+|[0-5])/,
                    msg: 'The score must be between 1 to 5',
                },
            },
        },

        platforms: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: 'Videogame',
        timestamps: false,
    }
)

// const Videogame = db.define(
//     'Videogame',
//     {
//         id: {
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//         },

//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: 'The videogame already exists',
//         },

//         description: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//         },

//         background_image: {
//             type: DataTypes.TEXT,
//         },

//         released: {
//             type: DataTypes.STRING,
//         },

//         rating: {
//             type: DataTypes.FLOAT,
//             validate: {
//                 isNumeric: true,
//                 is: {
//                     args: /[+]?([0-4]*\.[0-9]+|[0-5])/,
//                     msg: 'The score must be between 1 to 5',
//                 },
//             },
//         },

//         platforms: {
//             type: DataTypes.ARRAY(DataTypes.STRING),
//             allowNull: false,
//         },
//     },
//     {
//         timestamps: false,
//     }
// )

export default Videogame
