import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Booking.css";
import { LanguageContext } from "../../context/LanguageContext"; // import context

const bookingText = {
  en: {
    heading: "Book Appointment with",
    noTherapist: "No therapist selected. Please go back and select a therapist.",
    placeholders: {
      name: "Your Full Name",
      email: "Your Email",
      date: "Select Date",
      time: "Select Time",
    },
    button: "Confirm Booking",
    alert: (name, date, time) => `Appointment booked with ${name} on ${date} at ${time}`,
    validation: "Please fill in all fields.",
  },
  jp: {
    heading: "予約する",
    noTherapist: "セラピストが選択されていません。戻ってセラピストを選択してください。",
    placeholders: {
      name: "お名前",
      email: "メールアドレス",
      date: "日付を選択",
      time: "時間を選択",
    },
    button: "予約を確定する",
    alert: (name, date, time) => `${name} との予約が ${date} の ${time} に確定しました`,
    validation: "すべての項目を入力してください。",
  },
};

const Booking = () => {
  const { lang } = useContext(LanguageContext); // get current language
  const location = useLocation();
  const navigate = useNavigate();
  const { therapist } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  if (!therapist) {
    return (
      <div className="booking-container">
        <p>{bookingText[lang].noTherapist}</p>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert(bookingText[lang].validation);
      return;
    }

    alert(bookingText[lang].alert(therapist.name, formData.date, formData.time));

    navigate("/"); // redirect
  };

  return (
    <div className="booking-container">
      <h2>
        {bookingText[lang].heading} {therapist.name}
      </h2>
      <form className="booking-form" onSubmit={handleBooking}>
        <input
          type="text"
          name="name"
          placeholder={bookingText[lang].placeholders.name}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={bookingText[lang].placeholders.email}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-primary">
          {bookingText[lang].button}
        </button>
      </form>
    </div>
  );
};

export default Booking;
