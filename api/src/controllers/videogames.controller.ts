import type { Request, Response, NextFunction } from 'express'
import type { IVideogame } from '../types'

import axios from 'axios'
import { Op } from 'sequelize'

import Genre from '../database/models/Genre'
import Videogame from '../database/models/Videogame'
import { config, API_GAMES_EP, API_GAMES_QUERY_EP } from '../config/env'

const getGames = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { name } = req.query
        const stringName = name as string

        if (name === undefined ?? name === null) {
            const allGamesApi = []

            for (let i = 1; i < 6; i++) {
                const resultAPI = await axios.get(
                    `${API_GAMES_EP}?key=${config.API_KEY}&page=${i}`
                )

                const gamesAPI = resultAPI.data.results.map(
                    (game: IVideogame) => ({
                        id: game.id,
                        name: game.name,
                        genres: game.genres?.map((g) => g.name),
                        background_image: game.background_image,
                        rating: game.rating,
                        platforms: game.platforms?.map((p) => ({
                            id: p.platform.id,
                            platform_name: p.platform.name,
                        })),
                    })
                )

                allGamesApi.push(...gamesAPI)
            }

            const dbGames = await Videogame.findAll({
                include: Genre,
            })

            const allGames = [...allGamesApi, ...dbGames]

            allGames.length > 0
                ? res.send(allGames)
                : res.status(401).send({ msg: 'No games Found' })
        } else {
            const allQueryApiGames = []

            for (let i = 1; i < 6; i++) {
                const apiResult = await axios.get(
                    `${API_GAMES_QUERY_EP}${stringName}&key=${config.API_KEY}&page=${i}`
                )

                if (
                    apiResult.data.next !== null &&
                    apiResult.data.next !== undefined
                ) {
                    const queryApiGames = apiResult.data.results.map(
                        (g: IVideogame) => ({
                            id: g.id,
                            name: g.name,
                            genres: g.genres?.map((g) => g.name),
                            background_image: g.background_image,
                            rating: g.rating,
                            platforms: g.platforms?.map((p) => ({
                                id: p.platform.id,
                                platform_name: p.platform.name,
                            })),
                        })
                    )

                    allQueryApiGames.push(...queryApiGames)
                } else break
            }

            const dbResult = await Videogame.findAll({
                where: {
                    name: {
                        [Op.substring]: name,
                    },
                },
            })

            const allGamesQuery = [...dbResult, ...allQueryApiGames]

            allGamesQuery.length > 0
                ? res.send(allGamesQuery)
                : res
                      .status(404)
                      .send({ msg: 'The requested game was not found' })
        }
    } catch (e) {
        next(e)
    }
}

export default getGames
