import React, { useState, useContext } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const registerText = {
  en: {
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    registerBtn: "Register",
    already: "Already have an account? Login",
    socialGoogle: "Sign up with Google",
    socialFacebook: "Sign up with Facebook"
  },
  jp: {
    fullName: "氏名",
    email: "メールアドレス",
    password: "パスワード",
    registerBtn: "登録",
    already: "すでにアカウントをお持ちですか？ログイン",
    socialGoogle: "Googleで登録",
    socialFacebook: "Facebookで登録"
  }
};

const RegisterForm = ({ switchForm }) => {
  const { lang } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register attempt:", { name, email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <div className="input-group">
        <FaUser className="input-icon" />
        <input
          type="text"
          placeholder={registerText[lang].fullName}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input
          type="email"
          placeholder={registerText[lang].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder={registerText[lang].password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">{registerText[lang].registerBtn}</button>

      <div className="auth-links">
        <span onClick={() => switchForm("login")}>{registerText[lang].already}</span>
      </div>

      <div className="social-login">
        <button type="button" className="btn-social google" onClick={() => handleSocialLogin("Google")}>
          <FaGoogle /> {registerText[lang].socialGoogle}
        </button>
        <button type="button" className="btn-social facebook" onClick={() => handleSocialLogin("Facebook")}>
          <FaFacebookF /> {registerText[lang].socialFacebook}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
