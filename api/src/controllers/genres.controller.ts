import type { IGenre, IGenreAPI } from '../types'

import axios from 'axios'

import { sequelize } from '../database/connection'
import { API_GENRES_EP, config } from '../config/env'

const { Genre } = sequelize.models

const getGenres = async (): Promise<IGenre[] | undefined> => {
    try {
        const result = await axios.get(`${API_GENRES_EP}?key=${config.API_KEY}`)

        const response: {
            count: number
            next: null
            previous: null
            results: IGenreAPI[]
        } = result.data

        response.results.forEach(
            async (g: IGenreAPI) =>
                await Genre.findOrCreate({
                    where: {
                        name: g.name,
                    },
                })
        )

        const allGenres = await Genre.findAll()

        return allGenres as unknown as IGenre[]
    } catch (e) {
        console.error(e)
    }
}

export default getGenres
