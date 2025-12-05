import React, { useState } from "react";
import "./Contact.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* CTA */}
        <div className="contact-cta fade-in-up">
          <h2>Ready to Begin Your Wellness Journey?</h2>
          <p>Connect with a trusted female therapist today and take the first step toward mental clarity.</p>
          <a href="/therapists" className="cta-btn">Find a Therapist</a>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper fade-in-up delay-1">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
            <button type="submit" className="btn-primary">Send Message</button>
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
