import axios from 'axios'
import db from '../db.js'
import { API_KEY, API_GENRES_EP } from '../config/env'

const getGenres = async () => {
    try {
        const result = await axios.get(`${API_GENRES_EP}?key=${API_KEY}`)
        result.data.results.forEach((g: string) =>
            Genre.findOrCreate({
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
