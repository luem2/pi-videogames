const axios = require('axios');
const { Genre } = require('../db.js');
const { API_KEY, API_GENRES_EP } = require('../utility/');

const getGenres = async (req, res, next) => {
  try {
    const genresDB = await Genre.findAll();

    if (genresDB.length) {
      res.send(genresDB);
    } else {
      const result = await axios.get(`${API_GENRES_EP}?key=${API_KEY}`);
      const genres = result.data.results?.map(g => ({
        id: g.id,
        name: g.name,
      }));

      (() => {
        genres.forEach(g => Genre.create(g));
      })();

      res.send({
        msg: 'Se han creado los géneros en la base de datos satisfactoriamente!',
        result: genres,
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = getGenres;
