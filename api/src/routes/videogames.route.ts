import { Router } from 'express'

import getGames from '../controllers/videogames.controller'

const router = Router()

/**
 * @swagger
 * /api/videogames:
 *      get:
 *          summary: Get all the games
 *          tags:
 *              - Videogames
 *          description: Return all the videogames created and the RAWG API.
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Videogame'
 *
 *              401:
 *                  description: Game Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  msg:
 *                                      type: string
 *                                      example: 'No games Found'
 *              500:
 *                  description: Internal server error
 *
 * /api/videogames?name={name}:
 *      get:
 *          summary: Get all the games by query
 *          tags:
 *              - Videogames
 *          description: Return all the videogames created and the RAWG API by query.
 *          parameters:
 *              - name: name
 *                in: query
 *                required: true
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Videogame'
 *
 *              404:
 *                  description: Game Not Found
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  msg:
 *                                      type: string
 *                                      example: 'The requested game was not found'
 *              500:
 *                  description: Internal server error
 */
router.get('/', getGames)

export default router
