import React from 'react';
import './HeroHeader.scss';
import { motion } from 'framer-motion';

import Button from '../Button/Button';

const HeroHeader = () => {
  return (
    <div className="hero">
      <div className="hero__top">
        <h1 className="hero__copy">
          <span className="hero__span">Hi I'm Jacky.</span> A Web Developer
          based in Vancouver
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

        <motion.a
          href=""
          className="hero__resume-btn"
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, ease: 'easeInOut', duration: 1 }}
          initial={{ opacity: 0 }}
        >
          <Button buttonText={'Résumé'} />
        </motion.a>
      </div>
    </div>
  );
};

export default HeroHeader;
