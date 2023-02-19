import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import Searchbar from '../Searchbar/Searchbar'

import style from './Header.module.css'

const Header = (): JSX.Element => {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                <Link to='/'>
                    <img alt='logo-henry' className={style.image} src={logo} />
                </Link>
            </div>
            <Searchbar />
        </div>
    )
}

export default Header
