import type { Request, Response } from 'express'

import { Router } from 'express'

import getGenres from '../controllers/genres.controller'

const router = Router()

/**
 * @swagger
 * /api/genres:
 *      get:
 *          summary: Get All Genres
 *          tags:
 *              - Genres
 *          description: You get all genres from the table, related to video games.
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: "#/components/schemas/Genre"
 *                              properties:
 *                                  text:
 *                                      type: string
 *                                      example: This is some example string!
 *              500:
 *                  description: Internal server error
 */
router.get('/', async (_req: Request, res: Response) => {
    try {
        const result = await getGenres()

        res.send(result)
    } catch (e) {
        console.error(e)
    }
})

export default router
