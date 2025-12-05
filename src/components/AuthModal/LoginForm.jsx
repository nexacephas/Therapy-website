import React, { useState, useContext } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const loginText = {
  en: {
    email: "Email",
    password: "Password",
    loginBtn: "Login",
    forgot: "Forgot Password?",
    register: "Register",
    socialGoogle: "Login with Google",
    socialFacebook: "Login with Facebook"
  },
  jp: {
    email: "メールアドレス",
    password: "パスワード",
    loginBtn: "ログイン",
    forgot: "パスワードを忘れた場合",
    register: "登録",
    socialGoogle: "Googleでログイン",
    socialFacebook: "Facebookでログイン"
  }
};

const LoginForm = ({ switchForm }) => {
  const { lang } = useContext(LanguageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input
          type="email"
          placeholder={loginText[lang].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder={loginText[lang].password}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">{loginText[lang].loginBtn}</button>

      <div className="social-login">
        <button type="button" className="btn-social google" onClick={() => handleSocialLogin("Google")}>
          <FaGoogle /> {loginText[lang].socialGoogle}
        </button>
        <button type="button" className="btn-social facebook" onClick={() => handleSocialLogin("Facebook")}>
          <FaFacebookF /> {loginText[lang].socialFacebook}
        </button>
      </div>

      <div className="auth-links">
        <span onClick={() => switchForm("forgot")}>{loginText[lang].forgot}</span>
        <span onClick={() => switchForm("register")}>{loginText[lang].register}</span>
      </div>
    </form>
  );
};

export default LoginForm;
