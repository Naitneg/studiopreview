import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <div>
          <h4>LOGO</h4>
        </div>
        <div className="footer-info-div">
          <h4>Contact</h4>
          <p>Send a message</p>
        </div>
        <div className="footer-info-div">
          <h4>Studio</h4>
          <p>Gallery</p>
          <p>Latest Release</p>
          <p>Updates</p>
        </div>
        <div className="footer-info-div">
          <h4>Company</h4>
          <p>About us</p>
          <p>Start ups</p>
          <p>Jobs</p>
        </div>
        <div className="footer-info-div">
          <h4>About</h4>
          <p>Blog</p>
          <p>Themes</p>
          <p>Team</p>
          <p>Services</p>
        </div>
        <div className="footer-info-div">
          <h4>Follow us</h4>
          <p>Youtube</p>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>
      </div>
      <p className="rights">© 2023 Gentian Binaku, All rights reserved </p>
    </div>
  );
}

export default Footer;
