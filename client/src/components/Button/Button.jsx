import React from 'react';
import style from './Button.module.css';

const Button = ({ type, onClick, content, image }) => {
  return (
    <button className={style.container} type={type} onClick={onClick}>
      {image ? <img src={image} alt={image} /> : null}
      {content}
    </button>
  );
};

export default Button;
