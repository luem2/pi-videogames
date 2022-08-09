const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY, API_GAMES_ID_EP } = require('../../config');

const getIdGame = async (req, res, next) => {
  try {
    const { idVideogame } = req.params;
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
  } catch (e) {
    next(e);
  }
};

const updateGame = async (req, res, next) => {
  try {
    const id = req.params.idVideogame;
    const defaultImage =
      'https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg';

    const {
      name,
      description,
      background_image,
      released,
      rating,
      genres,
      platforms,
    } = req.body;

    await Videogame.update(
      {
        name,
        description,
        background_image: background_image || defaultImage,
        released,
        rating,
        platforms,
      },
      {
        where: {
          id,
        },
      }
    );

    if (genres) {
      const game = await Videogame.findByPk(id);
      const genresMatched = await Genre.findAll({
        where: {
          name: genres,
        },
      });
      await game.setGenres(genresMatched);
    }

    res.send({ msg: 'The game was successfully updated!' });
  } catch (e) {
    next(e);
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const id = req.params.idVideogame;

    await Videogame.destroy({
      where: {
        id,
      },
    });

    res.send({ msg: 'the game was successfully removed' });
  } catch (e) {
    next(e);
  }
};

const postGame = async (req, res, next) => {
  try {
    const {
      name,
      description,
      genres,
      background_image,
      released,
      rating,
      platforms,
    } = req.body;

    const defaultImage =
      'https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg';

    if (!name || !description || !platforms) {
      res.status(401).send({ msg: 'Required data is missing' });
    }

    const gameCreated = await Videogame.create({
      name,
      description,
      background_image: background_image || defaultImage,
      released,
      rating,
      platforms,
    });

    const genreMatched = await Genre.findAll({
      where: {
        name: genres,
      },
    });

    gameCreated.addGenre(genreMatched);

    res.send({
      msg: 'The Videogame was created successfully!',
    });
  } catch (e) {
    next(e);
  }
};

module.exports = { getIdGame, postGame, updateGame, deleteGame };
