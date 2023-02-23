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
    return (
        <div className={style.container}>
            <Link style={{ textDecoration: 'none' }} to={`/details/${id}`}>
                <img
                    alt={name}
                    className={style.images}
                    src={background_image}
                />
                <h3 className={style.h3}>
                    {name && name.length > 26
                        ? name.substring(0, 26).concat('...')
                        : name}
                </h3>
                <div className={style.genresContainer}>
                    <p className={style.genres}>{genres as React.ReactNode}</p>
                </div>

                <div className={style.ratingContainer}>
                    <p
                        className={style.rating}
                        style={(() => {
                            if (rating && rating > 4) {
                                return {
                                    color: 'green',
                                    border: '3px solid green',
                                }
                            } else if (rating && rating < 3) {
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
