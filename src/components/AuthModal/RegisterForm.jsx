import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { FaGoogle, FaFacebookF } from "react-icons/fa"; // Import missing social icons

const RegisterForm = ({ switchForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register attempt:", { name, email, password });
    // You can replace this with API call
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // You can integrate Google/Facebook OAuth here
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <div className="input-group">
        <FaUser className="input-icon" />
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

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

      <button type="submit" className="btn-primary">Register</button>

      <div className="auth-links">
        <span onClick={() => switchForm("login")}>Already have an account? Login</span>
      </div>

      {/* Social Login */}
      <div className="social-login">
        <button type="button" className="btn-social google" onClick={() => handleSocialLogin("Google")}>
          <FaGoogle /> Sign up with Google
        </button>
        <button type="button" className="btn-social facebook" onClick={() => handleSocialLogin("Facebook")}>
          <FaFacebookF /> Sign up with Facebook
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
