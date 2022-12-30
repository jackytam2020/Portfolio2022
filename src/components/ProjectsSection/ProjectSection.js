import React from 'react';
import './ProjectSection.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

import { useInView } from 'react-intersection-observer';
import BeautyEtAl from '../../assets/images/beauty-et-al-project.png';
import EaAPP from '../../assets/images/ea-project.png';

function ProjectSection({ darkMode }) {
  const projectCardOption1 = {
    threshold: 0,
    rootMargin: '0px 0px -275px 0px',
    trackVisibility: true,
    delay: 500,
  };

  const projectCardOption2 = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px',
    trackVisibility: true,
    delay: 750,
  };

  const { ref: projectRef1, inView: myElementIsVisible1 } =
    useInView(projectCardOption1);

  const { ref: projectRef2, inView: myElementIsVisible2 } =
    useInView(projectCardOption2);
  return (
    <section className="project-section" id="projects">
      <h3 className="project-section__header">Projects</h3>

      <div className="project-section__project-list">
        <ProjectCard
          src={BeautyEtAl}
          alt={'beauty et al'}
          title={'Beauty Et Al'}
          desc={
            'An ecommerce website for a beauty salon based in downtown Toronto'
          }
          reference={projectRef1}
          isVisible={myElementIsVisible1}
          GitHubLink={'https://github.com/jackytam2020/beauty-et-al'}
        />
        <ProjectCard
          src={EaAPP}
          alt={'beauty et al'}
          title={'BrainStation Industry Project - EA'}
          desc={
            'A fully responsive landing page for the EA app made during the 24 hour EA hackathon'
          }
          reference={projectRef2}
          isVisible={myElementIsVisible2}
          GitHubLink={'https://github.com/jackytam2020/ea-hackathon'}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
