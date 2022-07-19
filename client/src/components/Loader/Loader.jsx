import React from 'react';
import gif from '../../assets/3dgifmaker07148.gif';
import style from './Loader.module.css';
const Loader = () => {
  return (
    <div className={style.container}>
      <img className={style.image} src={gif} alt='gif-spinner' />
      <h3>Loading...</h3>
    </div>
  );
};

export default Loader;
