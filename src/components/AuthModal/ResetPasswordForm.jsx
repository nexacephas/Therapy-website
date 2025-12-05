import React, { useState } from "react";
import { FaLock } from "react-icons/fa";

const ResetPasswordForm = ({ switchForm }) => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords do not match!");
    console.log("Password reset:", password);
    switchForm("login");
  };

  return (
    <form className="auth-form" onSubmit={handleReset}>
      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
