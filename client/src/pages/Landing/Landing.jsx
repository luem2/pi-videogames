import React, { useEffect } from 'react';
import videoBg from '../../assets/bg.mkv';
import logo from '../../assets/logo.png';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import github from '../../assets/GitHub.png';
import logoAlternative from '../../assets/logo2.png';

const Landing = () => {
  const dispatch = useDispatch();
  const videogames = useSelector(state => state.videogames);

  useEffect(() => {
    dispatch(getAllVideogames(videogames));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={style.main}>
      <div className={style.overlay}></div>
      <video src={videoBg} autoPlay muted loop />
      <div className={style.content}>
        <img src={logo} alt='logo-hernygames' />
        <h1>Welcome to Henry Games!</h1>
        <div className={style.buttonContainer}>
          <span className={style.home}>
            <Link to='home'>
              <Button image={logoAlternative} content='Get Started' />
            </Link>
          </span>
          <span className={style.github}>
            <a
              href='https://github.com/Luem2/pi-videogames'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Button image={github} content='Github Repository' />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
