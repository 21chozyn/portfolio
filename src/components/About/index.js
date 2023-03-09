import "./index.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"About me".split("")}
            idx={15}
          />
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
        <p>
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions
        </p>
        <p>
          t is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters,
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPython} color="#sunglow" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#DD0031"  />
  
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  );
};

export default About;
