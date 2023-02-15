import { Router } from 'express'
const router = Router()

import {
    getVideogameById,
    updateVideogame,
    deleteVideogame,
    postVideogame,
} from '../controllers/videogame.controller'

router.get('/:idVideogame', getVideogameById)
router.put('/:idVideogame', updateVideogame)
router.delete('/:idVideogame', deleteVideogame)
router.post('/', postVideogame)

export default router
