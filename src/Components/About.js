import React from "react";
import "./about.css";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineCodeSandbox,
  AiOutlineBgColors,
} from "react-icons/ai";
import { MdDesignServices, MdSlowMotionVideo } from "react-icons/md";
import { DiIllustrator } from "react-icons/di";

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img
          src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
          alt=""
        />
        <h2>Filan Fisteku</h2>
        <p>CEO AND FINAL EXECUTE</p>
        <div className="icons">
          <AiOutlineInstagram />
          <AiFillLinkedin />
          <AiFillFacebook />
        </div>
      </div>
      <div className="about-special">
        <p>Ne specializojmë në: </p>
        <div className="about-special-icons">
          <MdDesignServices className="icon" />
          <p>Interactive Design</p>
        </div>
        <div className="about-special-icons">
          <AiOutlineCodeSandbox className="icon" />
          <p>Code</p>
        </div>
        <div className="about-special-icons">
          <DiIllustrator className="icon" />
          <p>Illustration</p>
        </div>
        <div className="about-special-icons">
          <MdSlowMotionVideo className="icon" />
          <p>Video Design</p>
        </div>
        <div className="about-special-icons">
          <AiOutlineBgColors className="icon" />
          <p>UI/UX</p>
        </div>
      </div>
      <div className="moto">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          exercitationem a magni, eveniet amet architecto ipsum distinctio
          dignissimos itaque deleniti pariatur eligendi laboriosam aspernatur,
          expedita at ut ducimus! Praesentium, eveniet!
        </p>
        <h4>-MOTO- PikeMedia</h4>
      </div>
    </div>
  );
}

export default About;
