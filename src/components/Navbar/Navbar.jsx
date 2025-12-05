import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"; 
import { FaHome, FaUserMd, FaInfoCircle, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import AuthModal from "../AuthModal/AuthModal";
import { LanguageContext } from "../../context/LanguageContext";
import LanguageSwitcher from "../../context/LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const { lang } = useContext(LanguageContext);

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
            <li><a href="/"><FaHome /> {lang === "en" ? "Home" : "ホーム"}</a></li>
            <li><a href="/therapists"><FaUserMd /> {lang === "en" ? "Therapists" : "セラピスト"}</a></li>
            <li><a href="/about"><FaInfoCircle /> {lang === "en" ? "About" : "会社概要"}</a></li>
            <li><a className="btn-primary" href="/contact"><FaEnvelope /> {lang === "en" ? "Contact" : "お問い合わせ"}</a></li>
            <li><button className="btn-login" onClick={() => setAuthOpen(true)}><FaSignInAlt /> {lang === "en" ? "Login" : "ログイン"}</button></li>
          </ul>

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile Toggle */}
          <div className="nav-toggle" onClick={() => setOpen(!open)}>
            <span className={open ? "open" : ""}></span>
            <span className={open ? "open" : ""}></span>
            <span className={open ? "open" : ""}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <a href="/">{lang === "en" ? "Home" : "ホーム"}</a>
          <a href="/therapists">{lang === "en" ? "Therapists" : "セラピスト"}</a>
          <a href="/about">{lang === "en" ? "About" : "会社概要"}</a>
          <a href="/contact" className="btn-primary">{lang === "en" ? "Contact" : "お問い合わせ"}</a>
          <button className="btn-login" onClick={() => setAuthOpen(true)}>{lang === "en" ? "Login" : "ログイン"}</button>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
};

export default Navbar;
