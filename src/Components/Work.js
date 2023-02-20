import React from "react";
import "./work.css";
import {
  AiOutlineInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import Workcard from "./Workcard";
import { Element } from "react-scroll";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

function Work() {
  return (
    <div className="work">
      <div className="work-text">
        <Element id="work" name="work">
          <h1>PUNA</h1>
        </Element>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor. Integer
          quam velit.
        </p>
      </div>
      <div className="socialmedia">
        <p>Na ndiqni ne rrjetet sociale ! </p>
        <div className="icons">
          <AiOutlineInstagram />
          <AiFillFacebook />
          <AiFillYoutube />
          <AiFillLinkedin />
          <RiTwitterFill />
        </div>
      </div>
      <Workcard />
      <div className="work-text">
        <Element id="service" name="service">
          <h1>SHËRBIMET</h1>
        </Element>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor. Integer
          quam velit.
        </p>
      </div>
      <Services />
      <div className="about-us">
        <div className="work-text">
          <Element id="about" name="about">
            <h1 style={{ color: "rgba(255,255,255,0.4)" }}>RRETH NESH</h1>
          </Element>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor.
            Integer quam velit.
          </p>
        </div>
        <About />
        <div className="clipath"></div>
      </div>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Work;
