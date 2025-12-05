import React, { useContext } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const footerText = {
  en: {
    description: "Your safe space for connecting with trusted female therapists.",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    home: "Home",
    therapists: "Therapists",
    about: "About",
    contact: "Contact",
    copyright: "All rights reserved."
  },
  jp: {
    description: "信頼できる女性セラピストとつながるための安全な空間。",
    quickLinks: "クイックリンク",
    followUs: "フォローする",
    home: "ホーム",
    therapists: "セラピスト",
    about: "私たちについて",
    contact: "お問い合わせ",
    copyright: "全著作権所有。"
  }
};

const Footer = () => {
  const { lang } = useContext(LanguageContext); // use global language context

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Logo & Description */}
        <div className="footer-brand">
          <img src={logo} alt="Serenity Therapists" />
          <p>{footerText[lang].description}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>{footerText[lang].quickLinks}</h4>
          <ul>
            <li><a href="/">{footerText[lang].home}</a></li>
            <li><a href="/therapists">{footerText[lang].therapists}</a></li>
            <li><a href="/about">{footerText[lang].about}</a></li>
            <li><a href="/contact">{footerText[lang].contact}</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-socials">
          <h4>{footerText[lang].followUs}</h4>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Serenity Therapists. {footerText[lang].copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
