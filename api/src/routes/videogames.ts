import { Router } from 'express'
import getGames from '../controllers/videogames'

const router = Router()

router.get('/', getGames)

export default router
