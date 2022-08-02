import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearFilteredVideogames,
  emptyInputFunction,
  searchVideogames,
} from '../../redux/actions';
import style from './Searchbar.module.css';
import searchIcon from '../../assets/search-icon-white.png';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (!search.length) {
      dispatch(emptyInputFunction());
    } else {
      dispatch(searchVideogames(search));
      dispatch(clearFilteredVideogames());
    }
    setSearch('');
  };

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <form className={style.formContainer} onSubmit={onSubmit}>
        <input
          type='text'
          onChange={onInputChange}
          value={search}
          placeholder='Search'
        />
        <button className={style.buttonSubmit} type='submit'>
          <img src={searchIcon} alt='search-icon' />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
