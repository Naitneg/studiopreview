import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";

const INITIAL_FORM = {
  emri: "",
  email: "",
  adresa: "",
  qyteti: "",
  shteti: "",
  zip: "",
  mesazhi: "",
};

function Modal(props) {
  const [formFields, setFormFields] = useState(INITIAL_FORM);
  const { emri, email, adresa, qyteti, shteti, zip, mesazhi } = formFields;

  const resetForms = () => {
    setFormFields(INITIAL_FORM);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_jnxxlw5",
        "template_feibfoe",
        {
          from_name: emri,
          from_email: email,
          city: qyteti,
          address: adresa,
          state: shteti,
          zid: zip,
          message: mesazhi,
        },
        "jVTb7TITLl0XOzWuh"
      )
      .then(
        () => {
          alert("Your message was sent successfully!");
        },
        (error) => {
          console.error(error);
          alert(
            "There was an error sending your message. Please try again later."
          );
        }
      );
    resetForms();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className={`modal ${props.showComponent ? "slide-in" : "slide-out"}`}>
      <div className="close" onClick={props.onClose}>
        <AiFillCloseCircle />
      </div>
      <h3>Almost There!</h3>
      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="modal-inputs">
          <div>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              style={{ width: "23rem" }}
              placeholder="Emri dhe Mbiemri"
              name="emri"
              value={emri}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              style={{ width: "23rem" }}
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-inputs">
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              style={{ width: "800px" }}
              placeholder={`Rr. "Mbreteresha Teutë"`}
              name="adresa"
              value={adresa}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-inputs">
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              style={{ width: "21rem" }}
              placeholder="Qyteti"
              name="qyteti"
              value={qyteti}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Shteti"
              style={{ width: "14rem" }}
              name="shteti"
              value={shteti}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <input
              type="number"
              style={{ width: "5rem" }}
              placeholder="Postal"
              name="zip"
              value={zip}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="modal-inputs">
          <div>
            <label htmlFor="textarea">Message</label>
            <textarea
              name="mesazhi"
              cols="70"
              rows="10"
              value={mesazhi}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
}

export default Modal;
