import React from 'react';
import style from './NotFound.module.css';
import notfound from '../../assets/404notfound.png';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className={style.container}>
      <img src={notfound} alt='not found' />
      <div className={style.button}>
        <Link to='home'>
          <Button content='Back to Home' />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
