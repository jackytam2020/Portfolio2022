import React from 'react';
import { useEffect } from 'react';
import './AboutMe.scss';
import Portrait from '../../assets/images/portrait-photo.JPG';

import { motion } from 'framer-motion';

const AboutMe = ({
  scrollDirection,
  className,
  scrollValue,
  isVisible,
  reference,
}) => {
  const variants = {
    inView: { opacity: 1, transform: 'translateY(-40px)' },
    outOfView: { opacity: 0, transform: 'translateY(0px)' },
  };

  return (
    <motion.section
      ref={reference}
      className="about"
      id="about"
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
      <div className="about__div-stagger">
        <img src={Portrait} alt="portrait photo" className="about__portrait" />
        <div className="about__stagger1"></div>
        <div className="about__stagger2"></div>
      </div>
      <div className="about__copy">
        <p className="about__header">
          I'm a BrainStation graduate who is excited about entering the tech
          industry
        </p>

        <p className="about__desc">
          In my previous occupation, I was a sales representative of an
          accounting software SaaS company. After working in the SaaS industry,
          I decided I wanted to create websites and applications myself.
        </p>

        <p className="about__desc2">
          After my sales role, I realized work is a lot more fun if I get to
          share my ideas and collaborate with others. Which is why I'm
          passionate in working in teams to create dynamic fullstack
          applications that truly bring utility and value to the end user.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
