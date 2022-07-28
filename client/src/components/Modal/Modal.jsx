import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Modal.module.css';

const Modal = ({ children, functionModal }) => {
  const dispatch = useDispatch();
  const handleModalContainerClick = e => e.stopPropagation();

  const closeModalFunction = e => {
    dispatch(functionModal());
  };

  return (
    <article onClick={closeModalFunction} className={style.modal}>
      <div className={style.container} onClick={handleModalContainerClick}>
        <button onClick={closeModalFunction} className={style.modalClose}>
          x
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
