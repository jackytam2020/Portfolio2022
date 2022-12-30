import React, { useContext } from 'react';
import './MySkills.scss';
import HtmlIcon from '../../assets/images/html-svgrepo-com.svg';
import CssIcon from '../../assets/images/css-svgrepo-com.svg';
import JsIcon from '../../assets/images/js-svgrepo-com.svg';
import NodeIcon from '../../assets/images/node-icon.svg';
import ExpressIcon from '../../assets/images/express-icon.svg';
import WhiteExpressIcon from '../../assets/images/express-icon-white.svg';
import MongoIcon from '../../assets/images/mongo-icon.svg';
import ReactIcon from '../../assets/images/react-svgrepo-com.svg';

import { ThemeContext } from '../../context';
import { motion } from 'framer-motion';

const MySkills = ({ isVisible, reference }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const variants = {
    inView: { opacity: 1, transform: 'translateY(-40px)' },
    outOfView: { opacity: 0, transform: 'translateY(0px)' },
  };
  return (
    <motion.div
      className="skills"
      ref={reference}
      animate={isVisible ? 'inView' : 'outOfView'}
      variants={{
        inView: {
          ...variants.inView,
          transition: { duration: 0.5 },
        },
        outOfView: {
          ...variants.outOfView,
          transition: { duration: 0.5 },
        },
      }}
    >
      <h3 className="skills__header">My Skills</h3>

      <div className="skills__list">
        <img src={HtmlIcon} alt="Html" className="skills__skill-icon" />
        <img src={CssIcon} alt="Css" className="skills__skill-icon" />
        <img src={JsIcon} alt="JS" className="skills__skill-icon" />
        <img src={ReactIcon} alt="React" className="skills__skill-icon" />
        <img src={NodeIcon} alt="React" className="skills__skill-icon" />
        <img
          src={darkMode ? WhiteExpressIcon : ExpressIcon}
          alt="React"
          className="skills__skill-icon"
        />
        <img src={MongoIcon} alt="React" className="skills__skill-icon" />
      </div>
    </motion.div>
  );
};

export default MySkills;

//html,css,js,react,node,express,mongodb
