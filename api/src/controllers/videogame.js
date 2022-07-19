const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY, API_GAMES_ID_EP } = require('../utility/');

const getIdGame = async (req, res, next) => {
  const { idVideogame } = req.params;

  try {
    if (idVideogame.length === 36) {
      const gameId = await Videogame.findByPk(idVideogame, {
        include: Genre,
      });

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
        background_image,
        genres: genres?.map(g => g.name),
      };
      res.send(gameId);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getIdGame;
