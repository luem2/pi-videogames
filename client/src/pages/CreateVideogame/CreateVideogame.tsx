import type {
    GenresName,
    IErrors,
    IVideogame,
    PlatformsName,
} from '../../types'
import type { AppDispatch, RootState } from 'src/store'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {
    createVideogameThunk,
    clearHome,
    getGenresThunk,
    getAllVideogamesThunk,
} from '../../store/videogame.slice'
import { gameCreatedModal, videogameExistsModal } from '../../store/modal.slice'
import { platforms } from '../../utility/platforms'
import rana from '../../assets/rana.png'
import leon from '../../assets/leon.png'
import Button from '../../components/Button/Button'
import ButtonDisabled from '../../components/ButtonDisabled/ButtonDisabled'
import Modal from '../../components/Modal/Modal'
import marioFeliz from '../../assets/mariofeliz.png'
import marioFace from '../../assets/marioFace.png'
import hongo from '../../assets/hongo.png'

import style from './CreateVideogame.module.css'

export const validate = (videogame: Omit<IVideogame, 'id'>): IErrors => {
    const errors: IErrors = {}

    const year = Number(videogame.released?.toString().split('-')[0])
    const month = Number(videogame.released?.toString().split('-')[1])
    const day = Number(videogame.released?.toString().split('-')[2])

    if (!videogame.name) {
        errors.name = 'Enter a name'
    }

    if (!videogame.description) {
        errors.description = 'Enter a description'
    }

    if (
        Number(videogame.rating) < 1 ||
        Number(videogame.rating) > 5 ||
        isNaN(Number(videogame.rating))
    ) {
        errors.rating = 'Enter a score from 1 to 5'
    }

    if (year > 2022 || !month || !day) {
        errors.released = 'Enter a correct date released'
    }

    return errors
}

