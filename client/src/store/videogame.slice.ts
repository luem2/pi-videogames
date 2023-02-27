import type { AppThunk } from './index'
import type { IGenre, IInitialState, IVideogame } from '../types'

import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

import { DEFAULT } from '../utility/'

import { alphabeticVideogamesSort, ratingVideogamesSort } from './utils'
import { gameNotFoundModal } from './modal.slice'

const initialState: IInitialState = {
    videogames: [],
    currentPage: 1,
    filteredVideogames: [],
    videogameDetails: {},
    genres: [],
    select: {
        alpha: DEFAULT,
        rating: DEFAULT,
        genre: DEFAULT,
        source: DEFAULT,
    },
}

const videogameSlice = createSlice({
    name: 'videogame',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        getAllGames: (state, action) => {
            state.videogames = action.payload
            state.filteredVideogames = action.payload
        },

        getQueryGames: (state, action) => {
            state.filteredVideogames = action.payload
        },

        alphaSort: (state, action) => {
            if (action.payload === DEFAULT) {
                state.filteredVideogames = state.videogames
                state.select.alpha = action.payload

                return
            }

            const alphabeticVideogames = alphabeticVideogamesSort(
                state.filteredVideogames,
                action
            )

            state.filteredVideogames = alphabeticVideogames
            state.select.alpha = action.payload
        },

        ratingSort: (state, action) => {
            if (action.payload === DEFAULT) {
                state.filteredVideogames = state.videogames
                state.select.rating = action.payload

                return
            }

            const ratingVideogames = ratingVideogamesSort(
                state.filteredVideogames,
                action
            )

            state.filteredVideogames = ratingVideogames
            state.select.rating = action.payload
        },

        genresSort: (state, action) => {
            if (action.payload === DEFAULT) {
                state.filteredVideogames = state.videogames

                return
            }

            state.filteredVideogames = action.payload
        },

        gamesSort: (state, action) => {
            if (action.payload === DEFAULT) {
                state.filteredVideogames = state.videogames

                return
            }

            state.filteredVideogames = action.payload
        },

        setSelectAlpha: (state, action) => {
            state.select.alpha = action.payload
        },

        setSelectRating: (state, action) => {
            state.select.rating = action.payload
        },

        setSelectGenre: (state, action) => {
            state.select.genre = action.payload
        },

        setSelectSource: (state, action) => {
            state.select.source = action.payload
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
            const response = await axios.get('/api/videogames')

            const result = response.data.map((game: IVideogame) => {
                if (game.id.toString().length === 36) {
                    const genres = game.genres as IGenre[]
                    const genresMap = genres.map((g) => g.name)

                    return {
                        ...game,
                        genres: genresMap,
                    }
                } else {
                    return game
                }
            })

            dispatch(getAllGames(result))
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
            const response = await axios.get(`/api/videogame/${id}`)

            if (response.data.id.toString().length === 36) {
                const result = {
                    ...response.data,
                    genres: response.data.genres.map((g: IGenre) => g.name),
                }

                dispatch(getDetails(result))
                window.localStorage.setItem(
                    'videogameDetails',
                    JSON.stringify(result)
                )
            } else {
                dispatch(getDetails(response.data))

                window.localStorage.setItem(
                    'videogameDetails',
                    JSON.stringify(response.data)
                )
            }
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

export const createVideogameThunk = (videogame: Omit<IVideogame, 'id'>) => {
    return async () => {
        try {
            await axios.post('/api/videogame', videogame)
        } catch (e) {
            console.error(e)
        }
    }
}

export const updateVideogameThunk = (
    id: string,
    videogame: Omit<IVideogame, 'id'>
) => {
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
    setSelectAlpha,
    setSelectGenre,
    setSelectRating,
    setSelectSource,
    getDetails,
    getGenres,
    getQueryGames,
    ratingSort,
    setCurrentPage,
} = videogameSlice.actions

export default videogameSlice.reducer
