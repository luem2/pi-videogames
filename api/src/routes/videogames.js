const { Router } = require('express');
const router = Router();

const { getGames, postGame } = require('../controllers/videogames');

router.get('/', getGames);
router.post('/', postGame);
module.exports = router;
