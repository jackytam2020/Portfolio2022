import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './ProjectCard.scss';
import PropTypes from 'prop-types';
import RightArrow from '../../assets/images/right-arrow.svg';
import WhiteRightArrow from '../../assets/images/white-right-arrow.svg';

const ProjectCard = ({
  cardDescription,
  imgUrl,
  projectName,
  date,
  scrollDirection,
  darkMode,
}) => {
  const { ref: projectsRef, inView: projectsIsVisible } = useInView({});

  return (
    <div
      ref={projectsRef}
      className={`${
        projectsIsVisible && scrollDirection === 'down'
          ? 'project-card-container-in-view'
          : 'project-card-container'
      }`}
      id="projects"
    >
      <div className="card-div-holder">
        <div className="card-title">
          <p>{projectName}</p>
          <p>{date}</p>
        </div>
        <img
          src={require('../../assets/images/' + imgUrl)}
          className="project-thumbnail"
          alt="project thumbnail"
        />
        <div className="card-bottom">
          <p className="card-description">{cardDescription}</p>
          <div className="card-bottom-right">
            <div>
              <img
                src={darkMode ? WhiteRightArrow : RightArrow}
                className="right-arrow"
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.defaultProps = {
  cardDescription: 'Elevating collaboration with teachers & students.',
  imgUrl: 'project-thumbnail-1.png',
  projectName: 'Project 1',
  date: 'Fall 2022',
};

export default ProjectCard;
