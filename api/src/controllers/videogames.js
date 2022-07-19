const axios = require('axios');
const { Videogame, Genre } = require('../db');
const { API_KEY, API_GAMES_EP, API_GAMES_QUERY_EP } = require('../utility/');

const getGames = async (req, res, next) => {
  const { name } = req.query;

  try {
    if (!name) {
      const allGamesApi = [];

      for (let i = 1; i < 6; i++) {
        const resultAPI = await axios.get(
          `${API_GAMES_EP}?key=${API_KEY}&page=${i}`
        );

        const gamesAPI = resultAPI.data.results.map(g => ({
          id: g.id,
          name: g.name,
          genres: g.genres?.map(g => g.name),
          background_image: g.background_image,
          rating: g.rating,
          platforms: g.platforms?.map(p => ({
            id: p.platform.id,
            platform_name: p.platform.name,
          })),
        }));

        allGamesApi.push(...gamesAPI);
      }

      const dbGames = await Videogame.findAll();

      const allGames = [...allGamesApi, ...dbGames];
      allGames.sort((a, b) => a.name.length < b.name.length);

      allGames.length
        ? res.send(allGames)
        : res.status(401).send({ msg: 'No games Found' });
    } else {
      const allQueryApiGames = [];

      for (let i = 1; i < 6; i++) {
        const apiResult = await axios.get(
          `${API_GAMES_QUERY_EP}${name}&key=${API_KEY}&page=${i}`
        );

        if (apiResult.data.next) {
          const queryApiGames = apiResult.data.results.map(g => ({
            id: g.id,
            name: g.name,
            genres: g.genres?.map(g => g.name),
            background_image: g.background_image,
            rating: g.rating,
            platforms: g.platforms?.map(p => ({
              id: p.platform.id,
              platform_name: p.platform.name,
            })),
          }));
          allQueryApiGames.push(...queryApiGames);
        } else break;
      }

      allQueryApiGames.length
        ? res.send(allQueryApiGames)
        : res.status(404).send({ msg: 'The requested game was not found' });
    }
  } catch (error) {
    next(error);
  }
};

const postGame = async (req, res, next) => {
  const {
    name,
    description,
    genres,
    background_image,
    released,
    rating,
    platforms,
  } = req.body;

  if (!name || !description || !platforms) {
    res.status(401).send({ msg: 'Required data is missing' });
  }

  const gameCreated = await Videogame.create({
    name,
    description,
    background_image,
    released,
    rating,
    platforms,
  });

  const genreMatched = await Genre.findAll({
    where: {
      name: genres,
    },
  });

  try {
    gameCreated.addGenre(genreMatched);
    res.send({
      msg: 'The Videogame was created successfully!',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getGames, postGame };
