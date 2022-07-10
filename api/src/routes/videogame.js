const { Router } = require('express');
const router = Router();
const getIdGame = require('../controllers/videogame');

router.get('/:idVideogame', getIdGame);

module.exports = router;
