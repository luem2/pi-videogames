const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogame = require('./videogame.js');
const videogames = require('./videogames.js');
const genres = require('./genres.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', videogame);
router.use('/videogames', videogames);
router.use('/genres', genres);

module.exports = router;
