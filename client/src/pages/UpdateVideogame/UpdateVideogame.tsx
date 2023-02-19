import type { AppDispatch, RootState } from 'src/store'
import type { IErrors, IVideogame } from 'src/types'

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
    updateVideogameThunk,
    clearHome,
    getGenresThunk,
    getAllVideogamesThunk,
} from '../../store/videogame.slice'
import { editGameModal, videogameExistsModal } from '../../store/modal.slice'
import { validate } from '../CreateVideogame/CreateVideogame'
import Button from '../../components/Button/Button'
import ButtonDisabled from '../../components/ButtonDisabled/ButtonDisabled'
import Modal from '../../components/Modal/Modal'
import { platforms } from '../../utility/platforms'
import hongo from '../../assets/hongo.png'
import marioFace from '../../assets/marioFace.png'
import unicornio from '../../assets/unicornio.png'
import panda from '../../assets/panda.png'
import pinguino from '../../assets/pinguino.png'

import style from './UpdateVideogame.module.css'

const UpdateVideogame = (): JSX.Element => {
    const { id } = useParams()
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const videogameState = useSelector((state: RootState) => state.videogames)
    const genres = useSelector((state: RootState) => state.videogames.genres)
    const videogameExists = useSelector(
        (state: RootState) => state.modal.videogameExists
    )
    const videogame = videogameState.videogames?.find((g) => g.id === id)

    const [gameNotChangedModal, setGameNotChangedModal] = useState(false)
    const platformsVideogameMatched = videogame?.platforms?.map((p) => p)
    const genresVideogameMatched = videogame?.genres?.map((g) => g)

    const [input, setInput] = useState<IVideogame>({
        name: videogame?.name,
        description: videogame?.description,
        background_image: videogame?.background_image,
        released: videogame?.released,
        rating: videogame?.rating,
        genres: genresVideogameMatched ?? [],
        platforms: platformsVideogameMatched ?? [],
    })

    const [errors, setErrors] = useState<IErrors>({})

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }

    const onSelectPlatformChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        e.preventDefault()

        if (!input.platforms.includes(e.target.value)) {
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value],
            })
        } else {
            setInput({
                ...input,
            })
        }
    }

    const onSelectGenreChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        e.preventDefault()

        if (!input.genres.includes(e.target.value)) {
            setInput({
                ...input,
                genres: [...input.genres, e.target.value],
            })
        } else {
            setInput({
                ...input,
            })
        }
    }

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        const videogame = videogameState.videogames.find((g) => g.id === id)

        const videogameGenres = videogame?.genres?.map((g) => g)
        const videogamePlatforms = videogame?.platforms

        const areSameGenres =
            videogameGenres?.length === input.genres?.length &&
            videogameGenres.every((e, i) => e === input.genres[i])

        const areSamePlatforms =
            videogamePlatforms?.length === input.platforms?.length &&
            videogamePlatforms?.every((e, i) => e === input.platforms[i])

        if (
            videogame?.name === input.name &&
            videogame?.description === input.description &&
            videogame?.background_image === input.background_image &&
            videogame?.released === input.released &&
            videogame?.rating === input.rating &&
            areSameGenres &&
            areSamePlatforms
        ) {
            setGameNotChangedModal(true)

            return
        }

        let videogameExists = videogameState.videogames.filter(
            (g) => g.name?.toLowerCase() === input.name?.toLowerCase()
        )

        if (videogameExists[0]?.name === videogame?.name) videogameExists = []

        if (videogameExists.length) {
            dispatch(videogameExistsModal(true))

            return
        }

        const idString = id as string

        dispatch(updateVideogameThunk(idString, input))
        dispatch(clearHome())
        navigate('/home')
        dispatch(editGameModal(true))
    }

    useEffect(() => {
        if (!videogameState.videogames.length) {
            dispatch(getAllVideogamesThunk())
        }
        if (!genres?.length) {
            dispatch(getGenresThunk())
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <form className={style.form} onSubmit={onSubmit}>
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
            {gameNotChangedModal && (
                <Modal
                    syncFunction={() => {
                        setGameNotChangedModal(false)
                    }}
                >
                    <div className={style.gameNotChanged}>
                        <h2>The game has not changed</h2>
                        <img alt='pinguino-gamer' src={pinguino} />
                        <h3>Please, change what you want</h3>
                        <Button
                            content='Ok 😳'
                            type='button'
                            onClick={() => {
                                setGameNotChangedModal(false)
                            }}
                        />
                    </div>
                </Modal>
            )}
            <div className={style.updateVideogameSection}>
                <img alt='unicornio-gaming' src={unicornio} />
                <h1>Update Videogame</h1>
                <img alt='panda-gaming' src={panda} />
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
                        value={input.name}
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
                        value={input.description}
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
                        value={input.rating}
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
                        value={input.released?.toString()}
                        onChange={onInputChange}
                    />
                    {errors.released && <p>{errors.released}</p>}
                </div>

                <label>Plataformas:</label>
                <div className={style.platformsInput}>
                    <select
                        multiple
                        name='platforms'
                        onChange={onSelectPlatformChange}
                    >
                        {platforms.map((p, i) => (
                            <option key={i} value={p}>
                                {p}
                            </option>
                        ))}
                    </select>
                    {errors.platforms && <p>{errors.platforms}</p>}
                </div>
                <div className={style.platformsContainer}>
                    {input.platforms?.map((platform, i) => (
                        <div key={i}>
                            <span
                                key={i}
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        ...input.platforms.splice(i, 1),
                                    })
                                }}
                            >
                                {platform}
                            </span>
                        </div>
                    ))}
                </div>
                <label>Genres</label>
                <div className={style.genresInput}>
                    <select
                        multiple
                        name='genres'
                        onChange={onSelectGenreChange}
                    >
                        {genres?.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    {errors.genres && <p>{errors.genres}</p>}
                </div>
                <div className={style.genresContainer}>
                    {input.genres?.map((p, i) => (
                        <div key={i}>
                            <span
                                key={i}
                                onClick={() => {
                                    setInput({
                                        ...input,
                                        ...input.genres.splice(i, 1),
                                    })
                                }}
                            >
                                {p}
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
                    value={input.background_image}
                    onChange={onInputChange}
                />
                <div className={style.imagePreview}>
                    {input.background_image ? (
                        <img alt={input.name} src={input.background_image} />
                    ) : (
                        <p>Image Preview</p>
                    )}
                </div>
            </div>
            <div className={style.containerButtons}>
                <div className={style.goBack}>
                    <Button
                        content='🔙 Go back'
                        type='button'
                        onClick={() => {
                            navigate(-1)
                        }}
                    />
                </div>
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
                            content='Update Game!'
                            image={marioFace}
                            type='submit'
                        />
                    )}
                </div>
            </div>
        </form>
    )
}

export default UpdateVideogame
