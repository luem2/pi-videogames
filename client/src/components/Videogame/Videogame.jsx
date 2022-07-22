import React from 'react';
import { Link } from 'react-router-dom';
import style from './Videogame.module.css';

const Videogame = ({ id, name, image, rating, genres }) => {
  return (
    <div className={style.container}>
      <Link to={`/details/${id}`} style={{ textDecoration: 'none' }}>
        <img className={style.images} src={image} alt={name} />
        <h3 className={style.h3}>
          {name.length > 30 ? name.substring(0, 30).concat('...') : name}
        </h3>
        <p className={style.p}>{rating}★</p>
        <p className={style.p}>
          {genres?.toString().length > 35
            ? genres?.toString().substring(0, 35).concat('...')
            : genres}
        </p>
      </Link>
    </div>
  );
};

export default Videogame;
