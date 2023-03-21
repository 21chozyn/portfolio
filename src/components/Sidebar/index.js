import "./index.scss";

import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoC from "../../assets/images/My_Logo_C.png";
import LogoSubtitle from "../../assets/images/My_Logo_hozyn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser,faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/portfolio">
        <img src={LogoC} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="chozyn" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/portfolio">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e"/>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/21chozyn"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/panashe-mhonde-110517241/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
