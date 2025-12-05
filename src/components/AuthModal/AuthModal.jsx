import React, { useState } from "react";
import "./AuthModal.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

const AuthModal = ({ isOpen, onClose }) => {
  const [formType, setFormType] = useState("login"); // login / register / forgot

  if (!isOpen) return null;

  const switchForm = (type) => setFormType(type);

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        {formType === "login" && <LoginForm switchForm={switchForm} />}
        {formType === "register" && <RegisterForm switchForm={switchForm} />}
        {formType === "forgot" && <ForgotPasswordForm switchForm={switchForm} />}
      </div>
    </div>
  );
};

export default AuthModal;
