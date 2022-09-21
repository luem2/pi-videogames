import React from 'react';
import videoBg from '../../assets/bg.mp4';
import logo from '../../assets/logo.png';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import github from '../../assets/GitHub.png';
import logoAlternative from '../../assets/logo2.png';
import logoLuem from '../../assets/CircleLogo.png';

const Landing = () => {
  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={videoBg} autoPlay muted loop />
      <div className={style.content}>
        <img src={logo} alt='logo-henrygames' />
        <h2>Welcome to Henry Games!</h2>
        <div className={style.buttonContainer}>
          <span className={style.home}>
            <Link to='home' style={{ textDecoration: 'none' }}>
              <Button image={logoAlternative} content='Get Started' />
            </Link>
          </span>
          <span className={style.github}>
            <a
              href='https://github.com/Luem2/pi-videogames'
              rel='noopener noreferrer'
              target='_blank'
              style={{ textDecoration: 'none' }}
            >
              <Button image={github} content='Repository' />
            </a>
          </span>
        </div>
      </div>
      <span className={style.createdBy}>
        Created By:
        <a
          href='https://lucianopinol.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={logoLuem} alt='luem-logo' />
        </a>
      </span>
    </div>
  );
};

export default Landing;
