import React, { useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";

const LoginForm = ({ switchForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // integrate OAuth later
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <div className="input-group">
        <FaEnvelope className="input-icon" />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <FaLock className="input-icon" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn-primary">Login</button>

      {/* Social Login */}
      <div className="social-login">
        <button type="button" className="btn-social google" onClick={() => handleSocialLogin("Google")}>
          <FaGoogle /> Login with Google
        </button>
        <button type="button" className="btn-social facebook" onClick={() => handleSocialLogin("Facebook")}>
          <FaFacebookF /> Login with Facebook
        </button>
      </div>

      <div className="auth-links">
        <span onClick={() => switchForm("forgot")}>Forgot Password?</span>
        <span onClick={() => switchForm("register")}>Register</span>
      </div>
    </form>
  );
};

export default LoginForm;
