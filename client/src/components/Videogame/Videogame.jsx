import React from 'react';
import { Link } from 'react-router-dom';
import style from './Videogame.module.css';

const Videogame = ({ id, name, image, rating, genres }) => {
  return (
    <div className={style.container}>
      <Link to={`/details/${id}`}>
        <img className={style.images} src={image} alt={name} />
        <h3 className={style.h3}>{name}</h3>
        <p className={style.p}>{rating}★</p>
        <p className={style.p}>{genres}</p>
      </Link>
    </div>
  );
};

export default Videogame;
