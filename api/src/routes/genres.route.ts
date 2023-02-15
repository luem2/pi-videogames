import type { Request, Response } from 'express'
import { Router } from 'express'
import getGenres from '../controllers/genres.controller'

const router = Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const result = await getGenres()
        const genres = result?.map((g) => g.dataValues)
        res.send(genres)
    } catch (e) {
        console.log(e)
    }
})

export default router
