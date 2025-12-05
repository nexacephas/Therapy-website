import React from "react";
import "./Gallery.css";

// Import images
import img1 from "../../assets/massage-4916847_1280.jpg";
import img2 from "../../assets/woman-2722936_1280.jpg";
import img3 from "../../assets/woman-doctor-5321351_1280.jpg";
import img4 from "../../assets/anxiety-8116570_1280.jpg";
import img5 from "../../assets/big banner.jpg";
import img6 from "../../assets/nurse-2019420_1280.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2>Our Gallery</h2>
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
