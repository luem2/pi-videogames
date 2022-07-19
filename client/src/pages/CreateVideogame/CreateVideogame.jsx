import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createVideogame, getGenres } from '../../redux/actions';
import { platforms } from '../../utility/platforms';
import style from './CreateVideogame.module.css';
import { img1, img2 } from './utils';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

const validate = videogame => {
  const errors = {};

  if (!videogame.name) {
    errors.name = 'Enter a name';
  }

  if (!videogame.description) {
    errors.description = 'Enter a description';
  }

  if (Number(videogame.rating) < 1 || Number(videogame.rating) > 5) {
    errors.rating = 'Enter a score from 1 to 5';
  }

  if (videogame.platforms.length === 0) {
    errors.platforms = 'Select at least 1 platform';
  }
  if (videogame.genres.length === 0) {
    errors.genres = 'Select at least 1 genre';
  }

  return errors;
};

const CreateVideogame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres.data);

  const [videogame, setVideogame] = useState({
    name: '',
    description: '',
    background_image: '',
    released: '',
    rating: '',
    genres: [],
    platforms: [],
  });

  const [errors, setErrors] = useState({});

  const onInputChange = e => {
    e.preventDefault();
    setVideogame({
      ...videogame,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...videogame,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSelectPlatformChange = e => {
    e.preventDefault();

    setVideogame({
      ...videogame,
      platforms: [...videogame.platforms, e.target.value],
    });
  };

  const onSelectGenreChange = e => {
    e.preventDefault();
    setVideogame({
      ...videogame,
      genres: [...videogame.genres, e.target.value],
    });
  };

  const regexRating = /[+-]?([0-9]*[.])?\b[0-5]{1,1}\b/; //regex 1-5 decimal inclusive
  const expReg = /^\b[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s0-9]+$/;

  const onSubmit = e => {
    e.preventDefault();
    if (!videogame.name) {
      return alert('Enter a game name');
    } else if (!videogame.description) {
      return alert('Enter a game description');
    } else if (!expReg.test(videogame.name)) {
      return alert('The name must only have letters or numbers');
    } else if (!videogame.released) {
      return alert('Enter a released date');
    } else if (!regexRating.test(videogame.rating)) {
      return alert('Enter a rating from 0 to 5');
    } else if (!videogame.genres.length) {
      return alert('Enter at least 1 genre ');
    } else if (!videogame.platforms.length) {
      return alert('Enter at least 1 platform');
    }

    dispatch(createVideogame(videogame));
    alert('Videogame created Successfully!');
    setVideogame({
      name: '',
      description: '',
      background_image: '',
      released: '2017-06-01',
      rating: '',
      genres: [],
      platforms: [],
    });
    navigate('/home');
  };

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <div className={style.createVideogameSection}>
        <img src={img1} alt='rana-gaming' />
        <h1>Create Videogame!</h1>
        <img src={img2} alt='rana-gaming' />
      </div>
      <div className={style.containerForm}>
        <div className={style.button}>
          <Link to='/home'>
            <Button content='Volver a Home' />
          </Link>
        </div>

        {/* Form Start */}

        <label>Name:</label>
        <div className={style.nameInput}>
          <input
            name='name'
            className={errors.name && style.danger}
            type='text'
            onChange={onInputChange}
            value={videogame.name}
            placeholder='Example: League of Henrys'
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <label>Description:</label>
        <div className={style.descriptionInput}>
          <input
            name='description'
            className={errors.description && style.danger}
            type='text'
            onChange={onInputChange}
            value={videogame.description}
            placeholder='Example: The best game of the world'
            required
          />
          {errors.description && <p>{errors.description}</p>}
        </div>

        <label>Release date:</label>
        <div>
          <input name='released' onChange={onInputChange} type='date' />
        </div>

        <label>Rating</label>
        <div className={style.ratingInput}>
          <input
            className={errors.rating && style.danger}
            name='rating'
            onChange={onInputChange}
            type='text'
            placeholder='Example: 5'
          />
          {errors.rating && <p>{errors.rating}</p>}
        </div>

        <label>Plataformas:</label>
        <div className={style.platformsInput}>
          <select
            className={errors.platforms && style.danger}
            multiple
            name='platforms'
            onChange={onSelectPlatformChange}
            required
          >
            {platforms.map((p, i) => (
              <option key={i + p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {errors.platforms && <p>{errors.platforms}</p>}
        </div>
        <textarea
          disabled
          name=''
          id=''
          cols='30'
          rows='10'
          value={videogame.platforms}
        ></textarea>

        <label>Genres</label>
        <div className={style.genresInput}>
          <select
            name='genres'
            onChange={onSelectGenreChange}
            className={errors.genres && style.danger}
          >
            {genres?.map(g => (
              <option key={g.id} value={g.name}>
                {g.name}
              </option>
            ))}
          </select>
          {errors.genres && <p>{errors.genres}</p>}
        </div>
        <textarea
          disabled
          name=''
          id=''
          cols='30'
          rows='10'
          value={videogame.genres}
        ></textarea>

        <label>Imagen:</label>
        <input
          name='background_image'
          type='text'
          onChange={onInputChange}
          className={style.image}
          value={videogame.background_image}
          placeholder='Example: http://henry-game.net'
        />
      </div>
      <div className={style.button}>
        <Button content='Create Videogame' type='submit' />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </form>
  );
};

export default CreateVideogame;
