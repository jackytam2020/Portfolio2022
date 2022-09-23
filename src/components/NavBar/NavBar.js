import React from 'react'
import "./NavBar.css"
import HomeIcon from '../../assets/images/home-svgrepo-com.svg'
import WhiteHomeIcon from '../../assets/images/white-home-icon.svg'
import ModeToggle from '../ModeToggle/ModeToggle'
import {Link, animateScroll as scroll} from 'react-scroll'


const NavBar = ({darkMode}) => {

    return (
        <div className={darkMode ? "dark-nav-container" : "nav-container"}>
            <div className='nav-inner-content'>
                <img src={darkMode ? WhiteHomeIcon : HomeIcon} className="home-icon" alt="home-icon" onClick={() => {
                    scroll.scrollToTop()
                }}/>
                <div className='nav-buttons'>
                    <ModeToggle />
                    <Link to="projects" smooth={true} offset={-150} duration={1000}><p>Projects</p></Link>
                    <Link to="about" smooth={true} offset={-100} duration={1000}><p>About</p></Link>
                    <Link to="contact" smooth={true} duration={1000} offset={-100}><p>Contact</p></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar