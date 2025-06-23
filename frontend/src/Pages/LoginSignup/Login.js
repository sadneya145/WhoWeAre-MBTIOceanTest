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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      console.log("Attempting login with email:", email);
      const userCredential = await loginWithEmail(email, password);
      console.log("Login successful:", userCredential.user.uid);
      
      alert("Login successful!");
      navigate("/"); // Navigate to home instead of root
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      
      let errorMessage = "Login failed. Please try again.";
      
      switch (error.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email. Please sign up first.";
          setTimeout(() => {
            if (window.confirm("Would you like to create an account?")) {
              navigate("/signup");
            }
          }, 100);
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/user-disabled":
          errorMessage = "This account has been disabled.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection.";
          break;
        case "auth/invalid-credential":
          errorMessage = "Invalid email or password.";
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = async (signInFunction, providerName) => {
    setLoading(true);
    try {
      console.log(`Attempting ${providerName} login...`);
      const result = await signInFunction();
      console.log(`${providerName} login successful:`, result.user.uid);
      
      // Check if it's a new user or existing user
      const isNewUser = result.isNewUser || result._tokenResponse?.isNewUser || false;
      
      if (isNewUser) {
        alert(`Welcome! Account created successfully with ${providerName}.`);
        navigate("/home"); // New users also go to home
      } else {
        alert(`Welcome back! Login successful with ${providerName}.`);
        navigate("/home");
      }
    } catch (error) {
      console.error(`${providerName} login error:`, error.code, error.message);
      
      let errorMessage = `${providerName} login failed.`;
      
      switch (error.code) {
        case "auth/popup-closed-by-user":
          errorMessage = "Login was cancelled.";
          break;
        case "auth/popup-blocked":
          errorMessage = "Popup was blocked. Please allow popups and try again.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection.";
          break;
        case "auth/account-exists-with-different-credential":
          errorMessage = "An account already exists with this email using a different login method.";
          break;
        case "auth/cancelled-popup-request":
          errorMessage = "Only one popup request is allowed at a time.";
          break;
        case "auth/operation-not-allowed":
          errorMessage = `${providerName} login is not enabled. Please contact support.`;
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    handleSocialLogin(signInWithGoogle, "Google");
  };

  const handleFacebookLogin = () => {
    handleSocialLogin(signInWithFacebook, "Facebook");
  };

  const handleAppleLogin = () => {
    handleSocialLogin(signInWithApple, "Apple");
  };

  const handleForgotPassword = () => {
    if (!email) {
      alert("Please enter your email address first.");
      return;
    }
    
    // You can implement password reset functionality here
    alert("Password reset functionality will be implemented soon. Please contact support for now.");
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
        <h2>Welcome Back!</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          autoComplete="email"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          autoComplete="current-password"
        />

        <button 
          className="loginbutton" 
          type="submit" 
          disabled={loading || !email || !password}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>

        <p className="forgot-password">
          <span onClick={handleForgotPassword} style={{ cursor: 'pointer', color: '#007bff' }}>
            Forgot Password?
          </span>
        </p>

        <div className="social-icons">
          <p>or you can sign in with</p>
          <div className="icon-row">
            <button 
              type="button"
              onClick={handleGoogleLogin} 
              aria-label="Sign in with Google"
              disabled={loading}
            >
              <img 
                src="https://img.icons8.com/color/512/google-logo.png" 
                alt="Google" 
              />
            </button>
            <button 
              type="button"
              onClick={handleAppleLogin} 
              aria-label="Sign in with Apple"
              disabled={loading}
            >
              <img 
                src="https://cdn-icons-png.flaticon.com/512/0/747.png" 
                alt="Apple" 
              />
            </button>
            <button 
              type="button"
              onClick={handleFacebookLogin} 
              aria-label="Sign in with Facebook"
              disabled={loading}
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" 
                alt="Facebook" 
              />
            </button>
          </div>
        </div>

        <p className="signup-link">
          New here? {" "}
          <span 
            onClick={() => navigate("/signup")} 
            style={{ cursor: 'pointer', color: '#007bff' }}
          >
            Create an account
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;