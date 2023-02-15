import React from 'react';
import Videogame from '../Videogame/Videogame';
import Loader from '../Loader/Loader';
import style from './Videogames.module.css';

const Videogames = ({ currentVideogames }) => {
  return (
    <>
      {currentVideogames.length ? (
        <div className={style.container}>
          {currentVideogames.map(g => (
            <Videogame
              key={g.id}
              id={g.id}
              name={g.name}
              image={g.background_image}
              genres={
                g.id.length !== 36
                  ? g.genres?.map(g => g + ' ')
                  : g.Genres?.map(o => o.name + ' ')
              }
              rating={g.rating}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Videogames;
