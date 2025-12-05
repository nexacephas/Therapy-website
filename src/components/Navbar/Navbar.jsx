import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; 
import { FaHome, FaUserMd, FaInfoCircle, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import AuthModal from "../AuthModal/AuthModal"; // Import the modal

const Navbar = () => {
  const [open, setOpen] = useState(false);       // mobile menu toggle
  const [authOpen, setAuthOpen] = useState(false); // auth modal toggle

  return (
    <>
      <nav className="nav">
        <div className="nav-container">

          {/* Logo */}
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links">
            <li>
              <a href="/"><FaHome style={{ marginRight: "6px" }} /> Home</a>
            </li>
            <li>
              <a href="/therapists"><FaUserMd style={{ marginRight: "6px" }} /> Therapists</a>
            </li>
            <li>
              <a href="/about"><FaInfoCircle style={{ marginRight: "6px" }} /> About</a>
            </li>
            <li>
              <a className="btn-primary" href="/contact"><FaEnvelope style={{ marginRight: "6px" }} /> Contact</a>
            </li>
            <li>
              {/* Trigger the Auth Modal */}
              <button className="btn-login" onClick={() => setAuthOpen(true)}>
                <FaSignInAlt style={{ marginRight: "6px" }} /> Login
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="nav-toggle" onClick={() => setOpen(!open)}>
            <span className={open ? "open" : ""}></span>
            <span className={open ? "open" : ""}></span>
            <span className={open ? "open" : ""}></span>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <a href="/"><FaHome style={{ marginRight: "6px" }} /> Home</a>
          <a href="/therapists"><FaUserMd style={{ marginRight: "6px" }} /> Therapists</a>
          <a href="/about"><FaInfoCircle style={{ marginRight: "6px" }} /> About</a>
          <a href="/contact" className="btn-primary"><FaEnvelope style={{ marginRight: "6px" }} /> Contact</a>
          <button className="btn-login" onClick={() => setAuthOpen(true)}><FaSignInAlt style={{ marginRight: "6px" }} /> Login</button>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
