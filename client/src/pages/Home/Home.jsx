import React, { useState, useEffect } from 'react';
import Videogames from '../../components/Videogames/Videogames';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import SectionBar from '../../components/SectionBar/SectionBar';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames, getGenres } from '../../redux/actions';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const allVideogames = useSelector(state => state.filteredVideogames);
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;

  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;

  const currentVideogames = allVideogames.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getAllVideogames());
  }, [dispatch]);

  return (
    <div>
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
