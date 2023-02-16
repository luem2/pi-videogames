import React from 'react'
import spinner from '../../assets/pacman.svg'
import style from './Loader.module.css'

const Loader = () => {
    return (
        <div className={style.container}>
            <img className={style.image} src={spinner} alt='gif-spinner' />
            <h2>Loading...</h2>
        </div>
    )
}

export default Loader
