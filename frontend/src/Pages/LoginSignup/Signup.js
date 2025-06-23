// Signup.js
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
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
  const [loading, setLoading] = useState(false);
  const [skipOtp, setSkipOtp] = useState(false); // Option to skip OTP verification
  const navigate = useNavigate();

  // Test backend connectivity by trying the actual OTP endpoint
  const testBackendConnection = async () => {
    try {
      console.log('Testing backend connection...');
      
      // Test with a simple request to the root or send-otp endpoint
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      try {
        // Try the root endpoint first
        const response = await fetch(
          'https://whoweare-mbtioceantest-backend.onrender.com/',
          {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            signal: controller.signal
          }
        );
        
        clearTimeout(timeoutId);
        console.log('Root endpoint response status:', response.status);
        
        // Accept any response that's not a network error (even 404 means server is up)
        if (response.status < 500) {
          console.log('Backend server is responding');
          return true;
        }
        
        return false;
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        // If root fails, try a HEAD request to send-otp to see if server is up
        try {
          const otpResponse = await fetch(
            'https://whoweare-mbtioceantest-backend.onrender.com/send-otp',
            {
              method: 'HEAD', // Just check if endpoint exists without sending data
              signal: AbortSignal.timeout(5000)
            }
          );
          
          console.log('OTP endpoint HEAD response:', otpResponse.status);
          // If we get any response (even 405 Method Not Allowed), server is up
          return otpResponse.status < 500;
        } catch (headError) {
          console.log('HEAD request also failed:', headError.message);
          return false;
        }
      }
    } catch (error) {
      console.error('Backend connection test failed:', error);
      return false;
    }
  };

  const sendOtpToEmail = async () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      console.log('Testing backend connection...');
      const backendReachable = await testBackendConnection();
      
      if (!backendReachable) {
        console.log('Backend not reachable, offering skip option');
        // Offer option to skip OTP if backend is down
        const skipOtpChoice = window.confirm(
          'Unable to connect to email verification service. This might be because:\n' +
          '• The server is starting up (Render free tier takes time)\n' +
          '• The server is temporarily unavailable\n' +
          '• Network connectivity issues\n\n' +
          'Would you like to proceed without email verification? (You can verify later)'
        );
        
        if (skipOtpChoice) {
          setSkipOtp(true);
          await handleSignup();
          return;
        } else {
          alert('Please try again in a few minutes. If the problem persists, contact support.');
          return;
        }
      }

      console.log('Backend is reachable, sending OTP to:', email);
      
      // Try sending OTP with improved error handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      try {
        const response = await fetch(
          'https://whoweare-mbtioceantest-backend.onrender.com/send-otp',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({ 
              email: email.toLowerCase().trim(),
              timestamp: new Date().toISOString(),
            }),
            signal: controller.signal
          }
        );
        
        clearTimeout(timeoutId);
        
        console.log('OTP Response status:', response.status);
        console.log('OTP Response headers:', [...response.headers.entries()]);

        // Handle different response types
        let data;
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          // If response is not JSON, get text content
          const textResponse = await response.text();
          console.log('Non-JSON response:', textResponse);
          data = { message: textResponse };
        }

        console.log('OTP Response data:', data);

        if (response.ok) {
          // Check for success in multiple ways
          if (data.success === true || data.success === 'true' || response.status === 200) {
            alert('OTP sent to your email. Please check your inbox and spam folder.');
            setStep('otp');
            return;
          }
        }
        
        throw new Error(`Server responded with ${response.status}: ${data.message || data.error || 'Unknown error'}`);
        
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out after 30 seconds');
        }
        throw fetchError;
      }

    } catch (error) {
      console.error('Error sending OTP:', error);
      
      let errorMessage = 'Failed to send OTP. ';
      
      if (error.message.includes('timeout') || error.message.includes('AbortError')) {
        errorMessage += 'The request took too long. ';
      } else if (error.message.includes('fetch')) {
        errorMessage += 'Network connection error. ';
      } else if (error.message.includes('500')) {
        errorMessage += 'Server error occurred. ';
      } else if (error.message.includes('400')) {
        errorMessage += 'Invalid request format. ';
      } else if (error.message.includes('429')) {
        errorMessage += 'Too many requests. Please wait and try again. ';
      } else {
        errorMessage += error.message;
      }

      // Always offer fallback option for any error
      const skipOtpChoice = window.confirm(
        errorMessage + '\n\nWould you like to proceed without email verification? (You can verify later in your profile)'
      );
      
      if (skipOtpChoice) {
        setSkipOtp(true);
        await handleSignup();
      }
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (!otp) {
      alert('Please enter the OTP.');
      return;
    }

    if (otp.length !== 6) {
      alert('OTP should be 6 digits long.');
      return;
    }

    setLoading(true);
    try {
      console.log('Verifying OTP...');

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      try {
        const response = await fetch(
          'https://whoweare-mbtioceantest-backend.onrender.com/verify-otp',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({ 
              email: email.toLowerCase().trim(), 
              otp: otp.trim(),
              timestamp: new Date().toISOString(),
            }),
            signal: controller.signal
          }
        );
        
        clearTimeout(timeoutId);
        
        console.log('OTP Verification Response status:', response.status);

        let data;
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          const textResponse = await response.text();
          console.log('Non-JSON verification response:', textResponse);
          data = { message: textResponse };
        }

        console.log('OTP Verification Response data:', data);

        if (response.ok && (data.success === true || data.success === 'true')) {
          alert('Email verified successfully!');
          await handleSignup(); // Proceed with signup
        } else {
          let errorMessage = data.message || data.error || 'Invalid OTP.';
          
          if (response.status === 400) {
            errorMessage = 'Invalid or expired OTP. Please try again or request a new OTP.';
          } else if (response.status === 429) {
            errorMessage = 'Too many verification attempts. Please wait and try again.';
          }

          alert(errorMessage);
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out after 30 seconds');
        }
        throw fetchError;
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      
      let errorMessage = 'Error verifying OTP: ';
      
      if (error.message.includes('timeout') || error.message.includes('AbortError')) {
        errorMessage += 'Request timed out. Please try again.';
      } else {
        errorMessage += error.message;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      console.log('Creating Firebase account...');
      const userCredential = await registerWithEmail(email, password);
      console.log('User registered successfully:', userCredential.user.uid);
      
      if (skipOtp) {
        alert('Signup successful! Email verification was skipped - you can verify later in your profile.');
      } else {
        alert('Signup successful! Your email has been verified.');
      }
      
      setStep('success');
      
      // Redirect to home page after a short delay
      setTimeout(() => {
        navigate('/'); // Change this to your desired home route
      }, 1500);
      
    } catch (error) {
      console.error('Signup error:', error);
      
      // Handle specific Firebase errors
      let errorMessage = 'Signup failed. Please try again.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'This email is already registered. Please use a different email or try logging in.';
          setTimeout(() => {
            if (window.confirm('Would you like to go to the login page?')) {
              navigate('/login');
            }
          }, 100);
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak. Please use at least 6 characters.';
          setStep('email'); // Go back to email step
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address.';
          setStep('email'); // Go back to email step
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection and try again.';
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (signInFunction, providerName) => {
    setLoading(true);
    try {
      const result = await signInFunction();
      console.log(`${providerName} sign-in successful:`, result);
      
      // Check if it's a new user or existing user
      const isNewUser = result.isNewUser || result._tokenResponse?.isNewUser || false;
      
      if (isNewUser) {
        alert('Account created successfully!');
      } else {
        alert('Welcome back!');
      }
      
      // Redirect to home page
      navigate('/');
      
    } catch (error) {
      console.error(`${providerName} sign-in error:`, error);
      
      let errorMessage = `${providerName} sign-in failed.`;
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign-in was cancelled.';
          break;
        case 'auth/popup-blocked':
          errorMessage = 'Popup was blocked. Please allow popups and try again.';
          break;
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your connection.';
          break;
        case 'auth/account-exists-with-different-credential':
          errorMessage = 'An account already exists with this email using a different sign-in method.';
          break;
        default:
          errorMessage = error.message || errorMessage;
      }
      
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    console.log('Resending OTP...');
    await sendOtpToEmail();
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
              disabled={loading}
            />

            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              required
              minLength="6"
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />

            <button
              className="otpbutton"
              type="button"
              onClick={sendOtpToEmail}
              disabled={loading || !email || !password}
            >
              {loading ? 'Processing...' : 'Send OTP'}
            </button>

            {/* <button
              className="skip-otp-button"
              type="button"
              onClick={() => {
                setSkipOtp(true);
                handleSignup();
              }}
              disabled={loading || !email || !password}
              style={{ 
                marginTop: '10px', 
                backgroundColor: '#6c757d',
                fontSize: '14px'
              }}
            >
              Skip Email Verification & Sign Up
            </button> */}

            {/* <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
              We'll send a verification code to your email address.
              <br />
              <em>Note: If email verification is unavailable, you can skip it and verify later.</em>
            </p> */}
          </>
        )}

        {step === 'otp' && (
          <>
            <p>Please check your email ({email}) for the OTP code.</p>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              required
              disabled={loading}
              maxLength="6"
            />
            <button
              className="verifyotpbutton"
              type="button"
              onClick={verifyOtp}
              disabled={loading || otp.length !== 6}
            >
              {loading ? 'Verifying...' : 'Verify OTP & Signup'}
            </button>

            {/* <div style={{ marginTop: '15px' }}>
              <button
                type="button"
                onClick={resendOtp}
                className="resend-button"
                disabled={loading}
              >
                Resend OTP
              </button>
              <button
                type="button"
                onClick={() => setStep('email')}
                className="back-button"
                disabled={loading}
                style={{ marginLeft: '10px' }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => {
                  setSkipOtp(true);
                  handleSignup();
                }}
                className="skip-button"
                disabled={loading}
                style={{ marginLeft: '10px', fontSize: '12px' }}
              >
                Skip Verification
              </button>
            </div> */}
          </>
        )}

        {step === 'success' && (
          <div className="success-message">
            <p>✅ Signup successful!</p>
            <p>Redirecting to home page...</p>
          </div>
        )}

        <div className="social-icons">
          <p>or you can sign up with</p>
          <div className="icon-row">
            <button 
              type="button"
              onClick={() => handleSocialSignIn(signInWithGoogle, 'Google')} 
              aria-label="Sign up with Google"
              disabled={loading}
            >
              <img
                src="https://img.icons8.com/color/512/google-logo.png"
                alt="Google"
              />
            </button>
            <button 
              type="button"
              onClick={() => handleSocialSignIn(signInWithApple, 'Apple')} 
              aria-label="Sign up with Apple"
              disabled={loading}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/747.png"
                alt="Apple"
              />
            </button>
            <button
              type="button"
              onClick={() => handleSocialSignIn(signInWithFacebook, 'Facebook')}
              aria-label="Sign up with Facebook"
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
          Already have an account?{' '}
          <span onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
            Log In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;