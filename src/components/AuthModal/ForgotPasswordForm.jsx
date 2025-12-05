import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

const ForgotPasswordForm = ({ switchForm }) => {
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
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">Send Reset Link</button>

      <div className="auth-links">
        <span onClick={() => switchForm("login")}>Back to Login</span>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;