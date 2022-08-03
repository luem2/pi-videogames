const axios = require('axios');
const { Genre } = require('../db.js');
const { API_KEY, API_GENRES_EP } = require('../../config');

const getGenres = async () => {
  try {
    const result = await axios.get(`${API_GENRES_EP}?key=${API_KEY}`);
    result.data.results.forEach(g =>
      Genre.findOrCreate({
        where: {
          name: g.name,
        },
      })
    );

    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getGenres;
