const { Router } = require('express');
const router = Router();
const getGenres = require('../controllers/genres');

router.get('/', async (req, res) => {
  try {
    const result = await getGenres();
    const genres = result.map(g => g.dataValues);
    res.send(genres);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
