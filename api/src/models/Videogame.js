const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define(
    'Videogame',
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
        unique: {
          msg: 'The videogame already exists',
        },
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
      timestamps: false,
    }
  );
};
