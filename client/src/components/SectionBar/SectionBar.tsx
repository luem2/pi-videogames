import React from 'react';
import Order from './Order';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearFilters } from '../../redux/actions';
import style from './SectionBar.module.css';
import reset from '../../assets/resetButton3.png';
import create from '../../assets/mando3.png';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleReset = e => {
    e.preventDefault();
    dispatch(clearFilters());
  };

  return (
    <div className={style.container}>
      <div className={style.mainButtons}>
        <Link to='/create' style={{ textDecoration: 'none' }}>
          <Button image={create} content='Create game!' />
        </Link>
        <div onClick={handleReset}>
          <Button image={reset} content='Reset filters' />
        </div>
      </div>
      <div className={style.order}>
        <Order />
      </div>
    </div>
  );
};

export default Sidebar;
