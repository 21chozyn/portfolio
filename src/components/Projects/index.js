import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import PodcastPhoto from "../../assets/images/TheRez.jpg";

import "./index.scss";
import Tip from "../Tip";

const Projects = () => {
  const projectText = {
    Project1: {
      Heading: "Podcast Web App",
      Text: "This is my full stack web app project created with React and Django Frameworks. Users can listen to the latest podcasts and contact the podcaster",
    },
  };
  const [letterClass, setLetterClass] = useState("text-animate");

  const [className, setClassName] = useState("projects-spinner");

  const handleHover = () => {
    setClassName("no-project-animation");
  };
  const handleMousLeave = () => {
    setClassName("projects-spinner");
  };
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectText.Project1.Heading.split("")}
              idx={15}
            />
          </h1>
          <p>{projectText.Project1.Text}</p>
          <a
            className="flat-button"
            href="http://100.25.163.230:8000/"
            rel="noreferrer"
            target="_blank"
          >
            Live Demo
          </a>

          <a
            className="flat-button"
            href="https://github.com/21chozyn/Podcast-Website.git"
            rel="noreferrer"
            target="_blank"
          >
            View code
          </a>
        </div>

        <div className="projects-container">
          <div
            className={className}
            onMouseOver={handleHover}
            onMouseLeave={handleMousLeave}
          >
            <div className="project1">
              <img src={PodcastPhoto} alt="Podcast Website" />
            </div>
          </div>
        </div>
      </div>
      <Tip tip="Tip: Click or tap on the picture!" />
      <Loader type="pacman" />
    </>
  );
};

export default Projects;
