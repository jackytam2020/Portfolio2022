import { useEffect, useState, useCallback, useContext } from 'react'
import { useInView } from 'react-intersection-observer';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import HeroHeader from './components/HeroHeader/HeroHeader';
import ProjectCard from './components/ProjectCard/ProjectCard';
import TechUsed from './components/TechUsed/TechUsed';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './context';

import {getSunriseSunsetInfo} from "sunrise-sunset-api";

function App() {
  
  const { ref: lineRef, inView: lineIsVisible } = useInView();
  const { ref: techRef, inView: techRefIsVisible } = useInView();
  const { ref: aboutRef, inView: aboutRefIsVisible } = useInView({
    rootMargin: '-1px 0px',
    onChange: (aboutRefIsVisible) => {
      if(aboutRefIsVisible === true) {
        // IntersectionObserver.unobserve()
      }
    }
  });
  const { ref: contactRef, inView: contactRefIsVisible } = useInView({
    rootMargin: '-10px 0px',
    onChange: (contactRefIsVisible) => {
        // IntersectionObserver.disconnect()
    }
  });
  // const myRef = useRef()
  // const [projectsIsVisible, setProjectsIsVisible] = useState();

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setProjectsIsVisible(entry.isIntersecting)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  const [y, setY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');


  const handleNavigation = useCallback( (e) => {

    if (y > window.scrollY) {
      setScrollDirection('up')
    } else if (y < window.scrollY) {
      setScrollDirection('down')
    }
    setY(window.scrollY);

  }, [y])

  useEffect(() => {

    window.addEventListener("scroll", handleNavigation);
    
    return () => { // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation])

 
  const theme = useContext(ThemeContext)

  // const [darkMode, setDarkMode] = useState(theme.state.darkMode)
  let darkMode = theme.state.darkMode

  //turn darkMode on after sunset and darkMode off after sunrise 

  let sunriseUTCHour;
  let sunriseUTCMinutes;
  let sunsetUTCHour;
  let sunsetUTCMinutes;

  
  let date = new Date();
  let currentUTCHour = date.getUTCHours()
  let currentUTCMin = date.getUTCMinutes()
  // let currentUTCSeconds = date.getUTCSeconds()


   async function main() {
    const response = await getSunriseSunsetInfo({
        latitude: 49.158554,
        longitude: -123.184742,
    });

    //convert 12 hour format to 24 hour format 
    let sunRiseAMPM = response.sunrise.split(":")[2]
    let sunSetAMPM = response.sunset.split(":")[2]

    sunriseUTCHour = parseInt(response.sunrise.split(":")[0], 10)
    sunriseUTCMinutes = parseInt(response.sunrise.split(":")[1], 10)
    sunsetUTCHour = parseInt(response.sunset.split(":")[0], 10)
    sunsetUTCMinutes = parseInt(response.sunset.split(":")[1], 10)

    if(sunriseUTCHour  === '12'|| sunsetUTCHour === '12') {
      sunriseUTCHour = '00'
      sunsetUTCHour = '00'
    }

    if(sunRiseAMPM.includes('PM')) {
      sunriseUTCHour += 12;
    }

    if(sunSetAMPM.includes('PM')) {
      sunsetUTCHour += 12;
    }

    
    //2:16 is sunset 13:55 sunrise if current time is in between then turn on dark mode
    let atSunSetTotalMinutes = sunsetUTCHour * 60 + sunsetUTCMinutes
    let atSunRiseTotalMinutes = sunriseUTCHour * 60 + sunriseUTCMinutes
    let atCurrentTimeTotalMinutes = currentUTCHour * 60 + currentUTCMin
  
    if(atSunSetTotalMinutes <= atCurrentTimeTotalMinutes && atCurrentTimeTotalMinutes <= atSunRiseTotalMinutes) {
      darkMode = true
    } else{
      darkMode = false
    }
  
  } 


  useEffect(() => {
    main()
  }, [currentUTCMin])

  return (
    <div className={darkMode ? "App-dark-mode" : "App"}>
      <div className='portfolio-container'>

        <div className='nav'>
            <NavBar darkMode={darkMode}/>
        </div>
        
        <div className='hero-header'>
            <HeroHeader/>
        </div>

        <div ref={lineRef}  className={`${lineIsVisible ? "line-in-view" : "line"}`}></div>

        <div className="projects-section">
          {
            projects.map( (items) => 
               <ProjectCard {...items} scrollDirection={scrollDirection} darkMode={darkMode}/>
            )
          }
        </div>

        <div ref={techRef} className={`${techRefIsVisible && scrollDirection === 'down' ? "tech-used-section-in-view" : "tech-used-section"}`}>
            <TechUsed/>
        </div>

        <div ref={aboutRef} className={`${aboutRefIsVisible && scrollDirection === 'down' ? "about-me-section-in-view" : "about-me-section"}`}>
            <AboutMe scrollDirection={scrollDirection} scrollValue={y} className={`${aboutRefIsVisible ? "about-title-in-view" : "about-title"}`}/>
        </div>

        <div ref={contactRef} className={`${contactRefIsVisible && scrollDirection === 'down' ? "contact-section-in-view" : "contact-section"}`}>
            <Contact darkMode={darkMode}/>
        </div>

      </div>

      <div className='footer-section'>
          <div className='footer-wrapper'>
            <Footer />
          </div>
      </div>
        
    </div>
  );
}

const projects = [
    
  { cardDescription: "Elevating collaboration with teachers & students.",
  imgUrl:"project-thumbnail-1.png",
  projectName: "Project 1",
  date: "Fall 2022"
  },

  { cardDescription: "Driving blockchain and robotics together with gamification.",
  imgUrl:"project-thumbnail-2.png",
  projectName: "Project 2",
  date: "Fall 2022"
  },

  { cardDescription: "A doll & app for children with Autism Spectrum Disorder.",
  imgUrl:"project-thumbnail-3.png",
  projectName: "Project 3",
  date: "Fall 2022"
  },

  { cardDescription: "A toy range for growing good habits in young children.",
  imgUrl:"project-thumbnail-4.png",
  projectName: "Project 4",
  date: "Fall 2022"
  },
]

export default App;
