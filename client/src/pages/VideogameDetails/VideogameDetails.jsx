import { React, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDetails,
  clearDetail,
  areYouSureFunction,
  closeModalAreYouSure,
  deleteGame,
  videogameDeleteFunction,
  clearHome,
} from '../../redux/actions';
import Button from '../../components/Button/Button';
import style from './VideogameDetails.module.css';
import Modal from '../../components/Modal/Modal';
import warning from '../../assets/warning.png';

const VideogameDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videogame = useSelector(state => state.videogameDetail);
  const areYouSureModal = useSelector(state => state.modal.areYouSure);

  useEffect(() => {
    dispatch(getDetails(id));

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      {areYouSureModal && (
        <Modal functionModal={closeModalAreYouSure}>
          <div className={style.areYouSureModal}>
            <h2>WARNING!</h2>
            <img src={warning} alt='warning' />
            <h3>Are you sure you want to delete this game?</h3>
            <div className={style.buttonsConfirmation}>
              <span className={style.yes}>
                <Button
                  content='Yes, Delete it 🗑️'
                  onClick={() => {
                    dispatch(deleteGame(id));
                    dispatch(closeModalAreYouSure());
                    dispatch(clearHome());
                    navigate('/home');
                    dispatch(videogameDeleteFunction());
                  }}
                />
              </span>
              <span>
                <Button
                  content='No, dont do it 😳'
                  onClick={() => {
                    dispatch(closeModalAreYouSure());
                  }}
                />
              </span>
            </div>
          </div>
        </Modal>
      )}
      {!Object.keys(videogame).length ? (
        <div className={style.loader}>
          <Loader />
        </div>
      ) : (
        <>
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
            <div className={style.infoContainer}>
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
            {id.length === 36 && (
              <div className={style.optionGames}>
                <span className={style.modifyButton}>
                  <Link to={`/update/${id}`} style={{ textDecoration: 'none' }}>
                    <Button content='Modify Game' />
                  </Link>
                </span>
                <span className={style.deleteButton}>
                  <Button
                    onClick={() => {
                      dispatch(areYouSureFunction());
                    }}
                    content='Delete Game'
                  />
                </span>
              </div>
            )}
            <div className={style.goHome}>
              <Link to='/home' style={{ textDecoration: 'none' }}>
                <Button content='🏠 Go Home' />
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideogameDetails;
