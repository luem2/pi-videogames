import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Button from '../Button/Button'
import {
    setSelectAlpha,
    setSelectGenre,
    setSelectRating,
    setSelectSource,
    clearFilters,
    setCurrentPage,
} from '../../store/videogame.slice'
import reset from '../../assets/resetButton3.png'
import create from '../../assets/mando3.png'
import { DEFAULT } from '../../utility'

import style from './SectionBar.module.css'
import Order from './Order'

const Sidebar = (): JSX.Element => {
    const dispatch = useDispatch()

    const handleReset = (e: React.FormEvent): void => {
        e.preventDefault()
        dispatch(clearFilters())
        // Clear all the filters
        dispatch(setSelectAlpha(DEFAULT))
        dispatch(setSelectGenre(DEFAULT))
        dispatch(setSelectRating(DEFAULT))
        dispatch(setSelectSource(DEFAULT))
        // --------------------
        dispatch(setCurrentPage(1))
    }

    return (
        <div className={style.container}>
            <div className={style.mainButtons}>
                <Link style={{ textDecoration: 'none' }} to='/create'>
                    <Button
                        content='Create game!'
                        image={create}
                        type='button'
                    />
                </Link>
                <div onClick={handleReset}>
                    <Button
                        content='Reset filters'
                        image={reset}
                        type='button'
                    />
                </div>
            </div>
            <div className={style.order}>
                <Order />
            </div>
        </div>
    )
}

export default Sidebar
