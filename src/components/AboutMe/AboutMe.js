import React from "react";
import { useEffect } from "react";
import "./AboutMe.scss";
import Portrait from "../../assets/images/portrait-photo.JPG";

const AboutMe = ({ scrollDirection, className, scrollValue }) => {
  return (
    <section className="about" id="about">
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
    </section>
  );
};

export default AboutMe;
