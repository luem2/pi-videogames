import type { IGenre, IVideogame } from '../../types'

import Videogame from '../Videogame/Videogame'
import Loader from '../Loader/Loader'

import style from './Videogames.module.css'

interface Props {
    currentVideogames: IVideogame[]
}

const Videogames = ({ currentVideogames }: Props): JSX.Element => {
    return (
        <>
            {currentVideogames.length ? (
                <div className={style.container}>
                    {currentVideogames.map((g) => (
                        <Videogame
                            key={g.id}
                            background_image={g.background_image}
                            genres={(g.genres + '') as unknown as IGenre[]}
                            id={g.id}
                            name={g.name}
                            platforms={['']}
                            rating={g.rating}
                            released=''
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    )
}

export default Videogames
