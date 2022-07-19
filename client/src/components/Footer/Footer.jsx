import React from 'react';
import logo from '../../assets/CircleLogo.png';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.container}>
      <h2>Created by:</h2>
      <a
        href='http://lucianopinol.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        <img className={style.image} src={logo} alt='logo-luem' />
      </a>
    </div>
  );
};

export default Footer;
