import { useRef, useEffect, useState, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai';
import { ThemeContext } from '../../context';

import './ProjectCard.scss';

const ProjectCard = ({
  src,
  alt,
  title,
  desc,
  HostLink,
  GitHubLink,
  reference,
  isVisible,
}) => {
  const [projectHover, setProjectHover] = useState(false);

  const variants = {
    enter: { transform: 'translateX(-20px)' },
    leave: { transform: 'translateX(0px)' },
    show: { opacity: 1 },
    hide: { opacity: 0 },
    inView: { opacity: 1, transform: 'translateY(-40px)' },
    outOfView: { opacity: 0, transform: 'translateY(0px)' },
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <motion.div
      ref={reference}
      className="card"
      onMouseLeave={() => {
        setProjectHover(false);
      }}
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
      <motion.img
        animate={projectHover && window.innerWidth > 767 ? 'enter' : 'leave'}
        src={src}
        className="card__thumbnail"
        alt={alt}
        variants={{
          enter: {
            ...variants.enter,
            transition: { duration: 0.5 },
          },
          leave: {
            ...variants.leave,
            transition: { duration: 0.5 },
          },
        }}
        onMouseEnter={() => {
          setProjectHover(true);
        }}
      />
      <motion.div
        className="card__details"
        animate={
          window.innerWidth < 768 ? 'show' : projectHover ? 'show' : 'hide'
        }
        variants={{
          show: {
            ...variants.show,
            transition: { duration: 0.5 },
          },
          hide: {
            ...variants.hide,
            transition: { duration: 0.5 },
          },
        }}
      >
        <p className="card__title">{title}</p>
        <p className="card__description">{desc}</p>
        <div className="card__links">
          {HostLink && (
            <a href={HostLink} target="_blank">
              <AiOutlineLink
                className="card__link-logo"
                color={darkMode ? 'white' : 'black'}
              />
            </a>
          )}
          <a href={GitHubLink} target="_blank">
            <AiOutlineGithub
              className="card__link-logo"
              color={darkMode ? 'white' : 'black'}
            />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
