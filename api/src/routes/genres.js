const { Router } = require('express');
const router = Router();
const getGenres = require('../controllers/genres');

router.get('/', async (req, res, next) => {
  try {
    const result = await getGenres();
    const genres = result.map(g => g.dataValues);
    res.send(genres);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
