import spinner from '../../assets/pacman.svg'

import style from './Loader.module.css'

const Loader = (): JSX.Element => {
    return (
        <div className={style.container}>
            <img alt='gif-spinner' className={style.image} src={spinner} />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loader
