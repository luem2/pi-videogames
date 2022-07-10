const { Router } = require('express');
const { getGames, postGame } = require('../controllers/videogames');
const router = Router();

router.get('/', getGames);
router.post('/', postGame);
module.exports = router;
