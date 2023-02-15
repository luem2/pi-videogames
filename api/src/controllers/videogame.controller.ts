import type { NextFunction, Request, Response } from 'express'
import type { IVideogame } from '../types'

import axios from 'axios'

import { Genre } from '../database/models'
import { Videogame } from '../database/models'

import { config, API_GAMES_ID_EP } from '../config/env'

export const getVideogameById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { idVideogame } = req.params

        if (idVideogame.length === 36) {
            const videogame = await Videogame.findByPk(idVideogame, {
                include: Genre,
            })

            res.send(videogame)
        } else {
            const result = await axios.get(
                `${API_GAMES_ID_EP}/${idVideogame}?key=${config.API_KEY}`
            )

            const {
                id,
                name,
                description,
                released,
                rating,
                platforms,
                genres,
                background_image,
            }: IVideogame = result.data

            const videogame = {
                id,
                name,
                description,
                released,
                rating,
                platforms: platforms?.map((p) => ({
                    id: p.platform.id,
                    name: p.platform.name,
                })),
                background_image,
                genres: genres?.map((g) => g.name),
            }
            res.send(videogame)
        }
    } catch (e) {
        next(e)
    }
}

export const updateVideogame = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.idVideogame
        const defaultImage =
            'https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg'

        const {
            name,
            description,
            background_image,
            released,
            rating,
            genres,
            platforms,
        } = req.body

        await Videogame.update(
            {
                name,
                description,
                background_image: background_image || defaultImage,
                released,
                rating,
                platforms,
            },
            {
                where: {
                    id,
                },
            }
        )

        if (genres) {
            const videogame = await Videogame.findByPk(id)
            console.log(videogame)
            const genresMatched = await Genre.findAll({
                where: {
                    name: genres,
                },
            })
            if (videogame !== null) {
                await videogame.setGenres(genresMatched)
            }
        }

        res.send({ msg: 'The game was successfully updated!' })
    } catch (e) {
        next(e)
    }
}

export const deleteVideogame = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.idVideogame

        await Videogame.destroy({
            where: {
                id,
            },
        })

        res.send({ msg: 'the game was successfully removed' })
    } catch (e) {
        next(e)
    }
}

export const postVideogame = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const {
            name,
            description,
            genres,
            background_image,
            released,
            rating,
            platforms,
        } = req.body

        const defaultImage =
            'https://i.blogs.es/f00b44/screenshot_699/840_560.jpeg'

        if (!name || !description || !platforms) {
            res.status(401).send({ msg: 'Required data is missing' })
        }

        const videogameCreated = await Videogame.create({
            name,
            description,
            background_image: background_image || defaultImage,
            released,
            rating,
            platforms,
        })

        const genreMatched = await Genre.findAll({
            where: {
                name: genres,
            },
        })

        videogameCreated.addGenre(genreMatched)

        res.send({
            msg: 'The Videogame was created successfully!',
        })
    } catch (e) {
        next(e)
    }
}
