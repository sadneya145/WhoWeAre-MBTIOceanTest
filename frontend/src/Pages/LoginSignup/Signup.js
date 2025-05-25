// Signup.js
import React, {useState} from 'react'
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
      const response = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email}),
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
      const response = await fetch('http://localhost:5000/verify-otp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, otp}),
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

            <button type="button" onClick={sendOtpToEmail}>
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
            <button type="button" onClick={verifyOtp}>
              Verify OTP & Signup
            </button>
          </>
        )}

        {step === 'success' && <p>✅ Signup successful! You can now login.</p>}

        <div className="social-auth">
          <button type="button" onClick={signInWithGoogle}>
            Sign Up with Google
          </button>
          <button type="button" onClick={signInWithFacebook}>
            Sign Up with Facebook
          </button>
          <button type="button" onClick={signInWithApple}>
            Sign Up with Apple
          </button>
        </div>
         <p className="signup-link">
          Already have an account? <span onClick={() => navigate("/")}>Log In</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
