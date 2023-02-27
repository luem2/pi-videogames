import type { GenresName } from '../../types'
import type { AppDispatch, RootState } from '../../store'

import { useDispatch, useSelector } from 'react-redux'

import {
    alphaSort,
    gamesSort,
    genresSort,
    ratingSort,
    setCurrentPage,
    setSelectGenre,
    setSelectSource,
} from '../../store/videogame.slice'
import {
    ASCENDENTE,
    DESCENDENTE,
    EXTERNAL_API,
    DATABASE_GAMES,
    DEFAULT,
} from '../../utility'
import { genres } from '../../utility/genres'
import { gameNotFoundModal } from '../../store/modal.slice'

import style from './Order.module.css'

const Order = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch()
    const { videogames, select } = useSelector(
        (state: RootState) => state.videogames
    )

    const orderByAlpha = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        dispatch(alphaSort(e.target.value))
    }

    const orderByRating = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        dispatch(ratingSort(e.target.value))
    }

    const orderByGenres = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const payload = e.target.value as GenresName

        if (e.target.value === DEFAULT) {
            dispatch(genresSort(e.target.value))
            dispatch(setSelectGenre(e.target.value))
        } else {
            const videogamesGenresFiltered = videogames.filter((g) => {
                const genres = g.genres as GenresName[]

                return genres.includes(payload)
            })

            if (videogamesGenresFiltered.length) {
                dispatch(setCurrentPage(1))
                dispatch(genresSort(videogamesGenresFiltered))
                dispatch(setSelectGenre(e.target.value))
            } else {
                dispatch(gameNotFoundModal(true))
            }
        }
    }

    const orderByGames = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        if (e.target.value === DEFAULT) {
            dispatch(genresSort(e.target.value))
            dispatch(setSelectSource(e.target.value))
        } else {
            const videogamesSourceFiltered = videogames.filter((game) => {
                if (e.target.value === EXTERNAL_API) {
                    return game.id?.toString().length !== 36
                } else {
                    return game.id?.toString().length === 36
                }
            })

            if (videogamesSourceFiltered.length) {
                dispatch(setCurrentPage(1))
                dispatch(gamesSort(videogamesSourceFiltered))
                dispatch(setSelectSource(e.target.value))
            } else {
                dispatch(gameNotFoundModal(true))
            }
        }
    }

    return (
        <div className={style.container}>
            <div className={style.firstFilters}>
                <select
                    className={style.order}
                    name='select'
                    value={select.alpha}
                    onChange={orderByAlpha}
                >
                    <option value={DEFAULT}>Alpha Order:</option>
                    <option value={ASCENDENTE}>Sort: A - Z</option>
                    <option value={DESCENDENTE}>Sort: Z - A</option>
                </select>

                <select
                    className={style.order}
                    name='select'
                    value={select.rating}
                    onChange={orderByRating}
                >
                    <option value={DEFAULT}>Rating Order:</option>
                    <option value={DESCENDENTE}>High Rating</option>
                    <option value={ASCENDENTE}>Low Rating</option>
                </select>
            </div>

            <div className={style.secondFilters}>
                <select
                    className={style.order}
                    name='select'
                    value={select.genre}
                    onChange={orderByGenres}
                >
                    <option value={DEFAULT}>Genre Order:</option>
                    {genres.map((p, index) => (
                        <option key={index} value={p}>
                            {p}
                        </option>
                    ))}
                </select>

                <select
                    className={style.order}
                    name='select'
                    value={select.source}
                    onChange={orderByGames}
                >
                    <option value={DEFAULT}>Order Games by:</option>
                    <option value={EXTERNAL_API}>External API</option>
                    <option value={DATABASE_GAMES}>
                        Database Created Games
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Order
