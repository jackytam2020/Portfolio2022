import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

import "./ProjectCard.scss";
// import PropTypes from "prop-types";
// import RightArrow from "../../assets/images/right-arrow.svg";
// import WhiteRightArrow from "../../assets/images/white-right-arrow.svg";

const ProjectCard = ({
  scrollDirection,
  darkMode,
  src,
  alt,
  title,
  desc,
  HostLink,
  reference,
  isVisible,
}) => {
  const [projectHover, setProjectHover] = useState(false);

  const variants = {
    enter: { transform: "translateX(-20px)" },
    leave: { transform: "translateX(0px)" },
    show: { opacity: 1 },
    hide: { opacity: 0 },
    inView: { opacity: 1, transform: "translateY(-40px)" },
    outOfView: { opacity: 0, transform: "translateY(0px)" },
  };

  return (
    <motion.div
      ref={reference}
      className="card"
      onMouseLeave={() => {
        setProjectHover(false);
      }}
      onClick={() => {
        console.log(isVisible);
      }}
      animate={isVisible ? "inView" : "outOfView"}
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
        animate={projectHover && window.innerWidth > 767 ? "enter" : "leave"}
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
          window.innerWidth < 768 ? "show" : projectHover ? "show" : "hide"
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
          <a href={HostLink}>
            <AiOutlineLink className="card__link-logo" />
            <AiOutlineGithub className="card__link-logo" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
