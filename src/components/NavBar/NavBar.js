import React from 'react';
import './NavBar.scss';
import ModeToggle from '../ModeToggle/ModeToggle';

import { Link, animateScroll as scroll } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
const NavBar = ({ darkMode, setMenuIsOpen }) => {
  return (
    <div className={`nav ${darkMode ? '--dark' : ''}`}>
      <h3
        className="nav__home-btn"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        jacky tam
      </h3>

      <div className="nav__menu-items">
        <ModeToggle />
        <Link to="projects" smooth={true} offset={-150} duration={1000}>
          <p>Projects</p>
        </Link>
        <Link to="about" smooth={true} offset={-100} duration={1000}>
          <p>About</p>
        </Link>
        <Link to="contact" smooth={true} duration={1000} offset={-100}>
          <p>Contact</p>
        </Link>
      </div>

      <div
        className="nav__hamburger-container"
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        <GiHamburgerMenu className="nav__hamburger-icon" />
      </div>
    </div>
  );
};

export default NavBar;
