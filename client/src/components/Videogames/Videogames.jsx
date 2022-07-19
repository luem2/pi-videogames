import React from 'react';
import Videogame from '../Videogame/Videogame';
import Loader from '../Loader/Loader';
import style from './Videogames.module.css';
const Videogames = ({ currentVideogames }) => {
  return (
    <div className={style.container}>
      {currentVideogames.length ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default Videogames;
