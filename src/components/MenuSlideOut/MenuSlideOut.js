import React from 'react';
import './MenuSlideOut.scss';

import ModeToggle from '../ModeToggle/ModeToggle';
import { Link, animateScroll as scroll } from 'react-scroll';
import { HiOutlineX } from 'react-icons/hi';
import { motion } from 'framer-motion';

function MenuSlideOut({ menuIsOpen, setMenuIsOpen, menuRef }) {
  const variants = {
    show: { transform: 'translateX(0em)', opacity: 1 },
    hide: { transform: 'translateX(5em)', opacity: 0 },
  };

  return (
    <div className={menuIsOpen ? 'menu' : 'menu--closed'} ref={menuRef}>
      <div className="menu__top">
        <ModeToggle setMenuIsOpen={setMenuIsOpen} />
        <HiOutlineX
          className="menu__exit-icon"
          onClick={() => {
            setMenuIsOpen(false);
          }}
        />
      </div>
      <div className="menu__links">
        <Link to="projects" smooth={true} offset={-150} duration={1000}>
          <motion.p
            animate={menuIsOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.3, duration: 0.2 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            Projects
          </motion.p>
        </Link>
        <Link to="about" smooth={true} offset={-100} duration={1000}>
          <motion.p
            animate={menuIsOpen ? 'show' : 'hide'}
            variants={{
              show: {
                ...variants.show,
                transition: { delay: 0.4, duration: 0.3 },
              },
              hide: {
                ...variants.hide,
                transition: { delay: 0.1, duration: 0.05 },
              },
            }}
            onClick={() => {
              setMenuIsOpen(false);
            }}
          >
            About
          </motion.p>
        </Link>
        {/* <Link to="contact" smooth={true} duration={1000} offset={-100}>
          <p>Contact</p>
        </Link> */}
      </div>
    </div>
  );
}

export default MenuSlideOut;
