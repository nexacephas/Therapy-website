import React, { useState, useEffect, useContext } from "react";
import "./Hero.css";
import banner1 from "../../assets/Explore the elegance of minimalism with our….jpeg";
import banner2 from "../../assets/When people think about Japan, green tea….jpeg";
import banner3 from "../../assets/How to Do Japanese Shiatsu Self-Massage at Home.jpeg";
import { LanguageContext } from "../../context/LanguageContext";

const banners = [banner1, banner2, banner3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { lang } = useContext(LanguageContext); // Get current language

  // Rotate banners every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Texts in both languages
  const heroTexts = {
    en: {
      title: "Welcome to Serenity Therapists",
      subtitle:
        "Your journey to wellness begins here. Discover trusted female therapists and start your path to self-care.",
      button: "Find a Therapist",
    },
    jp: {
      title: "セレニティセラピストへようこそ",
      subtitle:
        "あなたのウェルネスへの旅はここから始まります。信頼できる女性セラピストを見つけ、自分自身のケアを始めましょう。",
      button: "セラピストを探す",
    },
  };

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
          <h1 className="fade-in">{heroTexts[lang].title}</h1>
          <p className="fade-in delay-1">{heroTexts[lang].subtitle}</p>
          <a href="/therapists" className="hero-btn fade-in delay-2">
            {heroTexts[lang].button}
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
