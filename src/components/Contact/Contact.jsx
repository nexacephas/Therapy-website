import React, { useState, useContext } from "react";
import "./Contact.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const textContent = {
  en: {
    ctaHeading: "Ready to Begin Your Wellness Journey?",
    ctaText: "Connect with a trusted female therapist today and take the first step toward mental clarity.",
    ctaBtn: "Find a Therapist",
    formHeading: "Send Us a Message",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    sendBtn: "Send Message",
  },
  jp: {
    ctaHeading: "ウェルネスの旅を始める準備はできましたか？",
    ctaText: "信頼できる女性セラピストとつながり、精神の明晰さへの第一歩を踏み出しましょう。",
    ctaBtn: "セラピストを探す",
    formHeading: "メッセージを送る",
    namePlaceholder: "お名前",
    emailPlaceholder: "メールアドレス",
    messagePlaceholder: "メッセージ",
    sendBtn: "送信",
  },
};

const Contact = () => {
  const { lang } = useContext(LanguageContext); // current language
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === "en" ? "Message sent! (Demo only)" : "メッセージが送信されました！（デモ用）");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* CTA */}
        <div className="contact-cta fade-in-up">
          <h2>{textContent[lang].ctaHeading}</h2>
          <p>{textContent[lang].ctaText}</p>
          <a href="/therapists" className="cta-btn">{textContent[lang].ctaBtn}</a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper fade-in-up delay-1">
          <h3>{textContent[lang].formHeading}</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder={textContent[lang].namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={textContent[lang].emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={textContent[lang].messagePlaceholder}
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit" className="btn-primary">{textContent[lang].sendBtn}</button>
          </form>

          {/* Social Links */}
          <div className="contact-socials">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
