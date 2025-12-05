import React, { useState } from "react";
import "./TherapistList.css";
import therapist1 from "../../assets/nurse-2019420_1280.jpg";
import therapist2 from "../../assets/woman-doctor-5321351_1280.jpg";

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


const TherapistList = () => {
  const [search, setSearch] = useState("");

  const filteredTherapists = therapistsData.filter((therapist) =>
    therapist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="therapist-section">
      <h2>Meet Our Therapists</h2>
      <input
        type="text"
        placeholder="Search therapists..."
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default TherapistList;
