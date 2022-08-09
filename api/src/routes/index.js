const { Router } = require('express');
const router = Router();

const videogame = require('./videogame.js');
const videogames = require('./videogames.js');
const genres = require('./genres.js');

router.use('/videogame', videogame);
router.use('/videogames', videogames);
router.use('/genres', genres);

module.exports = router;
