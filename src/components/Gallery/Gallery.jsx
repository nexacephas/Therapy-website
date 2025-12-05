import React, { useContext } from "react";
import "./Gallery.css";
import { LanguageContext } from "../../context/LanguageContext"; // import context

// Import images
import img1 from "../../assets/Massage Parlour near me.jpeg";
import img2 from "../../assets/Relax and rejuvenate with our Balinese Massage….jpeg";
import img3 from "../../assets/Japanese Cleaning Routine Tips That Will Transform….jpeg";
import img4 from "../../assets/How to Do Japanese Shiatsu Self-Massage at Home.jpeg";
import img5 from "../../assets/Japanese Cleaning Routine Tips That Will Transform….jpeg";

const galleryImages = [img1, img2, img3, img4, img5];

const galleryText = {
  en: {
    heading: "Our Gallery",
  },
  jp: {
    heading: "ギャラリー",
  },
};

const Gallery = () => {
  const { lang } = useContext(LanguageContext); // get current language

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>{galleryText[lang].heading}</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div
              className="gallery-item fade-in-up"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
