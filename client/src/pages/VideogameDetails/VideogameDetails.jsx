import { Fragment, React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { clearDetail, getDetails } from '../../redux/actions';
import Button from '../../components/Button/Button';
import style from './VideogameDetails.module.css';

const VideogameDetails = () => {
  const { id } = useParams();
  const videogame = useSelector(state => state.videogameDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      {Object.keys(videogame).length ? (
        <Fragment>
          <div className={style.gameDetails}>
            <h1>★ {videogame.name} ★</h1>
          </div>
          <img
            className={style.image}
            src={videogame.background_image}
            alt={videogame.name}
          />
          <div className={style.infoContainer}>
            <h3 className={style.title}>{videogame.name}</h3>

            <p>
              Genres:{' '}
              {videogame.id.length !== 36
                ? videogame.genres?.map(g => g + ' ')
                : videogame.Genres?.map(o => o.name + ' ')}
            </p>

            <p>Released: {videogame.released}</p>
            <p>
              Platforms:{' '}
              {videogame.id.length === 36
                ? videogame.platforms?.map(p => p + ' ')
                : videogame.platforms?.map(p => p.name) + ''}
            </p>
            <p>Rating: {videogame.rating}★</p>
          </div>

          <div className={style.text}>
            <h3>Sinopsis</h3>
            {videogame.description?.replace(/<[^>]*>/g, '')}
          </div>
          <div className={style.goHome}>
            <Link to='/home' style={{ textDecoration: 'none' }}>
              <Button content='🏠 Go Home' />
            </Link>
          </div>
        </Fragment>
      ) : (
        <div className={style.loader}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default VideogameDetails;
