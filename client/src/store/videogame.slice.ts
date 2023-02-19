import type { AppThunk } from './index'
import type { IInitialState, IVideogame } from '../types'

import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

import {
    alphabeticVideogamesSort,
    genresVideogamesSort,
    ratingVideogamesSort,
} from './utils'
import { gamesSourceSort } from './utils/sortFunctions'
import { gameNotFoundModal } from './modal.slice'

const initialState: IInitialState = {
    videogames: [],
    filteredVideogames: [],
    videogameDetails: {},
    genres: [],
}

const videogameSlice = createSlice({
    name: 'videogame',
    initialState,
    reducers: {
        getAllGames: (state, action) => {
            state.videogames = action.payload
            state.filteredVideogames = action.payload
        },

        getQueryGames: (state, action) => {
            state.filteredVideogames = action.payload
        },

        alphaSort: (state, action) => {
            if (action.payload === 'default') {
                state.filteredVideogames = state.videogames

                return
            }

            const alphabeticVideogames = alphabeticVideogamesSort(
                state.filteredVideogames,
                action
            )

            state.filteredVideogames = alphabeticVideogames
        },

        ratingSort: (state, action) => {
            if (action.payload === 'default') {
                state.filteredVideogames = state.videogames

                return
            }

            const ratingVideogames = ratingVideogamesSort(
                state.filteredVideogames,
                action
            )

            state.filteredVideogames = ratingVideogames
        },

        genresSort: (state, action) => {
            if (action.payload === 'default') {
                state.filteredVideogames = state.videogames

                return
            }

            const genresVideogames = genresVideogamesSort(
                state.filteredVideogames,
                action
            )

            state.filteredVideogames = genresVideogames
        },

        gamesSort: (state, action) => {
            if (action.payload === 'default') {
                state.filteredVideogames = state.videogames

                return
            }

            const gamesSource = gamesSourceSort(state.videogames, action)

            state.filteredVideogames = gamesSource
        },

        getDetails: (state, action) => {
            state.videogameDetails = action.payload
        },

        clearDetails: (state) => {
            state.videogameDetails = {}
        },

        clearFilters: (state) => {
            state.filteredVideogames = state.videogames
        },

        clearFilteredVideogames: (state) => {
            state.filteredVideogames = []
        },

        getGenres: (state, action) => {
            state.genres = action.payload
        },

        clearHome: (state) => {
            state.filteredVideogames = []
        },
    },
})

export function getAllVideogamesThunk(): AppThunk {
    return async (dispatch) => {
        try {
            const result = await axios.get('/api/videogames')

            dispatch(getAllGames(result.data))
        } catch (e) {
            console.error(e)
        }
    }
}

export function searchVideogamesThunk(search: string): AppThunk {
    return async (dispatch) => {
        try {
            const result = await axios.get(`/api/videogames?name=${search}`)

            dispatch(getQueryGames(result.data))
        } catch (e) {
            dispatch(gameNotFoundModal(true))
            dispatch(clearFilters())
            console.error(e)
        }
    }
}

export function getDetailsThunk(id: string): AppThunk {
    return async (dispatch) => {
        try {
            const result = await axios.get(`/api/videogame/${id}`)

            dispatch(getDetails(result.data))
        } catch (e) {
            console.error(e)
        }
    }
}

export const createVideogameThunk = (videogame: IVideogame) => {
    return async () => {
        try {
            await axios.post('/api/videogame', videogame)
        } catch (e) {
            console.error(e)
        }
    }
}

export const getGenresThunk = (): AppThunk => {
    return async (dispatch) => {
        try {
            const response = await axios.get('/api/genres')

            const genres = response.data.map(
                (g: { id: number; name: string }) => g.name
            )

            dispatch(getGenres(genres))
        } catch (e) {
            console.error(e)
        }
    }
}

export const updateVideogameThunk = (id: string, videogame: IVideogame) => {
    return async () => {
        try {
            await axios.put(`/api/videogame/${id}`, videogame)
        } catch (e) {
            console.error(e)
        }
    }
}

export const deleteGameThunk = (id: string | undefined) => {
    return async () => {
        try {
            if (id !== undefined) {
                await axios.delete(`api/videogame/${id}`)
            }
        } catch (e) {
            console.error(e)
        }
    }
}

export const {
    getAllGames,
    alphaSort,
    clearDetails,
    clearFilteredVideogames,
    clearFilters,
    clearHome,
    gamesSort,
    genresSort,
    getDetails,
    getGenres,
    getQueryGames,
    ratingSort,
} = videogameSlice.actions

export default videogameSlice.reducer
