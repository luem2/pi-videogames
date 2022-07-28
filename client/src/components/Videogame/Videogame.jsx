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
        <div className={style.genresContainer}>
          <p className={style.genres}>
            {genres?.toString().length > 35
              ? genres?.toString().substring(0, 35).concat('...')
              : genres}
          </p>
        </div>

        <div className={style.ratingContainer}>
          <p
            className={style.rating}
            style={(() => {
              if (rating > 4) {
                return {
                  color: 'green',
                  border: '3px solid green',
                };
              } else if (rating < 3) {
                return {
                  color: 'red',
                  border: '3px solid red',
                };
              } else {
                return {
                  color: 'yellow',
                  border: '3px solid yellow',
                };
              }
            })()}
          >
            {rating}★
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Videogame;
