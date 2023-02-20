import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 50;

      setShowNavbar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navbarClass = showNavbar ? "navbar show" : "navbar hide";
  return (
    <div className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <div className="navbar-links">
          <Link to="home" smooth={true} duration={500} className="navbar-link">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="navbar-link">
            About Us
          </Link>
          <Link to="work" smooth={true} duration={500} className="navbar-link">
            Work
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;