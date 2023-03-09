import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const location = [-20.085606457022557, 30.810503057324084]
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              idx={15}
              strArray={"Contact me".split("")}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  ></input>
                </li>
                <li className="half">
                  <input placeholder="Subject" type="text" name="subject" />
                </li>
                <li className="half">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Panashe Mhonde,
          <br />
          Zimbabwe,
          <br />
          6th Str, 320
          <br />
          Sisk, Masvingo <br />
          <span>panashemhondeh@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={location} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={location}>
              <Popup>
                Chozyn lives here, come over for a cup of coffee
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
