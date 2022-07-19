import React from 'react';
import { useDispatch } from 'react-redux';
import {
  alphaSort,
  gamesSort,
  genresSort,
  ratingSort,
} from '../../redux/actions';
import {
  ASCENDENTE,
  DESCENDENTE,
  EXTERNAL_API,
  DATABASE_GAMES,
} from '../../utility';
import style from './Order.module.css';

const Order = () => {
  const dispatch = useDispatch();

  const orderByAlpha = e => {
    dispatch(alphaSort(e.target.value));
  };

  const orderByRating = e => {
    dispatch(ratingSort(e.target.value));
  };

  const orderByGenres = e => {
    dispatch(genresSort(e.target.value));
  };

  const orderByGames = e => {
    dispatch(gamesSort(e.target.value));
  };

  return (
    <div className={style.container}>
      <select className={style.order} name='select' onChange={orderByAlpha}>
        <option>Order alphabetically </option>
        <option value={ASCENDENTE}>Sort: A - Z</option>
        <option value={DESCENDENTE}>Sort: Z - A</option>
      </select>

      <select className={style.order} name='select' onChange={orderByRating}>
        <option>Order by Rating</option>
        <option value={DESCENDENTE}>High Rating</option>
        <option value={ASCENDENTE}>Low Rating</option>
      </select>

      <select className={style.order} name='select' onChange={orderByGenres}>
        <option>Order by Genre</option>
        <option value='Action'>Action</option>
        <option value='Indie'>Indie</option>
        <option value='Adventure'>Adventure</option>
        <option value='RPG'>RPG</option>
        <option value='Strategy'>Strategy</option>
        <option value='Shooter'>Shooter</option>
        <option value='Casual'>Casual</option>
        <option value='Simulation'>Simulation</option>
        <option value='Puzzle'>Puzzle</option>
        <option value='Arcade'>Arcade</option>
        <option value='Platformer'>Platformer</option>
        <option value='Racing'>Racing</option>
        <option value='Massively Multiplayer'>Massively Multiplayer</option>
        <option value='Sports'>Sports</option>
        <option value='Fighting'>Fighting</option>
        <option value='Family'>Family</option>
        <option value='Board Games'>Board Games</option>
        <option value='Educational'>Educational</option>
        <option value='Card'>Card</option>
      </select>

      <select className={style.order} name='select' onChange={orderByGames}>
        <option>Order Games by:</option>
        <option value={EXTERNAL_API}>External API</option>
        <option value={DATABASE_GAMES}>Database Created Games</option>
      </select>
    </div>
  );
};

export default Order;
