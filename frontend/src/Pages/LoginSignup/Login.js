import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmail,
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
} from "../../firebaseConfig";
import "./Auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      alert("Login successful!");
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No account found. Please sign up first.");
        navigate("/signup");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert(error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGoogle();

      if (result.isNewUser) {
        alert("Welcome! Redirecting you to signup...");
        setTimeout(() => navigate("/signup"), 500); // delay navigation
      } else {
        alert("Login successful with Google!");
        setTimeout(() => navigate("/home"), 500);
      }
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };



  return (
    <div className="auth-container">
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="glowing-orb"></div>
      <div className="glowing-orb"></div>
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back !</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="loginbutton" type="submit">Log In</button>

        <div className="social-icons">
          <p>or you can sign in with</p>
          <div className="icon-row">
            <button onClick={handleGoogleLogin} aria-label="Sign in with Google">
              <img src="https://img.icons8.com/color/512/google-logo.png" alt="Google" />
            </button>
            <button onClick={signInWithApple} aria-label="Sign in with Apple">
              <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" />
            </button>
            <button onClick={signInWithFacebook} aria-label="Sign in with Facebook">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook" />
            </button>
          </div>
        </div>

        <p className="signup-link">
          New here? <span onClick={() => navigate("/signup")}>Create an account</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
