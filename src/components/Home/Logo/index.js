import "./index.scss";
import LogoC from "../../../assets/images/My_Logo_C1.png";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
import gsap from "gsap-trial";
import React, { useEffect, useRef } from "react";

const Logo = () => {
  var x = window.matchMedia("(max-width: 800px)");
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    // gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, { duration: 2, opacity: 1,delay:1 })
      .fromTo(
        solidLogoRef.current,
        { opacity: 0 },
        { opacity: x.matches ? 0.7 : 1, duration: 2 }
      );
  }, []);
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoC} alt="C" />

      {/* <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(-10 82) scale(6 6)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 71.485 20.361 L 49.61 34.668 Q 47.412 29.199 34.912 29.199 Q 32.316 29.199 29.597 32.605 A 20.384 20.384 0 0 0 29.102 33.252 A 15.037 15.037 0 0 0 26.123 42.383 A 16.65 16.65 0 0 0 28.292 49.559 A 19.298 19.298 0 0 0 28.418 49.78 A 7.14 7.14 0 0 0 32.672 53.07 Q 33.925 53.457 35.46 53.552 A 15.594 15.594 0 0 0 35.694 53.564 A 16.382 16.382 0 0 0 40.212 52.9 A 22.54 22.54 0 0 0 43.897 51.465 Q 47.212 49.845 49.829 45.726 A 28.937 28.937 0 0 0 51.319 43.066 Q 51.504 43.436 54.971 46.388 A 276.874 276.874 0 0 0 55.371 46.729 A 481.067 481.067 0 0 0 63.257 53.271 Q 67.286 56.543 69.19 58.105 A 42.277 42.277 0 0 1 65.485 65.143 A 30.901 30.901 0 0 1 59.375 72.021 A 38.129 38.129 0 0 1 52.424 76.624 A 31.365 31.365 0 0 1 46.582 78.906 A 49.513 49.513 0 0 1 33.301 80.762 A 41.403 41.403 0 0 1 24.882 79.943 A 32.031 32.031 0 0 1 17.066 77.271 A 23.751 23.751 0 0 1 9.375 71.064 A 33.604 33.604 0 0 1 5.567 65.308 A 38.96 38.96 0 0 1 2.692 58.113 Q 1.576 54.346 0.895 49.84 A 91.002 91.002 0 0 1 0.098 42.383 A 29.102 29.102 0 0 1 0.055 41.583 Q 0.001 40.254 0 38.111 A 162.259 162.259 0 0 1 0 38.086 A 56.252 56.252 0 0 1 1.633 24.426 A 52.872 52.872 0 0 1 1.685 24.219 A 35.238 35.238 0 0 1 7.203 12.231 A 26.499 26.499 0 0 1 14.029 5.69 A 33.597 33.597 0 0 1 17.774 3.516 Q 24.104 0.35 32.934 0.03 A 54.648 54.648 0 0 1 34.082 0 Q 40.43 0 46.582 1.489 A 51.811 51.811 0 0 1 54.897 4.235 A 45.43 45.43 0 0 1 57.862 5.64 A 34.676 34.676 0 0 1 64.615 10.18 A 31.035 31.035 0 0 1 66.675 12.134 Q 70.362 15.967 71.485 20.361 Z"
          ></path>
        </g>
      </svg> */}
    </div>
  );
};

export default Logo;
