import "./index.scss";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
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
            My full name is Joey Mhonde and as a full stack developer with
            experience in Django, Python, React, JavaScript, HTML, and CSS, I am
            passionate about creating innovative and user-friendly web
            applications. Whether it's building dynamic web pages, optimizing
            server performance, or implementing responsive design, I am
            dedicated to delivering high-quality solutions that meet both user
            needs and business goals.
          </p>
          <p>
            Outside of programming, I am an avid music lover, soccer player, and
            chess enthusiast. I believe that creativity and critical thinking
            are essential skills for both programming and these hobbies. I often
            draw inspiration from music and sports to inform my development
            choices and find new ways to approach problems. I also enjoy playing
            chess as a way to sharpen my logical reasoning and strategic
            planning skills, which are valuable in both programming and life.
          </p>
          <p>
            If you're looking for a developer who is committed to producing
            top-notch code and who brings a diverse range of interests and
            skills to the table, look no further. I am excited to collaborate
            with you on your next project and to bring my expertise and
            enthusiasm to the table.
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
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
