import React from 'react';
import { useDispatch } from 'react-redux';
import style from './Modal.module.css';

const Modal = ({ children, functionModal, syncFunction }) => {
  const dispatch = useDispatch();
  const handleModalContainerClick = e => e.stopPropagation();

  const closeModalFunction = () => {
    dispatch(functionModal());
  };

  return (
    <article
      onClick={syncFunction || closeModalFunction}
      className={style.modal}
    >
      <div className={style.container} onClick={handleModalContainerClick}>
        <button
          onClick={syncFunction || closeModalFunction}
          className={style.modalClose}
        >
          x
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
