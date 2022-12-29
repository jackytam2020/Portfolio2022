import React, { useState, useContext, useEffect } from 'react';
import './ModeToggle.scss';
import DarkMode from '../../assets/images/dark-mode.svg';
import LightMode from '../../assets/images/light-mode.svg';
import { ThemeContext } from '../../context';

function ModeToggle({ setMenuIsOpen }) {
  const [lightModeState, setLightModeState] = useState('light-mode-visible');
  const [darkModeState, setDarkModeState] = useState('dark-mode-invisible');

  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
    setMenuIsOpen(false);
  };

  useEffect(() => {
    if (theme.state.darkMode === true) {
      setLightModeState('light-mode-invisible');
      setDarkModeState('dark-mode-visible');
    }
  }, [theme.state.darkMode]);

  return (
    <div
      className="light-dark-toggle"
      onClick={() => {
        if (
          lightModeState === 'light-mode-visible' &&
          darkModeState === 'dark-mode-invisible'
        ) {
          setLightModeState('light-mode-invisible');
          setDarkModeState('dark-mode-visible');
        } else if (
          lightModeState === 'light-mode-invisible' &&
          darkModeState === 'dark-mode-visible'
        ) {
          setLightModeState('light-mode-visible');
          setDarkModeState('dark-mode-invisible');
        }
        handleClick();
      }}
    >
      <img src={LightMode} className={lightModeState} alt="light-mode-icon" />
      <img src={DarkMode} className={darkModeState} alt="dark-mode-icon" />
    </div>
  );
}

export default ModeToggle;
