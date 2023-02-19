import type { IVideogame } from 'src/types'

import { Link } from 'react-router-dom'

import style from './Videogame.module.css'

const Videogame = ({
    id,
    name,
    background_image,
    rating,
    genres,
}: IVideogame): JSX.Element => {
    const idNumber = id as number

    return (
        <div className={style.container}>
            <Link
                style={{ textDecoration: 'none' }}
                to={`/details/${idNumber}`}
            >
                <img
                    alt={name}
                    className={style.images}
                    src={background_image}
                />
                <h3 className={style.h3}>
                    {name.length > 26
                        ? name.substring(0, 26).concat('...')
                        : name}
                </h3>
                <div className={style.genresContainer}>
                    <p className={style.genres}>
                        {genres?.toString().length > 35
                            ? genres?.toString().substring(0, 35).concat('...')
                            : genres}
                    </p>
                </div>

                <div className={style.ratingContainer}>
                    <p
                        className={style.rating}
                        style={(() => {
                            if (rating > 4) {
                                return {
                                    color: 'green',
                                    border: '3px solid green',
                                }
                            } else if (rating < 3) {
                                return {
                                    color: 'red',
                                    border: '3px solid red',
                                }
                            } else {
                                return {
                                    color: 'yellow',
                                    border: '3px solid yellow',
                                }
                            }
                        })()}
                    >
                        {rating}★
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Videogame
