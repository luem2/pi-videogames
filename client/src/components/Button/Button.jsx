import React from 'react';
import style from './Button.module.css';

const Button = props => {
  return <button className={style.botoncito}>{props.content}</button>;
};

export default Button;