const CreateVideogame = (): JSX.Element => {
    const videogameState = useSelector((state: RootState) => state.videogames)
    const genres = useSelector((state: RootState) => state.videogames.genres)
    const { gameCreated, videogameExists } = useSelector(
        (state: RootState) => state.modal
    )
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()

    const [videogame, setVideogame] = useState<Omit<IVideogame, 'id'>>({
        name: '',
        description: '',
        background_image: undefined,
        released: '',
        rating: 0,
        genres: [],
        platforms: [],
    })

    const [errors, setErrors] = useState<IErrors>({})

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setVideogame({
            ...videogame,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...videogame,
                [e.target.name]: e.target.value,
            })
        )
    }

    const onSelectPlatformChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        e.preventDefault()

        const target = e.target.value as PlatformsName

        if (!videogame.platforms?.includes(target)) {
            setVideogame({
                ...videogame,
                platforms: [...videogame.platforms, target],
            })
        } else {
            setVideogame({
                ...videogame,
            })
        }
    }

    const onSelectGenreChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        e.preventDefault()
        const genres = videogame.genres as GenresName[]
        const targetValue = e.target.value as GenresName

        if (!genres.includes(targetValue)) {
            setVideogame({
                ...videogame,
                genres: [...genres, targetValue],
            })
        } else {
            setVideogame({
                ...videogame,
            })
        }
    }

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()

        const videogameExists = videogameState.videogames.filter(
            (g) => g.name?.toLowerCase() === videogame.name?.toLowerCase()
        )

        if (videogameExists.length) {
            dispatch(videogameExistsModal(true))

            return
        }

        dispatch(createVideogameThunk(videogame))
        dispatch(clearHome())
        dispatch(gameCreatedModal(true))

        clearInputs()
    }

    const clearInputs = (): void => {
        setVideogame({
            name: '',
            description: '',
            background_image: undefined,
            released: '',
            rating: 0,
            genres: [],
            platforms: [],
        })
    }

    useEffect(() => {
        if (!videogameState.filteredVideogames.length) {
            dispatch(getAllVideogamesThunk())
        }

        if (!videogameState.genres.length) {
            dispatch(getGenresThunk())
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <div className={style.createVideogameSection}>
                <img alt='rana-gaming' src={rana} />
                <h1>Create Videogame!</h1>
                <img alt='leon-gaming' src={leon} />
            </div>
            <div className={style.button}>
                <Link style={{ textDecoration: 'none' }} to='/home'>
                    <Button content='🏠 Go Home' type='button' />
                </Link>
            </div>
            <div className={style.containerForm}>
                <label>Name:</label>
                <div className={style.nameInput}>
                    <input
                        required
                        className={errors.name && style.danger}
                        name='name'
                        placeholder='Example: League of Henrys'
                        type='text'
                        value={videogame.name}
                        onChange={onInputChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <label>Description:</label>
                <div className={style.descriptionInput}>
                    <input
                        required
                        className={errors.description && style.danger}
                        name='description'
                        placeholder='Example: The best game of the world'
                        type='text'
                        value={videogame.description}
                        onChange={onInputChange}
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>

                <label>Rating</label>
                <div className={style.ratingInput}>
                    <input
                        className={errors.rating && style.danger}
                        name='rating'
                        placeholder='Example: 5'
                        type='text'
                        value={videogame.rating}
                        onChange={onInputChange}
                    />
                    {errors.rating && <p>{errors.rating}</p>}
                </div>

                <label>Release date:</label>
                <div className={style.releasedInput}>
                    <input
                        className={errors.released && style.danger}
                        name='released'
                        type='date'
                        value={videogame?.released?.toString()}
                        onChange={onInputChange}
                    />
                    {errors.released && <p>{errors.released}</p>}
                </div>

                <label>Plataformas:</label>
                <div className={style.platformsInput}>
                    <select
                        multiple
                        required
                        name='platforms'
                        onChange={onSelectPlatformChange}
                    >
                        {platforms.map((p, i) => {
                            return (
                                <option key={`${p}-${i}`} value={p}>
                                    {p}
                                </option>
                            )
                        })}
                    </select>
                    {errors.platforms && <p>{errors.platforms}</p>}
                </div>
                <div className={style.platformsContainer}>
                    {videogame.platforms?.map((p, i) => {
                        return (
                            <div key={`${p}-${i}`}>
                                <span
                                    key={`${p}-${i}`}
                                    onClick={() => {
                                        setVideogame({
                                            ...videogame,
                                            ...videogame.platforms?.splice(
                                                i,
                                                1
                                            ),
                                        })
                                    }}
                                >
                                    {p}
                                </span>
                            </div>
                        )
                    })}
                </div>
                <label>Genres</label>
                <div className={style.genresInput}>
                    <select
                        multiple
                        required
                        name='genres'
                        onChange={onSelectGenreChange}
                    >
                        {genres?.map((genre, i) => {
                            return (
                                <option key={`${genre}-${i}`} value={genre}>
                                    {genre}
                                </option>
                            )
                        })}
                    </select>
                    {errors.genres && <p>{errors.genres}</p>}
                </div>
                <div className={style.genresContainer}>
                    {videogame.genres?.map((p, i) => (
                        <div key={`${p}-${i}`}>
                            <span
                                key={`${p}-${i}`}
                                onClick={() => {
                                    setVideogame({
                                        ...videogame,
                                        ...videogame.genres.splice(i, 1),
                                    })
                                }}
                            >
                                {p as React.ReactNode}
                            </span>
                        </div>
                    ))}
                </div>

                <label>Imagen:</label>
                <input
                    className={style.image}
                    name='background_image'
                    placeholder='Example: http://henry-game.com/image.png'
                    type='text'
                    value={videogame.background_image}
                    onChange={onInputChange}
                />
                <div className={style.imagePreview}>
                    {videogame.background_image ? (
                        <img
                            alt={videogame.name}
                            src={videogame.background_image}
                        />
                    ) : (
                        <p>Image Preview</p>
                    )}
                </div>
            </div>
            <div className={style.containerButtons}>
                <div className={style.submitButton}>
                    {Object.keys(errors).length > 0 ? (
                        <div>
                            <ButtonDisabled
                                content='There are mistakes ⚠️'
                                type='button'
                            />
                        </div>
                    ) : (
                        <Button
                            content='Create Game!'
                            image={marioFace}
                            type='submit'
                        />
                    )}
                </div>
                <div className={style.clearInput}>
                    <Button
                        content='📖 Clear Inputs'
                        type='button'
                        onClick={clearInputs}
                    />
                </div>
            </div>
            {videogameExists && (
                <Modal functionModal={() => videogameExistsModal(false)}>
                    <div className={style.gameAlreadyExists}>
                        <h2>The game already Exists!⚠️</h2>
                        <img alt='already-exists-img' src={hongo} />
                        <h3>Please, Choose another name</h3>
                        <Button
                            content='Ok 😳'
                            type='button'
                            onClick={() => {
                                dispatch(videogameExistsModal(false))
                            }}
                        />
                    </div>
                </Modal>
            )}
            {gameCreated && (
                <Modal functionModal={() => gameCreatedModal(false)}>
                    <div className={style.modalContainer}>
                        <h2>Game created successfully! ✅</h2>
                    </div>
                    <div className={style.imageCreated}>
                        <img alt='mario-feliz' src={marioFeliz} />
                    </div>
                    <div className={style.buttonCreated}>
                        <Button
                            content='🏠 Go Home'
                            type='button'
                            onClick={() => {
                                dispatch(gameCreatedModal(false))
                                navigate('/home')
                            }}
                        />
                    </div>
                </Modal>
            )}
        </form>
    )
}

export default CreateVideogame
