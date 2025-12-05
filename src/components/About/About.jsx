import React from "react";
import "./About.css";
import aboutImage from "../../assets/massage-4916847_1280.jpg"; // replace with your image
import { FaHeart, FaBrain, FaUsers } from "react-icons/fa"; // Icons from react-icons

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image-wrapper fade-in-left">
          <img src={aboutImage} alt="About Us" />
        </div>

        <div className="about-content fade-in-right">
          <h2>About Serenity Therapists</h2>
          <p>
            At Serenity Therapists, we believe that mental wellness is a journey, and every woman deserves
            a safe, supportive space to thrive. Our platform connects you with trusted female therapists
            who specialize in mindfulness, CBT, meditation, and holistic care.
          </p>
          <p>
            Our mission is to provide accessible, elegant, and personalized guidance to help you achieve
            mental clarity, emotional balance, and overall well-being.
          </p>

          {/* Values / Features */}
          <div className="about-values">
            <div className="value-card fade-in-up delay-1">
              <FaHeart className="value-icon" />
              <h4>Compassion</h4>
              <p>We prioritize empathy and understanding in every interaction.</p>
            </div>

            <div className="value-card fade-in-up delay-2">
              <FaBrain className="value-icon" />
              <h4>Expertise</h4>
              <p>Professional, licensed therapists with specialized knowledge.</p>
            </div>

            <div className="value-card fade-in-up delay-3">
              <FaUsers className="value-icon" />
              <h4>Trust</h4>
              <p>Safe, confidential, and reliable platform for your well-being.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
