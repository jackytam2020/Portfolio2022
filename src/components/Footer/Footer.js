import React from 'react';
import './Footer.scss';
import GithubIcon from '../../assets/images/github-icon.svg';
import GmailIcon from '../../assets/images/gmail-icon.svg';
import LinkedInIcon from '../../assets/images/linkedin-icon.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__max-width">
        <div className="footer__nav-buttons">
          <p
            onClick={() => {
              scroll.scrollToTop();
            }}
            style={{ cursor: 'pointer' }}
          >
            Home
          </p>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-150}
            duration={1000}
          >
            <p>Projects</p>
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <p>About</p>
          </Link>
        </div>
        <p className="footer__name">jacky</p>
        <div className="footer__bottom">
          <p className="footer__role">web developer</p>
          <div className="footer__buttons">
            <a href="https://github.com/jackytam2020" target="_blank">
              <img src={GithubIcon} alt="github-icon" />
            </a>
            <a href="mailto:jackytam2020@gmail.com" target="_blank">
              <img src={GmailIcon} alt="gmail-icon" />
            </a>
            <a href="https://www.linkedin.com/in/jackytam1996/" target="_blank">
              <img src={LinkedInIcon} alt="linkedin-icon" />
            </a>
          </div>
        </div>
        <div className="footer__line"></div>
      </div>
    </div>
  );
}

export default Footer;
