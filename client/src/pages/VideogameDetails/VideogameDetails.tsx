import type { IVideogame } from '../../types'
import type { AppDispatch, RootState } from '../../store'

import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../components/Loader/Loader'
import {
    clearDetails,
    deleteGameThunk,
    clearHome,
    getDetailsThunk,
} from '../../store/videogame.slice'
import { areYouSureModal, deletedGameModal } from '../../store/modal.slice'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import warning from '../../assets/warning.png'

import style from './VideogameDetails.module.css'

const VideogameDetails: React.FC = () => {
    const { id } = useParams()
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const videogame: IVideogame = useSelector(
        (state: RootState) => state.videogames.videogameDetails
    )
    const areYouSure = useSelector((state: RootState) => state.modal.areYouSure)

    useEffect(() => {
        dispatch(getDetailsThunk(id as string))

        return () => {
            dispatch(clearDetails())
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={style.container}>
            {Object.keys(videogame).length === 0 ? (
                <div className={style.loader}>
                    <Loader />
                </div>
            ) : (
                <>
                    <div className={style.gameDetails}>
                        <h1>★ {videogame.name} ★</h1>
                    </div>
                    <img
                        alt={videogame.name}
                        className={style.image}
                        src={videogame.background_image}
                    />
                    <div className={style.infoContainer}>
                        <h3 className={style.title}>{videogame.name}</h3>
                        <div
                            className={`${style.infoContainer} ${style.infoContainerPlus}`}
                        >
                            <p>
                                Genres: {videogame.genres.map((g) => g + ' ')}
                            </p>

                            <p> Released: {videogame.released?.valueOf()}</p>
                            <p>
                                Platforms:
                                {videogame.platforms.map((p) => p + ' ')}
                            </p>
                            <p>Rating: {videogame.rating}★</p>
                        </div>

                        <div className={style.text}>
                            <h3>Sinopsis</h3>
                            {videogame.description?.replace(/<[^>]*>/g, '')}
                        </div>
                        {id !== undefined && id.length === 36 && (
                            <div className={style.optionGames}>
                                <span className={style.modifyButton}>
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        to={`/update/${id}`}
                                    >
                                        <Button
                                            content='Modify Game'
                                            type='button'
                                        />
                                    </Link>
                                </span>
                                <span className={style.deleteButton}>
                                    <Button
                                        content='Delete Game'
                                        type='button'
                                        onClick={() => {
                                            dispatch(areYouSureModal(true))
                                        }}
                                    />
                                </span>
                            </div>
                        )}
                        <div className={style.goHome}>
                            <Link style={{ textDecoration: 'none' }} to='/home'>
                                <Button content='🏠 Go Home' type='button' />
                            </Link>
                        </div>
                    </div>
                </>
            )}
            {areYouSure && (
                <Modal functionModal={() => areYouSureModal(false)}>
                    <div className={style.areYouSureModal}>
                        <h2>WARNING!</h2>
                        <img alt='warning' src={warning} />
                        <h3>Are you sure you want to delete this game?</h3>
                        <div className={style.buttonsConfirmation}>
                            <span className={style.yes}>
                                <Button
                                    content='Yes, Delete it 🗑️'
                                    type='button'
                                    onClick={() => {
                                        dispatch(deleteGameThunk(id))
                                        dispatch(areYouSureModal(false))
                                        dispatch(clearHome())
                                        navigate('/home')
                                        dispatch(deletedGameModal(true))
                                    }}
                                />
                            </span>
                            <span>
                                <Button
                                    content='No, dont do it 😳'
                                    type='button'
                                    onClick={() => {
                                        dispatch(areYouSureModal(false))
                                    }}
                                />
                            </span>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default VideogameDetails
