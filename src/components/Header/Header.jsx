import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <NavLink to="/" className={css.logoLink}>
          <h1>psychologists.services</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
