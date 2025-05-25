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
      setTimeout(() => navigate("/"), 500);
    }
  } catch (error) {
    alert("Google login failed: " + error.message);
  }
};



  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>

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

        <button type="submit">Log In</button>

        <div className="social-auth">
          <button type="button" onClick={handleGoogleLogin}>
            Continue with Google
          </button>
          <button type="button" onClick={signInWithFacebook}>
            Continue with Facebook
          </button>
          <button type="button" onClick={signInWithApple}>
            Continue with Apple
          </button>
        </div>

        <p className="signup-link">
          New here? <span onClick={() => navigate("/signup")}>Create an account</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
