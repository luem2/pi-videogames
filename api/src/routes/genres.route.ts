import type { Request, Response } from 'express'

import { Router } from 'express'

import getGenres from '../controllers/genres.controller'

const router = Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const result = await getGenres()

        res.send(result)
    } catch (e) {
        console.error(e)
    }
})

export default router
