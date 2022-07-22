import React from 'react';
import style from './ButtonDisabled.module.css';

const ButtonDisabled = props => {
  return (
    <button className={style.botoncito} disabled>
      {props.content}
    </button>
  );
};

export default ButtonDisabled;
