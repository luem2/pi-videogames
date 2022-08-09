const { Router } = require('express');
const router = Router();

const getGames = require('../controllers/videogames');

router.get('/', getGames);
module.exports = router;
