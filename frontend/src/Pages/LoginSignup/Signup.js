// Signup.js
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {
  registerWithEmail,
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
} from '../../firebaseConfig'; // make sure this path is correct
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('email'); // email, otp, success
  const navigate = useNavigate();

  const sendOtpToEmail = async () => {
    try {
      const response = await fetch('https://whoweare-mbtioceantest-backend.onrender.com/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        alert('OTP sent to your email.');
        setStep('otp');
      } else {
        alert('Failed to send OTP.');
      }
    } catch (error) {
      alert('Error sending OTP.');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch('https://whoweare-mbtioceantest-backend.onrender.com/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await response.json();
      if (data.success) {
        alert('Email verified!');
        handleSignup(); // Proceed with signup
      } else {
        alert('Invalid OTP.');
      }
    } catch (error) {
      alert('Error verifying OTP.');
    }
  };

  const handleSignup = async () => {
    try {
      await registerWithEmail(email, password);
      alert('Signup successful!');
      setStep('success');
    } catch (error) {
      alert(error.message);
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

      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <h2>Sign Up</h2>

        {step === 'email' && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />

            <button className="otpbutton" type="button" onClick={sendOtpToEmail}>
              Send OTP
            </button>
          </>
        )}

        {step === 'otp' && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
            <button className="verifyotpbutton" type="button" onClick={verifyOtp}>
              Verify OTP & Signup
            </button>
          </>
        )}

        {step === 'success' && <p>✅ Signup successful! You can now login.</p>}

        <div className="social-icons">
          <p>or you can sign in with</p>
          <div className="icon-row">
            <button onClick={signInWithGoogle} aria-label="Sign in with Google">
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
          Already have an account? <span onClick={() => navigate("/")}>Log In</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
