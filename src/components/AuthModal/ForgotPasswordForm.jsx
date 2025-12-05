import React, { useState, useContext } from "react";
import { FaEnvelope } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const forgotText = {
  en: { placeholder: "Enter your email", sendBtn: "Send Reset Link", back: "Back to Login" },
  jp: { placeholder: "メールアドレスを入力", sendBtn: "リセットリンクを送信", back: "ログインに戻る" }
};

const ForgotPasswordForm = ({ switchForm }) => {
  const { lang } = useContext(LanguageContext);
  const [email, setEmail] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    console.log("Send reset link to:", email);
    switchForm("reset");
  };

  return (
    <form className="auth-form" onSubmit={handleForgot}>
      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input
          type="email"
          placeholder={forgotText[lang].placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">{forgotText[lang].sendBtn}</button>

      <div className="auth-links">
        <span onClick={() => switchForm("login")}>{forgotText[lang].back}</span>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
