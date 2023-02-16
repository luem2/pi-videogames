import type { IGenre } from '../types'

import axios from 'axios'

import Genre from '../database/models/Genre'
import { API_GENRES_EP, config } from '../config/env'

const getGenres = async (): Promise<Genre[] | undefined> => {
    try {
        const result = await axios.get(`${API_GENRES_EP}?key=${config.API_KEY}`)

        result.data.results.forEach(
            async (g: IGenre) =>
                await Genre.findOrCreate({
                    where: {
                        name: g.name,
                    },
                })
        )

        const allGenres = await Genre.findAll()

        return allGenres
    } catch (e) {
        console.log(e)
    }
}

export default getGenres
