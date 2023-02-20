import React from "react";
import "./contact.css";
import { BiMessageAlt } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contact!</h1>
      </div>
      <div className="contact-content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          doloribus repudiandae animi tenetur obcaecati eaque, sequi et
          asperiores ipsa delectus, maxime, magni temporibus eum omnis? Qui quae
          accusantium et vitae.
        </p>
        <h3>email@gmail.com</h3>
      </div>
      <div className="contact-icons">
        <div className="contact-icon">
          <BiMessageAlt className="icon" />
          <p>+38349700700</p>
        </div>
        <div className="contact-icon">
          <MdLocationPin className="icon" />
          <p>Rr."Mbreteresha Teute"</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
