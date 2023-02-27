import { Router } from 'express'

import {
    getVideogameById,
    updateVideogame,
    deleteVideogame,
    postVideogame,
} from '../controllers/videogame.controller'

const router = Router()

/**
 * @swagger
 * /api/videogame/{idVideogame}:
 *      get:
 *          summary: Find videogame by ID
 *          tags:
 *              - Videogame
 *          description: Returns a single videogame
 *          parameters:
 *              - name: idVideogame
 *                in: path
 *                required: true
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Videogame'
 *              500:
 *                  description: Internal server error
 *      put:
 *          summary: Update videogame by ID
 *          tags:
 *              - Videogame
 *          description: Returns a single updated videogame
 *          requestBody:
 *              description: Update an existing created videogame
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  format: varchar(255)
 *                                  example: League of Henrys
 *                              description:
 *                                  type: string
 *                                  format: varchar(400)
 *                                  example: The best game in the world
 *                              background_image:
 *                                  type: string
 *                                  format: varchar(400)
 *                                  example: https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg
 *                              released:
 *                                  type: string
 *                                  format: varchar(255)
 *                                  example: 02-08-2020
 *                              rating:
 *                                  type: number
 *                                  format: float8
 *                                  example: 5
 *                              genres:
 *                                  type: array
 *                                  format: varchar(400)
 *                                  example: ["Action", "Arcade"]
 *                              platforms:
 *                                  type: array
 *                                  format: varchar(400)
 *                                  example: ["PC", "Xbox 360"]
 *              required: true
 *          parameters:
 *              - name: idVideogame
 *                in: path
 *                required: true
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Videogame'
 *              500:
 *                  description: Internal server error
 *      delete:
 *          summary: Delete videogame by ID
 *          tags:
 *              - Videogame
 *          description: Returns status 200 when the videogame was deleted
 *          parameters:
 *              - name: idVideogame
 *                in: path
 *                required: true
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  msg:
 *                                      type: string
 *                                      example: 'the game was successfully removed'
 *              500:
 *                  description: Internal server error
 * /api/videogame/:
 *      post:
 *          summary: Create videogame
 *          tags:
 *              - Videogame
 *          description: Returns a status 200 and a message when the game was created
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  format: varchar(255)
 *                                  example: League of Henrys
 *                              description:
 *                                  type: string
 *                                  format: varchar(400)
 *                                  example: The best game in the world
 *                              background_image:
 *                                  type: string
 *                                  format: varchar(400)
 *                                  example: https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg
 *                              released:
 *                                  type: string
 *                                  format: varchar(255)
 *                                  example: 02-08-2020
 *                              rating:
 *                                  type: number
 *                                  format: float8
 *                                  example: 5
 *                              genres:
 *                                  type: array
 *                                  format: varchar(400)
 *                                  example: ["Action", "Arcade"]
 *                              platforms:
 *                                  type: array
 *                                  format: varchar(400)
 *                                  example: ["PC", "Xbox 360"]
 *              required: true
 *          responses:
 *              200:
 *                  description: Success
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  msg:
 *                                      type: string
 *                                      example: 'The Videogame was created successfully'
 *              500:
 *                  description: Internal server error
 */
router.get('/:idVideogame', getVideogameById)
router.put('/:idVideogame', updateVideogame)
router.delete('/:idVideogame', deleteVideogame)
router.post('/', postVideogame)

export default router
