import React from 'react';
import style from './NotFound.module.css';
import notfound from '../../assets/404notfound.png';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={style.container}>
      <img src={notfound} alt='not found' />
      <Link to='home' style={{ textDecoration: 'none' }}>
        <Button content='🏠 Go Home' />
      </Link>
    </div>
  );
};

export default NotFound;
