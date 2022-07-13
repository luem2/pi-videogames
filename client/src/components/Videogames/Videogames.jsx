import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import Videogame from '../Videogame/Videogame';

const Videogames = () => {
  const videogames = useSelector(state => state.videogames);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVideogames());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      {videogames?.map(g => (
        <Videogame
          key={g.id}
          name={g.name}
          image={g.background_image}
          genres={g.genres?.map(o => o.genre_name)}
          rating={g.rating}
        />
      ))}
    </div>
  );
};

export default Videogames;
