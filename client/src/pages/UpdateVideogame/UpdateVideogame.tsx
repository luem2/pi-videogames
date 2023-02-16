import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    videogameUpdateFunction,
    videogameAlreadyExists,
    closeModalVideogameAlreadyExists,
    getGenres,
    clearHome,
    getAllVideogames,
    updateVideogame,
} from '../../redux/actions'
import { validate } from '../CreateVideogame/CreateVideogame'
import Button from '../../components/Button/Button'
import ButtonDisabled from '../../components/ButtonDisabled/ButtonDisabled'
import Modal from '../../components/Modal/Modal'
import { platforms } from '../../utility/platforms'
import style from './UpdateVideogame.module.css'
import hongo from '../../assets/hongo.png'
import marioFace from '../../assets/marioFace.png'
import unicornio from '../../assets/unicornio.png'
import panda from '../../assets/panda.png'
import pinguino from '../../assets/pinguino.png'

const UpdateVideogame = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const videogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres.data)
    const videogameExists = useSelector((state) => state.modal.videogameExists)
    const videogame = videogames?.find((g) => g.id === id)

    const [gameNotChangedModal, setGameNotChangedModal] = useState(false)
    const platformsVideogameMatched = videogame?.platforms?.map((p) => p)
    const genresVideogameMatched = videogame?.Genres?.map((g) => g.name)

    const [input, setInput] = useState({
        name: videogame?.name,
        description: videogame?.description,
        background_image: videogame?.background_image,
        released: videogame?.released,
        rating: videogame?.rating,
        genres: genresVideogameMatched || [],
        platforms: platformsVideogameMatched || [],
    })

    const [errors, setErrors] = useState({})

    const onInputChange = (e) => {
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

    const onSelectPlatformChange = (e) => {
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

    const onSelectGenreChange = (e) => {
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

    const onSubmit = (e) => {
        e.preventDefault()
        const videogame = videogames.find((g) => g.id === id)

        const videogameGenres = videogame.Genres?.map((g) => g.name)
        const videogamePlatforms = videogame.platforms

        const areSameGenres =
            videogameGenres?.length === input.genres?.length &&
            videogameGenres.every((e, i) => e === input.genres[i])

        const areSamePlatforms =
            videogamePlatforms?.length === input.platforms?.length &&
            videogamePlatforms.every((e, i) => e === input.platforms[i])

        if (
            videogame.name === input.name &&
            videogame.description === input.description &&
            videogame.background_image === input.background_image &&
            videogame.released === input.released &&
            videogame.rating === input.rating &&
            areSameGenres &&
            areSamePlatforms
        ) {
            setGameNotChangedModal(true)
            return
        }

        let videogameExists = videogames.filter(
            (g) => g.name.toLowerCase() === input.name.toLowerCase()
        )

        if (videogameExists[0]?.name === videogame?.name) videogameExists = []

        if (videogameExists.length) {
            return dispatch(videogameAlreadyExists())
        }

        dispatch(updateVideogame(id, input))
        dispatch(clearHome())
        navigate('/home')
        dispatch(videogameUpdateFunction())
    }

    useEffect(() => {
        if (!videogames.length) {
            dispatch(getAllVideogames())
        }
        if (!genres?.length) {
            dispatch(getGenres())
        } // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <form className={style.form} onSubmit={onSubmit}>
            {videogameExists && (
                <Modal functionModal={closeModalVideogameAlreadyExists}>
                    <div className={style.gameAlreadyExists}>
                        <h2>The game already Exists!⚠️</h2>
                        <img src={hongo} alt='already-exists-img' />
                        <h3>Please, Choose another name</h3>
                        <Button
                            content='Ok 😳'
                            onClick={() => {
                                dispatch(closeModalVideogameAlreadyExists())
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
                        <img src={pinguino} alt='pinguino-gamer' />
                        <h3>Please, change what you want</h3>
                        <Button
                            content='Ok 😳'
                            onClick={() => {
                                setGameNotChangedModal(false)
                            }}
                        />
                    </div>
                </Modal>
            )}
            <div className={style.updateVideogameSection}>
                <img src={unicornio} alt='unicornio-gaming' />
                <h1>Update Videogame</h1>
                <img src={panda} alt='panda-gaming' />
            </div>
            <div className={style.containerForm}>
                <label>Name:</label>
                <div className={style.nameInput}>
                    <input
                        name='name'
                        className={errors.name && style.danger}
                        type='text'
                        onChange={onInputChange}
                        value={input.name}
                        placeholder='Example: League of Henrys'
                        required
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <label>Description:</label>
                <div className={style.descriptionInput}>
                    <input
                        name='description'
                        className={errors.description && style.danger}
                        type='text'
                        onChange={onInputChange}
                        value={input.description}
                        placeholder='Example: The best game of the world'
                        required
                    />
                    {errors.description && <p>{errors.description}</p>}
                </div>

                <label>Rating</label>
                <div className={style.ratingInput}>
                    <input
                        className={errors.rating && style.danger}
                        name='rating'
                        onChange={onInputChange}
                        type='text'
                        placeholder='Example: 5'
                        value={input.rating}
                    />
                    {errors.rating && <p>{errors.rating}</p>}
                </div>

                <label>Release date:</label>
                <div className={style.releasedInput}>
                    <input
                        name='released'
                        onChange={onInputChange}
                        type='date'
                        className={errors.released && style.danger}
                        value={input.released}
                    />
                    {errors.released && <p>{errors.released}</p>}
                </div>

                <label>Plataformas:</label>
                <div className={style.platformsInput}>
                    <select
                        name='platforms'
                        multiple
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
                    {input.platforms?.map((p, i) => (
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
                                {p}
                            </span>
                        </div>
                    ))}
                </div>
                <label>Genres</label>
                <div className={style.genresInput}>
                    <select
                        name='genres'
                        multiple
                        onChange={onSelectGenreChange}
                    >
                        {genres?.map((g) => (
                            <option key={g.id} value={g.name}>
                                {g.name}
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
                    name='background_image'
                    type='text'
                    onChange={onInputChange}
                    className={style.image}
                    value={input.background_image}
                    placeholder='Example: http://henry-game.com/image.png'
                />
                <div className={style.imagePreview}>
                    {input.background_image ? (
                        <img
                            src={input.background_image}
                            alt={`${input.name}-img`}
                        />
                    ) : (
                        <p>Image Preview</p>
                    )}
                </div>
            </div>
            <div className={style.containerButtons}>
                <div className={style.goBack}>
                    <Button
                        type='button'
                        content='🔙 Go back'
                        onClick={() => {
                            navigate(-1)
                        }}
                    />
                </div>
                <div className={style.submitButton}>
                    {Object.keys(errors).length > 0 ? (
                        <div>
                            <ButtonDisabled
                                type='button'
                                content='There are mistakes ⚠️'
                            />
                        </div>
                    ) : (
                        <Button
                            type='submit'
                            image={marioFace}
                            content='Update Game!'
                        />
                    )}
                </div>
            </div>
        </form>
    )
}

export default UpdateVideogame
