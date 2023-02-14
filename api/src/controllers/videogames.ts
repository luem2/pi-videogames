import axios from 'axios'
import { Videogame, Genre, Op } from '../db'
import { API_KEY, API_GAMES_EP, API_GAMES_QUERY_EP } from '../config/env'

const getGames = async (req, res, next) => {
    try {
        const { name } = req.query
        if (!name) {
            const allGamesApi = []

            for (let i = 1; i < 6; i++) {
                const resultAPI = await axios.get(
                    `${API_GAMES_EP}?key=${API_KEY}&page=${i}`
                )

                const gamesAPI = resultAPI.data.results.map((g) => ({
                    id: g.id,
                    name: g.name,
                    genres: g.genres?.map((g) => g.name),
                    background_image: g.background_image,
                    rating: g.rating,
                    platforms: g.platforms?.map((p) => ({
                        id: p.platform.id,
                        platform_name: p.platform.name,
                    })),
                }))

                allGamesApi.push(...gamesAPI)
            }

            const dbGames = await Videogame.findAll({
                include: Genre,
            })

            const allGames = [...allGamesApi, ...dbGames]
            allGames.sort((a, b) => a.name.length < b.name.length)

            allGames.length
                ? res.send(allGames)
                : res.status(401).send({ msg: 'No games Found' })
        } else {
            const allQueryApiGames = []

            for (let i = 1; i < 6; i++) {
                const apiResult = await axios.get(
                    `${API_GAMES_QUERY_EP}${name}&key=${API_KEY}&page=${i}`
                )

                if (apiResult.data.next) {
                    const queryApiGames = apiResult.data.results.map((g) => ({
                        id: g.id,
                        name: g.name,
                        genres: g.genres?.map((g) => g.name),
                        background_image: g.background_image,
                        rating: g.rating,
                        platforms: g.platforms?.map((p) => ({
                            id: p.platform.id,
                            platform_name: p.platform.name,
                        })),
                    }))
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

            allGamesQuery.length
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
