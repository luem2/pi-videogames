import React from 'react';
// import style from './Home.module.css';
import Videogames from '../../components/Videogames/Videogames';
import Header from '../../components/Header/Header';
import Pagination from '../../components/Pagination/Pagination';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Pagination />
      <Sidebar />
      <Videogames />
      <Footer />
    </div>
  );
};

export default Home;
