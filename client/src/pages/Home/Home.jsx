import React, { useState, useEffect } from 'react';
import Videogames from '../../components/Videogames/Videogames';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import SectionBar from '../../components/SectionBar/SectionBar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModalNotFound,
  closeModalEmptyInput,
  getAllVideogames,
  getGenres,
  clearHome,
} from '../../redux/actions';
import style from './Home.module.css';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import marioBros from '../../assets/mariotriste.png';
import marioFace from '../../assets/marioFace.png';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.filteredVideogames);
  const modal = useSelector(state => state.modal);
  const gameNotFound = modal.gameNotFound;
  const emptyInput = modal.emptyInput;
  /* Paginate */
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const closeModalNotFoundFunction = () => {
    dispatch(closeModalNotFound());
  };

  const closeModalEmptyInputFunction = () => {
    dispatch(closeModalEmptyInput());
  };

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAllVideogames());
    return () => {
      dispatch(clearHome());
    };
  }, [dispatch]);

  return (
    <div className={style.homeContainer}>
      {emptyInput ? (
        <Modal functionModal={closeModalEmptyInput}>
          <div className={style.modalContainer}>
            <h2>Enter a name please ⚠️</h2>
          </div>
          <div className={style.marioFace}>
            <img src={marioFace} alt='enter-game-name' />
          </div>
          <div className={style.buttonEmpty}>
            <Button content='Return' onClick={closeModalEmptyInputFunction} />
          </div>
        </Modal>
      ) : null}
      {gameNotFound ? (
        <Modal functionModal={closeModalNotFound}>
          <div className={style.modalContainer}>
            <h2>Error 404 ❌</h2>
          </div>
          <div className={style.image}>
            <img src={marioBros} alt='mario-bros-crying' />
          </div>
          <div className={style.modalContainerP}>
            <p>Game not Found 😭</p>
          </div>
          <div className={style.button}>
            <Button content='Return' onClick={closeModalNotFoundFunction} />
          </div>
        </Modal>
      ) : null}
      <Header />
      <SectionBar />
      <Pagination
        videogamesPerPage={videogamesPerPage}
        allVideogames={allVideogames.length}
        paginate={paginate}
      />
      <Videogames currentVideogames={currentVideogames} />
      <div className={style.container}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
