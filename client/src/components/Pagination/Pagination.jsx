import React from 'react';
import Loader from '../Loader/Loader';
import style from './Pagination.module.css';

const Pagination = ({ videogamesPerPage, allVideogames, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.container}>
      <ul className={style.page}>
        {pageNumbers ? (
          pageNumbers.map(number => (
            <li className={style.number} key={number}>
              <button
                className={style.botoncito}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </button>
            </li>
          ))
        ) : (
          <Loader />
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
