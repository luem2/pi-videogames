import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={style.header}>
      <NavLink>
        <h1>Soy el madafakin Navbar breeeo</h1>
      </NavLink>
    </nav>
  );
}

export default Navbar;
