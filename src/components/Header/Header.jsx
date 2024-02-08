import React, { useState } from 'react';
import css from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import LogIn from 'Auth/LogIn/LogIn';
import Registration from 'Auth/Registartion/Registration';

const Header = () => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setisRegistrationOpen] = useState(false);

  const currentPath = useLocation().pathname;
  const isLoggedIn = false;

  return (
    <div className={css.container}>
      <div className={css.header}>
        <div className={css.headerPart}>
          <NavLink to="/" className={css.logoLink}>
            <h1 className={css.logoLinkh1}>
              <span>psychologists.</span>services
            </h1>
          </NavLink>

          <div className={css.navlinks}>
            <NavLink to="/" className={currentPath === '/' ? 'active' : ''}>
              <h2 className={css.navlinksH2}>Home</h2>
            </NavLink>
            <NavLink
              to="/psychologists"
              className={currentPath === '/psychologists' ? 'active' : ''}
            >
              <h2 className={css.navlinksH2}>Psychologists</h2>
            </NavLink>
            {isLoggedIn ? (
              <NavLink
                to="/Favorites"
                className={currentPath === '/favorites' ? 'active' : ''}
              >
                <h2 className={css.navlinksH2}>Favorites</h2>
              </NavLink>
            ) : null}
          </div>
        </div>
        {isLoggedIn ? (
          <h1>logged in</h1>
        ) : (
          <div className={css.HeaderButtonsPart}>
            <button
              className={css.HeaderButtonsPartLogIn}
              onClick={() => {
                setIsLogInOpen(true);
              }}
            >
              Log in
            </button>
            {isLogInOpen && <LogIn setIsLogInOpen={setIsLogInOpen} />}
            <button
              className={css.HeaderButtonsPartRegistration}
              onClick={() => {
                setisRegistrationOpen(true);
              }}
            >
              Registration
            </button>
            {isRegistrationOpen && <Registration setIsLogInOpen={setIsLogInOpen} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
