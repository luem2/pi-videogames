import { Router } from 'express'

import {
    getVideogameById,
    updateVideogame,
    deleteVideogame,
    postVideogame,
} from '../controllers/videogame.controller'

const router = Router()

router.get('/:idVideogame', getVideogameById)
router.put('/:idVideogame', updateVideogame)
router.delete('/:idVideogame', deleteVideogame)
router.post('/', postVideogame)

export default router
