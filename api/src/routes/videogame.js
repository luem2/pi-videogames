const { Router } = require('express');
const router = Router();

const {
  getIdGame,
  updateGame,
  deleteGame,
  postGame,
} = require('../controllers/videogame');

router.get('/:idVideogame', getIdGame);
router.put('/:idVideogame', updateGame);
router.delete('/:idVideogame', deleteGame);
router.post('/', postGame);

module.exports = router;
