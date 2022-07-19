import React, { useEffect } from 'react';
import videoBg from '../../assets/bg.mkv';
import logo from '../../assets/logo.png';
import style from './Landing.module.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';

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
        <Link to='home'>
          <Button content={'Get Started'} />
        </Link>
      </div>
    </div>
  );
};

export default Landing;
