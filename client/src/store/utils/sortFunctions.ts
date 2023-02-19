import type { IAction, PlatformName } from './../../types/index.d'
import type { IVideogame } from '../../types/index'

import { gameNotFoundModal } from '../modal.slice'

import { ASCENDENTE, EXTERNAL_API } from './constants'

export function alphabeticVideogamesSort(
    arr: IVideogame[],
    action: IAction
): IVideogame[] {
    arr.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return action.payload === ASCENDENTE ? -1 : 1
        } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return action.payload === ASCENDENTE ? 1 : -1
        } else return 0
    })

    return arr
}

export function ratingVideogamesSort(
    arr: IVideogame[],
    action: IAction
): IVideogame[] {
    arr.sort((a, b) => {
        if (a.rating < b.rating) {
            return action.payload === ASCENDENTE ? -1 : 1
        } else if (a.rating > b.rating) {
            return action.payload === ASCENDENTE ? 1 : -1
        } else return 0
    })

    return arr
}

// ----------------------------------------------------------------

export function genresVideogamesSort(
    arr: IVideogame[],
    action: IAction
): IVideogame[] {
    const genresVideogames = arr.filter((g) =>
        g.genres?.includes(action.payload as PlatformName)
    )

    if (!genresVideogames.length) {
        gameNotFoundModal(true)
    }

    return genresVideogames
}

export function gamesSourceSort(
    arr: IVideogame[],
    action: IAction
): IVideogame[] {
    const gamesSource = arr.filter((game) => {
        if (action.payload === EXTERNAL_API) {
            return game.id?.toString().length !== 36
        } else {
            return game.id?.toString().length === 36
        }
    })

    if (!gamesSource.length) {
        gameNotFoundModal(true)
    }

    return gamesSource
}
