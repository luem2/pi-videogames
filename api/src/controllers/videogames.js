const axios = require('axios');
const { Videogame } = require('../db');
const { API_KEY, API_GAMES_EP, API_GAMES_QUERY_EP } = require('../utility/');

const getGames = async (req, res, next) => {
  const { name } = req.query;

  try {
    if (!name) {
      const result = await axios.get(`${API_GAMES_EP}?key=${API_KEY}`);

      const games = result.data.results.map(g => ({
        id: g.id,
        name: g.name,
        genres: g.genres?.map(g => ({
          id: g.id,
          genre_name: g.name,
        })),
        background_image: g.background_image,
        rating: g.rating,
        platforms: g.platforms?.map(p => ({
          id: p.platform.id,
          platform_name: p.platform.name,
        })),
      }));

      games.length
        ? res.send(games)
        : res.status(401).send({ msg: 'Error en la petición' });
    } else {
      const result = await axios.get(
        `${API_GAMES_QUERY_EP}${name}&key=${API_KEY}`
      );

      const firstGames = result.data.results.slice(0, 15);
      const filteredGames = firstGames.map(g => ({
        id: g.id,
        name: g.name,
        genres: g.genres?.map(g => ({
          id: g.id,
          genre_name: g.name,
        })),
        background_image: g.background_image,
        rating: g.rating,
        platforms: g.platforms?.map(p => ({
          id: p.platform.id,
          platform_name: p.platform.name,
        })),
      }));

      if (filteredGames.length) res.send(filteredGames);
      else {
        res
          .status(401)
          .send({ msg: 'No se ha encontrado el juego solicitado' });
      }
    }
  } catch (error) {
    next(error);
  }
};

const postGame = async (req, res, next) => {
  const { name, description, background_image, released, rating, platforms } =
    req.body;

  try {
    if (!name || !description || !platforms)
      res.status(401).send({ msg: 'Faltan datos requeridos' });
    else {
      const gameCreated = await Videogame.create({
        name,
        description,
        background_image,
        released,
        rating,
        platforms,
      });
      res.send(gameCreated);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getGames, postGame };
