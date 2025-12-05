import React, { useState, useContext } from "react";
import { FaLock } from "react-icons/fa";
import { LanguageContext } from "../../context/LanguageContext";

const resetText = {
  en: { newPassword: "New Password", confirm: "Confirm Password", resetBtn: "Reset Password" },
  jp: { newPassword: "新しいパスワード", confirm: "パスワードを確認", resetBtn: "パスワードをリセット" }
};

const ResetPasswordForm = ({ switchForm }) => {
  const { lang } = useContext(LanguageContext);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirm) return alert(lang === "jp" ? "パスワードが一致しません！" : "Passwords do not match!");
    console.log("Password reset:", password);
    switchForm("login");
  };

  return (
    <form className="auth-form" onSubmit={handleReset}>
      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder={resetText[lang].newPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder={resetText[lang].confirm}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">{resetText[lang].resetBtn}</button>
    </form>
  );
};

export default ResetPasswordForm;
