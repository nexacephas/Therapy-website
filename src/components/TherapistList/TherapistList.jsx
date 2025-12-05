import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./TherapistList.css";
import therapist1 from "../../assets/2012年8月17日浜松にて新規開院された、玉嶋 血液内科・漢方診療所、玉嶋院長先生です。.jpeg";
import therapist2 from "../../assets/Learn Japanese Online_ SNG Japanese Language School.jpeg";
import { LanguageContext } from "../../context/LanguageContext";

const therapistsData = [
  {
    id: 1,
    name: "Dr. Amelia Rose",
    specialty: "Cognitive Behavioral Therapy",
    photo: therapist1,
    sns: { twitter: "#", linkedin: "#", instagram: "#" },
  },
  {
    id: 2,
    name: "Dr. Sophia Lane",
    specialty: "Mindfulness & Meditation",
    photo: therapist2,
    sns: { twitter: "#", linkedin: "#", instagram: "#" },
  },
];

// Translations
const textContent = {
  en: {
    heading: "Meet Our Therapists",
    placeholder: "Search therapists...",
    bookBtn: "Book Now",
  },
  jp: {
    heading: "セラピスト紹介",
    placeholder: "セラピストを検索...",
    bookBtn: "予約する",
  },
};

const TherapistList = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext); // get current language

  const filteredTherapists = therapistsData.filter((therapist) =>
    therapist.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBook = (therapist) => {
    navigate("/booking", { state: { therapist } });
  };

  return (
    <section className="therapist-section">
      <h2>{textContent[lang].heading}</h2>

      <input
        type="text"
        placeholder={textContent[lang].placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="therapist-search"
      />

      <div className="therapist-cards">
        {filteredTherapists.map((t) => (
          <div className="therapist-card" key={t.id}>
            <img src={t.photo} alt={t.name} className="therapist-photo" />
            <h3>{t.name}</h3>
            <p>{t.specialty}</p>
            <div className="therapist-sns">
              <a href={t.sns.twitter} target="_blank" rel="noreferrer">🐦</a>
              <a href={t.sns.linkedin} target="_blank" rel="noreferrer">💼</a>
              <a href={t.sns.instagram} target="_blank" rel="noreferrer">📸</a>
            </div>
            <button className="btn-primary book-btn" onClick={() => handleBook(t)}>
              {textContent[lang].bookBtn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapistList;
