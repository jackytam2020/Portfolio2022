import { useEffect, useState, useCallback, useContext, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './App.scss';
import NavBar from './components/NavBar/NavBar';
import HeroHeader from './components/HeroHeader/HeroHeader';
import ProjectCard from './components/ProjectCard/ProjectCard';
import MySkills from './components/MySkills/MySkills';
import AboutMe from './components/AboutMe/AboutMe';
import ProjectSection from './components/ProjectsSection/ProjectSection';
import MenuSlideOut from './components/MenuSlideOut/MenuSlideOut';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './context';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  //configuration for scrolling effects
  const skillsSection = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px',
    trackVisibility: true,
    delay: 500,
  };

  const aboutSection = {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px',
    trackVisibility: true,
    delay: 500,
  };

  const { ref: skillsRef, inView: skillsRefVisible } = useInView(skillsSection);
  const { ref: aboutRef, inView: aboutRefVisible } = useInView(aboutSection);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
  }, []);

  const menuRef = useRef();

  //close cart popout when clicked outside
  const handleClickOutside = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setMenuIsOpen(false);
    }
  };

  return (
    <div className={darkMode ? 'app--dark' : 'app'}>
      <div className="app__container">
        <NavBar darkMode={darkMode} setMenuIsOpen={setMenuIsOpen} />
        <MenuSlideOut
          menuIsOpen={menuIsOpen}
          setMenuIsOpen={setMenuIsOpen}
          menuRef={menuRef}
        />
        <HeroHeader darkMode={darkMode} />
        <ProjectSection />
        <MySkills isVisible={skillsRefVisible} reference={skillsRef} />
        <AboutMe isVisible={aboutRefVisible} reference={aboutRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
