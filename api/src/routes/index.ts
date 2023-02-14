import { Router } from 'express'
const router = Router()

import videogame from './videogame'
import videogames from './videogames'
import genres from './genres'

router.use('/videogame', videogame)
router.use('/videogames', videogames)
router.use('/genres', genres)

export default router
