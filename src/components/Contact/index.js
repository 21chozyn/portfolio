import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const location = [-20.085606457022557, 30.810503057324084];
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
            If you're looking for a developer who is committed to producing
            top-notch code and who brings a diverse range of interests and
            skills to the table, look no further. I am excited to collaborate
            with you on your next project and to bring my expertise and
            enthusiasm to the table.
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
                <li className="btn">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="map-wrap">
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
          <MapContainer center={location} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={location}>
              <Popup>Chozyn lives here, come over for a cup of coffee</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
