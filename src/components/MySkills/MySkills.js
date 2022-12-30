import React from "react";
import "./MySkills.scss";
import HtmlIcon from "../../assets/images/html-svgrepo-com.svg";
import CssIcon from "../../assets/images/css-svgrepo-com.svg";
import JsIcon from "../../assets/images/js-svgrepo-com.svg";
import NodeIcon from "../../assets/images/node-icon.svg";
import ExpressIcon from "../../assets/images/express-icon.svg";
import MongoIcon from "../../assets/images/mongo-icon.svg";
import ReactIcon from "../../assets/images/react-svgrepo-com.svg";
import { AiFillHtml5 } from "react-icons/ai";

const MySkills = () => {
  return (
    <div className="skills">
      <h3 className="skills__header">My Skills</h3>

      <div className="skills__list">
        <img src={HtmlIcon} alt="Html" className="skills__skill-icon" />
        <img src={CssIcon} alt="Css" className="skills__skill-icon" />
        <img src={JsIcon} alt="JS" className="skills__skill-icon" />
        <img src={ReactIcon} alt="React" className="skills__skill-icon" />
        <img src={NodeIcon} alt="React" className="skills__skill-icon" />
        <img src={ExpressIcon} alt="React" className="skills__skill-icon" />
        <img src={MongoIcon} alt="React" className="skills__skill-icon" />
      </div>
    </div>
  );
};

export default MySkills;

//html,css,js,react,node,express,mongodb
