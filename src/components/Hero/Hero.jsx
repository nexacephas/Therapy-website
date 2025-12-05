import React, { useState, useEffect } from "react";
import "./Hero.css";
import banner1 from "../../assets/anxiety-8116570_1280.jpg";
import banner2 from "../../assets/massage-4916847_1280.jpg";
import banner3 from "../../assets/woman-2722936_1280.jpg";

const banners = [banner1, banner2, banner3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Rotate banners every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Banner Slides */}
      {banners.map((b, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${b})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="fade-in">Welcome to Serenity Therapists</h1>
          <p className="fade-in delay-1">
            Your journey to wellness begins here. Discover trusted female therapists and start your path to self-care.
          </p>
          <a href="/therapists" className="hero-btn fade-in delay-2">
            Find a Therapist
          </a>
        </div>
      </div>

      {/* Floating Decorative Shapes */}
      <div className="circle" style={{ top: "20%", left: "10%" }}></div>
      <div className="circle" style={{ bottom: "15%", right: "5%" }}></div>

      {/* Dots Navigation */}
      <div className="hero-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
