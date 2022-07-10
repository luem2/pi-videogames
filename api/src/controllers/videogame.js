const axios = require('axios');
const { Videogame } = require('../db');
const { API_KEY, API_GAMES_ID_EP } = require('../utility/');

const getIdGame = async (req, res, next) => {
  const { idVideogame } = req.params;

  try {
    //? typeof idVideogame === 'string' <- Probable implementación
    if (idVideogame.length === 36) {
      const gameId = await Videogame.findByPk(idVideogame);
      res.send(gameId);
    } else {
      const result = await axios.get(
        `${API_GAMES_ID_EP}/${idVideogame}?key=${API_KEY}`
      );

      const {
        id,
        name,
        description,
        released,
        rating,
        platforms,
        genres,
        background_image,
      } = result.data;

      const gameId = {
        id,
        name,
        description,
        released,
        rating,
        platforms: platforms?.map(p => ({
          id: p.platform.id,
          name: p.platform.name,
        })),
        genres: genres?.map(g => ({
          id: g.id,
          genre_name: g.name,
        })),
        background_image,
      };

      res.send(gameId);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getIdGame;
