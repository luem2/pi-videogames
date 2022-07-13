import React from 'react';

const Videogame = props => {
  return (
    <div>
      <img src={props.image} alt={`${props.name}`} />
      <h3>{props.name}</h3>
      <p>{props.rating}★</p>
      <p>{props.genres}</p>
    </div>
  );
};

export default Videogame;
