import type { AppDispatch } from 'src/store'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
    clearFilteredVideogames,
    searchVideogamesThunk,
} from '../../store/videogame.slice'
import { emptyInputModal } from '../../store/modal.slice'
import searchIcon from '../../assets/search-icon-white.png'

import style from './Searchbar.module.css'

const Searchbar = (): JSX.Element => {
    const [search, setSearch] = useState<string>('')
    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        if (!search.length) {
            dispatch(emptyInputModal(true))
        } else {
            dispatch(searchVideogamesThunk(search))
            dispatch(clearFilteredVideogames())
        }
        setSearch('')
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value)
    }

    return (
        <div className={style.container}>
            <form className={style.formContainer} onSubmit={onSubmit}>
                <input
                    name='search'
                    placeholder='Search'
                    type='text'
                    value={search}
                    onChange={onInputChange}
                />
                <button className={style.buttonSubmit} type='submit'>
                    <img alt='search-icon' src={searchIcon} />
                </button>
            </form>
        </div>
    )
}

export default Searchbar
