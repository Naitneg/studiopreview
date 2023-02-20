import React from "react";
import "./modal.css";
import { AiFillCloseCircle } from "react-icons/ai";
function Modal(props) {
  return (
    <div className={`modal ${props.showComponent ? "slide-in" : "slide-out"}`}>
      <div className="close" onClick={props.onClose}>
        <AiFillCloseCircle />
      </div>
      <h3>Almost There!</h3>
      <form className="modal-form">
        <div className="modal-inputs">
          <div>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              style={{ width: "23rem" }}
              placeholder="Emri dhe Mbiemri"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              style={{ width: "23rem" }}
              placeholder="Email"
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
            />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              placeholder="Shteti"
              style={{ width: "14rem" }}
            />
          </div>
          <div>
            <label htmlFor="zip">Zip</label>
            <input
              type="number"
              style={{ width: "5rem" }}
              placeholder="Postal"
            />
          </div>
        </div>
        <div className="modal-inputs">
          <div>
            <label htmlFor="textarea">Message</label>
            <textarea name="textarea" cols="70" rows="10"></textarea>
          </div>
        </div>
        <button>SEND</button>
      </form>
    </div>
  );
}

export default Modal;
