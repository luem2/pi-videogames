import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchVideogames } from '../../redux/actions';
import style from './Searchbar.module.css';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    if (!search.length) {
      alert('You must enter a name');
    } else {
      dispatch(searchVideogames(search));
    }
  };

  useEffect(() => {});
  const onInputChange = e => {
    setSearch(e.target.value);
  };

  //! Agregar un spinner cuando se busca algo
  return (
    <div className={style.container}>
      <form onSubmit={onSubmit}>
        <input
          className={style.search}
          type='text'
          onChange={onInputChange}
          value={search}
          placeholder='Search game...'
        />
        <input className={style.submit} type='submit' value='Search' />
      </form>
    </div>
  );
};

export default Searchbar;
