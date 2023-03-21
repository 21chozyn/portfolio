import "./index.scss";
import LogoC from "../../../assets/images/My_Logo_C1.png";

import React, {  useRef } from "react";

const Logo = () => {
  var x = window.matchMedia("(max-width: 800px)");
  const bgRef = useRef();
  const solidLogoRef = useRef();


  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoC} alt="C" />


    </div>
  );
};

export default Logo;
