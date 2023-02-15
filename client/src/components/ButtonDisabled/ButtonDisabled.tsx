import React from 'react';
import style from './ButtonDisabled.module.css';

const ButtonDisabled = ({ content, type }) => {
  return (
    <button type={type} className={style.botoncito} disabled>
      {content}
    </button>
  );
};

export default ButtonDisabled;
