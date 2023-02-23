import type { AppDispatch, RootState } from '../../store'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../../components/Header/Header'
import Pagination from '../../components/Pagination/Pagination'
import SectionBar from '../../components/SectionBar/SectionBar'
import Videogames from '../../components/Videogames/Videogames'
import {
    getAllVideogamesThunk,
    getGenresThunk,
    setCurrentPage,
} from '../../store/videogame.slice'
import {
    gameNotFoundModal,
    emptyInputModal,
    deletedGameModal,
    editGameModal,
} from '../../store/modal.slice'
import Modal from '../../components/Modal/Modal'
import Button from '../../components/Button/Button'
import marioBros from '../../assets/mariotriste.png'
import marioFace from '../../assets/marioFace.png'
import luigi from '../../assets/Luigi.webp'
import pinguino from '../../assets/pinguino.png'

import style from './Home.module.css'

const Home = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch()

    const { filteredVideogames, currentPage, genres } = useSelector(
        (state: RootState) => state.videogames
    )

    const { editGame, gameNotFound, emptyInput, deletedGame } = useSelector(
        (state: RootState) => state.modal
    )

    const [videogamesPerPage] = useState(15)
    const indexOfLastVideogame = currentPage * videogamesPerPage
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage
    const currentVideogames = filteredVideogames.slice(
        indexOfFirstVideogame,
        indexOfLastVideogame
    )

    const closeModalNotFoundFunction = (): void => {
        dispatch(gameNotFoundModal(false))
    }

    const paginate = (pageNumber: number): void => {
        dispatch(setCurrentPage(pageNumber))
    }

    useEffect(() => {
        if (!filteredVideogames.length) {
            dispatch(getAllVideogamesThunk())
        }
        if (!genres?.length) {
            dispatch(getGenresThunk())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            {emptyInput && (
                <Modal functionModal={() => emptyInputModal(false)}>
                    <div className={style.modalContainer}>
                        <h2>Enter a name please ⚠️</h2>
                    </div>
                    <div className={style.marioFace}>
                        <img alt='enter-game-name' src={marioFace} />
                    </div>
                    <div className={style.buttonEmpty}>
                        <Button
                            content='Return'
                            type='button'
                            onClick={() => {
                                dispatch(emptyInputModal(false))
                            }}
                        />
                    </div>
                </Modal>
            )}
            {gameNotFound && (
                <Modal functionModal={() => gameNotFoundModal(false)}>
                    <div className={style.modalContainer}>
                        <h2>Error 404 ❌</h2>
                    </div>
                    <div className={style.image}>
                        <img alt='mario-bros-crying' src={marioBros} />
                    </div>
                    <div className={style.modalContainerP}>
                        <p>Game not Found 😭</p>
                    </div>
                    <div className={style.button}>
                        <Button
                            content='Return'
                            type='button'
                            onClick={closeModalNotFoundFunction}
                        />
                    </div>
                </Modal>
            )}
            {deletedGame && (
                <Modal functionModal={() => deletedGameModal(false)}>
                    <div className={style.gameDeletedModal}>
                        <h2>Game deleted successfully!✅</h2>
                        <img alt={`${luigi}-img`} src={luigi} />
                        <Button
                            content='Ok👌'
                            type='button'
                            onClick={() => {
                                dispatch(deletedGameModal(false))
                            }}
                        />
                    </div>
                </Modal>
            )}
            {editGame && (
                <Modal functionModal={() => editGameModal(false)}>
                    <div className={style.editedSuccessfully}>
                        <h2>Game Edited Successfully! ✅</h2>
                        <img alt='pinguino-png' src={pinguino} />
                        <Button
                            content='Ok 😄'
                            type='button'
                            onClick={() => {
                                dispatch(editGameModal(false))
                            }}
                        />
                    </div>
                </Modal>
            )}
            <Header />
            <SectionBar />
            <Pagination
                allVideogames={filteredVideogames}
                currentPage={currentPage}
                paginate={paginate}
                videogamesPerPage={videogamesPerPage}
            />
            <Videogames currentVideogames={currentVideogames} />
        </div>
    )
}

export default Home
