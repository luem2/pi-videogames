import type { IAction } from '../../types'
import type { IVideogame } from '../../types/index'

import { ASCENDENTE } from './constants'

export function alphabeticVideogamesSort(
    arr: IVideogame[],
    action: IAction
): IVideogame[] {
    arr.sort((a, b) => {
        if (a.name && b.name && a.name.toLowerCase() < b.name.toLowerCase()) {
            return action.payload === ASCENDENTE ? -1 : 1
        } else if (
            a.name &&
            b.name &&
            a.name.toLowerCase() > b.name.toLowerCase()
        ) {
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
