import React from 'react';
import './Footer.css'
import GithubIcon from '../../assets/images/github-icon.svg'
import GmailIcon from '../../assets/images/gmail-icon.svg'
import LinkedInIcon from '../../assets/images/linkedin-icon.svg'
import {Link, animateScroll as scroll} from 'react-scroll'


function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-nav-buttons'>
                <p onClick={() => {
                    scroll.scrollToTop()
                }}>Home</p>
                <Link to="projects" spy={true} smooth={true} offset={-150} duration={1000}><p>Projects</p></Link>
                <Link to="about"  spy={true} smooth={true} offset={-100} duration={1000}><p>About</p></Link>
                <Link to="contact" smooth={true} duration={1000} offset={-100}><p>Contact</p></Link>
            </div>
            <p className='my-name'>jacky</p>
            <div className='bottom-footer-row'>
                <p>frontend developer</p>
                <div className='social-media-btns'>
                    <img src={GithubIcon} alt='github-icon'/>
                    <img src={GmailIcon} alt='gmail-icon'/>
                    <img src={LinkedInIcon} alt='linkedin-icon'/>
                </div>
            </div>
            <div className='footer-line'></div>
        </div>
    );
}

export default Footer;