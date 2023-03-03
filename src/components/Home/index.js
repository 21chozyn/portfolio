import React from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/My_Logo_C.png"

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt="developer"/>
        hozyn
        <br />
        web developer
        </h1>
        <h2>Fullstack Developer / Python and Javascript wizard </h2>
        <Link to="/contact" className="flat-button">Contact me</Link>
      </div>
    </div>
  );
};

export default Home;
