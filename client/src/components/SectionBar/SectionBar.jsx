import React from 'react';
import Order from './Order';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllVideogames } from '../../redux/actions';
import style from './SectionBar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();
  const videogames = useSelector(state => state.filteredVideogames);

  const handleReset = e => {
    e.preventDefault();
    dispatch(getAllVideogames(videogames));
  };

  return (
    <div className={style.container}>
      <Link to='/create'>
        <Button content='Create Videogame' />
      </Link>
      <div onClick={handleReset}>
        <Button content='Reset Videogames' />
      </div>
      <Order />
    </div>
  );
};

export default Sidebar;
