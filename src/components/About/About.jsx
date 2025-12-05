import React, { useContext } from "react";
import "./About.css";
import aboutImage from "../../assets/Explore a collection of 25 inspiring Reiki phrases….jpeg";
import { FaHeart, FaBrain, FaUsers } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext"; // import context

const aboutText = {
  en: {
    heading: "About Serenity Therapists",
    paragraphs: [
      "At Serenity Therapists, we believe that mental wellness is a journey, and every woman deserves a safe, supportive space to thrive. Our platform connects you with trusted female therapists who specialize in mindfulness, CBT, meditation, and holistic care.",
      "Our mission is to provide accessible, elegant, and personalized guidance to help you achieve mental clarity, emotional balance, and overall well-being."
    ],
    values: [
      { icon: <FaHeart />, title: "Compassion", desc: "We prioritize empathy and understanding in every interaction." },
      { icon: <FaBrain />, title: "Expertise", desc: "Professional, licensed therapists with specialized knowledge." },
      { icon: <FaUsers />, title: "Trust", desc: "Safe, confidential, and reliable platform for your well-being." }
    ]
  },
  jp: {
    heading: "セレニティセラピストについて",
    paragraphs: [
      "セレニティセラピストでは、メンタルウェルネスは旅であると考え、すべての女性が安心で支えのある環境で成長できる権利を持っています。当プラットフォームは、マインドフルネス、CBT、瞑想、ホリスティックケアを専門とする信頼できる女性セラピストとつながることができます。",
      "私たちの使命は、精神の明晰さ、感情のバランス、そして全体的なウェルビーイングを達成するために、アクセス可能でエレガントかつパーソナライズされたガイダンスを提供することです。"
    ],
    values: [
      { icon: <FaHeart />, title: "思いやり", desc: "すべてのやり取りにおいて共感と理解を優先します。" },
      { icon: <FaBrain />, title: "専門知識", desc: "専門知識を持つプロフェッショナルで認定済みのセラピスト。" },
      { icon: <FaUsers />, title: "信頼", desc: "あなたのウェルビーイングのために、安全で機密性の高い信頼できるプラットフォーム。" }
    ]
  }
};

const About = () => {
  const { lang } = useContext(LanguageContext); // use global language

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Image */}
        <div className="about-image-wrapper fade-in-left">
          <img src={aboutImage} alt={aboutText[lang].heading} />
        </div>

        {/* Content */}
        <div className="about-content fade-in-right">
          <h2>{aboutText[lang].heading}</h2>
          
          {aboutText[lang].paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* Values / Features */}
          <div className="about-values">
            {aboutText[lang].values.map((v, idx) => (
              <div key={idx} className={`value-card fade-in-up delay-${idx+1}`}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
