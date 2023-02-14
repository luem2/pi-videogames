import { Model, Optional } from 'sequelize'

class Genre extends Model {
    declare name: string
}

// const { DataTypes } = require('sequelize');

// module.exports = sequelize => {
//   sequelize.define(
//     'Genre',
//     {
//       name: {
//         type: DataTypes.STRING,
//       },
//     },
//     {
//       timestamps: false,
//     }
//   );
// };
