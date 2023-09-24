import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import videoBg from '../../assets/bg.mp4'
import Button from '../../components/Button/Button'
import github from '../../assets/GitHub.png'
import logoAlternative from '../../assets/logo2.png'
import logoLuem from '../../assets/CircleLogo.png'

import style from './Landing.module.css'
import { PORTFOLIO_URL } from '../../utility'

const Landing = (): JSX.Element => {
    return (
        <div className={style.main}>
            <div className={style.overlay} />
            <video autoPlay loop muted src={videoBg} />
            <div className={style.content}>
                <img alt='logo-henrygames' src={logo} />
                <h2>Welcome to Henry Games!</h2>
                <div className={style.buttonContainer}>
                    <span className={style.home}>
                        <Link style={{ textDecoration: 'none' }} to='home'>
                            <Button
                                content='Get Started'
                                image={logoAlternative}
                                type='button'
                            />
                        </Link>
                    </span>
                    <span className={style.github}>
                        <a
                            href='https://github.com/Luem2/pi-videogames'
                            rel='noopener noreferrer'
                            style={{ textDecoration: 'none' }}
                            target='_blank'
                        >
                            <Button
                                content='Repository'
                                image={github}
                                type='button'
                            />
                        </a>
                    </span>
                </div>
            </div>
            <span className={style.createdBy}>
                Created By:
                <a
                    href={PORTFOLIO_URL}
                    rel='noopener noreferrer'
                    target='_blank'
                >
                    <img alt='luem-logo' src={logoLuem} />
                </a>
            </span>
        </div>
    )
}

export default Landing
