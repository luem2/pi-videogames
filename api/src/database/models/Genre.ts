import { Model, DataTypes } from 'sequelize'
import db from '../connection'

class Genre extends Model {
    declare name: string
}

Genre.init(
    {
        name: { type: DataTypes.STRING },
    },
    {
        sequelize: db,
        modelName: 'Genre',
        timestamps: false,
    }
)

// const Genre = db.define(
//     'Genre',
//     {
//         name: {
//             type: DataTypes.STRING,
//         },
//     },
//     {
//         timestamps: false,
//     }
// )

export default Genre
