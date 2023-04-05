import React from 'react';
import './HeroHeader.scss';
import { motion } from 'framer-motion';

import Button from '../Button/Button';

const HeroHeader = ({ darkMode }) => {
  return (
    <div className="hero">
      <div className="hero__top">
        <h1 className="hero__copy">
          <div className="hero__animation-container">
            <span className="hero__emoji">👋</span>
            <span className="hero__span">Hi I'm Jacky.</span>
          </div>
          A Web Developer based in
          <span className="hero__span-block">Vancouver</span>
        </h1>
      </div>
      <div className="hero__bottom">
        <motion.p
          className="hero__sub-copy"
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 2.5, ease: 'easeInOut', duration: 1 }}
          initial={{ opacity: 0, translateY: 50 }}
        >
          Web Developer graduate of
          <span className="hero__bold-span"> BrainStation</span>
        </motion.p>
        <div className="hero__resume-btn">
          <motion.a
            href="/pdfs/JACKY_TAM_RESUME.pdf"
            target="_blank"
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, ease: 'easeInOut', duration: 1 }}
            initial={{ opacity: 0 }}
          >
            <Button buttonText={'Résumé'} darkMode={darkMode} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
