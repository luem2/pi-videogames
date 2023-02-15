import { Router } from 'express'
import getGames from '../controllers/videogames.controller'

const router = Router()

router.get('/', getGames)

export default router
