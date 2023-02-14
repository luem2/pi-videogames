import { Router } from 'express'
const router = Router()

import {
    getIdGame,
    updateGame,
    deleteGame,
    postGame,
} from '../controllers/videogame'

router.get('/:idVideogame', getIdGame)
router.put('/:idVideogame', updateGame)
router.delete('/:idVideogame', deleteGame)
router.post('/', postGame)

export default router
