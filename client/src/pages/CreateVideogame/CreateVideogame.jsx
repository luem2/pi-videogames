import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createVideogame, getGenres } from '../../redux/actions';
import { platforms } from '../../utility/platforms';
import style from './CreateVideogame.module.css';
import { img1, img2 } from './utils';
import Button from '../../components/Button/Button';
import ButtonDisabled from '../../components/ButtonDisabled/ButtonDisabled';

const validate = videogame => {
  const errors = {};
  const year = Number(videogame.released.split('-')[0]);
  const month = Number(videogame.released.split('-')[1]);
  const day = Number(videogame.released.split('-')[2]);

  if (!videogame.name) {
    errors.name = 'Enter a name';
  }

  if (!videogame.description) {
    errors.description = 'Enter a description';
  }

  if (
    Number(videogame.rating) < 1 ||
    Number(videogame.rating) > 5 ||
    isNaN(Number(videogame.rating))
  ) {
    errors.rating = 'Enter a score from 1 to 5';
  }

  if (year > 2022 || !month || !day) {
    errors.released = 'Enter a correct date released';
  }

  return errors;
};

const CreateVideogame = () => {
  const videogames = useSelector(state => state.videogames);
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

    if (!videogame.platforms.includes(e.target.value)) {
      setVideogame({
        ...videogame,
        platforms: [...videogame.platforms, e.target.value],
      });
    } else {
      setVideogame({
        ...videogame,
      });
    }
  };

  const onSelectGenreChange = e => {
    e.preventDefault();

    if (!videogame.genres.includes(e.target.value)) {
      setVideogame({
        ...videogame,
        genres: [...videogame.genres, e.target.value],
      });
    } else {
      setVideogame({
        ...videogame,
      });
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    const videogameExists = videogames.filter(
      g => g.name.toLowerCase() === videogame.name.toLowerCase()
    );

    if (videogameExists.length) {
      return alert('Error: The game exists');
    }

    if (!videogame.genres.length) {
      return alert('Select at least 1 genre');
    }

    if (!videogame.platforms.length) {
      return alert('Select at least 1 platform');
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

  const clearInputs = e => {
    e.preventDefault();
    setVideogame({
      name: '',
      description: '',
      background_image: '',
      released: '',
      rating: '',
      genres: [],
      platforms: [],
    });
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
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <Button content='🏠 Go Home' />
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

        <label>Rating</label>
        <div className={style.ratingInput}>
          <input
            className={errors.rating && style.danger}
            name='rating'
            onChange={onInputChange}
            type='text'
            placeholder='Example: 5'
            value={videogame.rating}
          />
          {errors.rating && <p>{errors.rating}</p>}
        </div>

        <label>Release date:</label>
        <div className={style.releasedInput}>
          <input
            name='released'
            onChange={onInputChange}
            type='date'
            className={errors.released && style.danger}
            value={videogame.released}
          />
          {errors.released && <p>{errors.released}</p>}
        </div>

        <label>Plataformas:</label>
        <div className={style.platformsInput}>
          <select
            name='platforms'
            multiple
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
            multiple
            onChange={onSelectGenreChange}
            required
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
          placeholder='Example: http://henry-game.com/image.png'
        />
      </div>
      <div className={style.containerButtons}>
        <div className={style.submitButton}>
          {Object.keys(errors).length ? (
            <div>
              <ButtonDisabled content='There are mistakes ⚠️' />
            </div>
          ) : (
            <Button content='Create Videogame' />
          )}
        </div>
        <div className={style.clearInput}>
          <Button
            onClick={clearInputs}
            content='Clear Inputs'
            type='reset'
          ></Button>
        </div>
      </div>
    </form>
  );
};

export default CreateVideogame;
