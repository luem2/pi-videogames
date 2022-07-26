import React from 'react';
import Order from './Order';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../redux/actions';
import style from './SectionBar.module.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleReset = e => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <div className={style.container}>
      <Link to='/create' style={{ textDecoration: 'none' }}>
        <Button content='🎮 Create Videogame' />
      </Link>
      <div className={style.botoncito} onClick={handleReset}>
        <Button content='👾 Reset Videogames' />
      </div>
      <div className={style.order}>
        <Order />
      </div>
    </div>
  );
};

export default Sidebar;
