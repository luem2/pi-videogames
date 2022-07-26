import { useEffect } from 'react';
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearFilteredVideogames, searchVideogames } from '../../redux/actions';
import style from './Searchbar.module.css';

const Searchbar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    if (!search.length) {
      alert('Enter a name please');
    } else {
      dispatch(clearFilteredVideogames());
      dispatch(searchVideogames(search));
    }
    setSearch('');
  };

  useEffect(() => {});
  const onInputChange = e => {
    setSearch(e.target.value);
  };

  return (
    <div className={style.container}>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className={style.search}
            type='text'
            onChange={onInputChange}
            value={search}
            placeholder='Search game                                                         🔍'
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
