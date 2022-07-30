import React from 'react';
import videoBg from '../../assets/bg.mkv';
import logo from '../../assets/logo.png';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import github from '../../assets/GitHub.png';
import logoAlternative from '../../assets/logo2.png';

const Landing = () => {
  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={videoBg} autoPlay muted loop />
      <div className={style.content}>
        <img src={logo} alt='logo-hernygames' />
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
    </div>
  );
};

export default Landing;
