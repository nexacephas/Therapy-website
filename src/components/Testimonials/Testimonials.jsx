import React, { useContext } from "react";
import "./Testimonials.css";
import { LanguageContext } from "../../context/LanguageContext";

// Import images directly
import photo1 from "../../assets/hand-massage-7440712_1280.jpg";
import photo2 from "../../assets/woman-2722936_1280.jpg";
import photo3 from "../../assets/nurse-2019420_1280.jpg";

// Sample data for both languages
const testimonialsData = {
  en: [
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
  ],
  jp: [
    {
      id: 1,
      name: "エミリー R.",
      feedback:
        "セレニティセラピストは、私にぴったりのセラピストを見つける手助けをしてくれました。プラットフォームはエレガントで使いやすいです！",
      photo: photo1,
    },
    {
      id: 2,
      name: "サマンサ K.",
      feedback:
        "サポートが充実した環境と、セラピストのプロフェッショナリズムが素晴らしいです。",
      photo: photo2,
    },
    {
      id: 3,
      name: "ローラ P.",
      feedback:
        "女性に特化したアプローチで、安心して理解してもらえると感じました。強くおすすめします！",
      photo: photo3,
    },
  ],
};

const Testimonials = () => {
  const { lang } = useContext(LanguageContext); // Use global language context

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2>
          {lang === "en" ? "What Our Clients Say" : "お客様の声"}
        </h2>
        <div className="testimonial-cards">
          {testimonialsData[lang].map((t, index) => (
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
