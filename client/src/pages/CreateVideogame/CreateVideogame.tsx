import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
    videogameCreatedFunction,
    closeModalVideogameCreated,
    createVideogame,
    getGenres,
    getAllVideogames,
    videogameAlreadyExists,
    closeModalVideogameAlreadyExists,
    clearHome,
} from '../../redux/actions'
import { platforms } from '../../utility/platforms'
import style from './CreateVideogame.module.css'
import rana from '../../assets/rana.png'
import leon from '../../assets/leon.png'
import Button from '../../components/Button/Button'
import ButtonDisabled from '../../components/ButtonDisabled/ButtonDisabled'
import Modal from '../../components/Modal/Modal'
import marioFeliz from '../../assets/mariofeliz.png'
import marioFace from '../../assets/marioFace.png'
import hongo from '../../assets/hongo.png'

export const validate = (videogame) => {
    const errors = {}
    const year = Number(videogame.released?.split('-')[0])
    const month = Number(videogame.released?.split('-')[1])
    const day = Number(videogame.released?.split('-')[2])

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

const CreateVideogame = () => {
    const videogames = useSelector((state) => state.videogames)
    const genres = useSelector((state) => state.genres.data)
    const { gameCreated, videogameExists } = useSelector((state) => state.modal)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [videogame, setVideogame] = useState({
        name: '',
        description: '',
        background_image: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    })

    const [errors, setErrors] = useState({})

    const onInputChange = (e) => {
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

    const onSelectPlatformChange = (e) => {
        e.preventDefault()

        if (!videogame.platforms.includes(e.target.value)) {
            setVideogame({
                ...videogame,
                platforms: [...videogame.platforms, e.target.value],
            })
        } else {
            setVideogame({
                ...videogame,
            })
        }
    }

    const onSelectGenreChange = (e) => {
        e.preventDefault()

        if (!videogame.genres.includes(e.target.value)) {
            setVideogame({
                ...videogame,
                genres: [...videogame.genres, e.target.value],
            })
        } else {
            setVideogame({
                ...videogame,
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const videogameExists = videogames.filter(
            (g) => g.name.toLowerCase() === videogame.name.toLowerCase()
        )

        if (videogameExists.length) {
            return dispatch(videogameAlreadyExists())
        }

        dispatch(createVideogame(videogame))
        dispatch(clearHome())
        dispatch(videogameCreatedFunction())

        clearInputs()
    }

    const clearInputs = () => {
        setVideogame({
            name: '',
            description: '',
            background_image: '',
            released: '',
            rating: '',
            genres: [],
            platforms: [],
        })
    }

    useEffect(() => {
        if (!videogames.length) {
            dispatch(getAllVideogames())
        }

        if (!genres.length) {
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
            {gameCreated && (
                <Modal functionModal={closeModalVideogameCreated}>
                    <div className={style.modalContainer}>
                        <h2>Game created successfully! ✅</h2>
                    </div>
                    <div className={style.imageCreated}>
                        <img src={marioFeliz} alt='mario-feliz' />
                    </div>
                    <div className={style.buttonCreated}>
                        <Button
                            type='button'
                            content='🏠 Go Home'
                            onClick={() => {
                                dispatch(closeModalVideogameCreated())
                                navigate('/home')
                            }}
                        />
                    </div>
                </Modal>
            )}
            <div className={style.createVideogameSection}>
                <img src={rana} alt='rana-gaming' />
                <h1>Create Videogame!</h1>
                <img src={leon} alt='leon-gaming' />
            </div>
            <div className={style.button}>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <Button type='button' content='🏠 Go Home' />
                </Link>
            </div>
            <div className={style.containerForm}>
                <label>Name:</label>
                <div className={style.nameInput}>
                    <input
                        name='name'
                        className={errors.name && style.danger}
                        type='text'
                        onChange={onInputChange}
                        value={videogame.name}
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
                        value={videogame.description}
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
                        value={videogame.rating}
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
                        value={videogame.released}
                    />
                    {errors.released && <p>{errors.released}</p>}
                </div>

                <label>Plataformas:</label>
                <div className={style.platformsInput}>
                    <select
                        name='platforms'
                        multiple
                        onChange={onSelectPlatformChange}
                        required
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
                    {videogame.platforms?.map((p, i) => (
                        <div key={i}>
                            <span
                                key={i}
                                onClick={() => {
                                    setVideogame({
                                        ...videogame,
                                        ...videogame.platforms.splice(i, 1),
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
                        required
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
                    {videogame.genres?.map((p, i) => (
                        <div key={i}>
                            <span
                                key={i}
                                onClick={() => {
                                    setVideogame({
                                        ...videogame,
                                        ...videogame.genres.splice(i, 1),
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
                    value={videogame.background_image}
                    placeholder='Example: http://henry-game.com/image.png'
                />
                <div className={style.imagePreview}>
                    {videogame.background_image ? (
                        <img
                            src={videogame.background_image}
                            alt={`${videogame.name}-img`}
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
                                type='button'
                                content='There are mistakes ⚠️'
                            />
                        </div>
                    ) : (
                        <Button
                            type='submit'
                            image={marioFace}
                            content='Create Game!'
                        />
                    )}
                </div>
                <div className={style.clearInput}>
                    <Button
                        onClick={clearInputs}
                        content='📖 Clear Inputs'
                        type='button'
                    />
                </div>
            </div>
        </form>
    )
}

export default CreateVideogame
