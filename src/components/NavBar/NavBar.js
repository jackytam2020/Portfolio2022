import React from "react";
import "./NavBar.scss";
import ModeToggle from "../ModeToggle/ModeToggle";

import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
const NavBar = ({ darkMode, setMenuIsOpen }) => {
  return (
    <div className={`nav ${darkMode ? "--dark" : ""}`}>
      <h3
        className="nav__home-btn"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        jacky tam
      </h3>

      <div className="nav__menu-items">
        <ModeToggle setMenuIsOpen={setMenuIsOpen} />
        <Link to="projects" smooth={true} offset={-150} duration={1000}>
          <p className={` ${darkMode ? "nav__link--light" : "nav__link"}`}>
            Projects
          </p>
        </Link>
        <Link to="about" smooth={true} offset={-100} duration={1000}>
          <p className={` ${darkMode ? "nav__link--light" : "nav__link"}`}>
            About
          </p>
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
