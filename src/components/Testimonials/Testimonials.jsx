import React from "react";
import "./Testimonials.css";

// Import images directly
import photo1 from "../../assets/hand-massage-7440712_1280.jpg";
import photo2 from "../../assets/woman-2722936_1280.jpg";
import photo3 from "../../assets/nurse-2019420_1280.jpg";

// Sample data with imported images
const testimonialsData = [
  {
    id: 1,
    name: "Emily R.",
    feedback:
      "Serenity Therapists helped me find the perfect therapist. The platform is elegant and easy to use!",
    photo: photo1,
  },
  {
    id: 2,
    name: "Samantha K.",
    feedback:
      "I love the supportive environment and the professionalism of the therapists here.",
    photo: photo2,
  },
  {
    id: 3,
    name: "Laura P.",
    feedback:
      "The female-focused approach made me feel safe and understood. Highly recommended!",
    photo: photo3,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          {testimonialsData.map((t, index) => (
            <div
              className="testimonial-card fade-in-up"
              key={t.id}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img src={t.photo} alt={t.name} className="testimonial-photo" />
              <p className="testimonial-feedback">"{t.feedback}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
