// firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  connectAuthEmulator
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBUgnLsPyicIJaOQkvGJCK_tXA38oviZM",
  authDomain: "mbtioceantest.firebaseapp.com",
  projectId: "mbtioceantest",
  storageBucket: "mbtioceantest.firebasestorage.app",
  messagingSenderId: "202698648616",
  appId: "1:202698648616:web:0a50fe3dad57acaea7591d",
  measurementId: "G-Z19MM3GXZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Auth Providers with improved configuration
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

const facebookProvider = new FacebookAuthProvider();
facebookProvider.addScope('email');

const appleProvider = new OAuthProvider("apple.com");
appleProvider.addScope('email');
appleProvider.addScope('name');

// Enhanced Auth Functions with better error handling
export const registerWithEmail = async (email, password) => {
  try {
    console.log('Attempting to register user with email:', email);
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log('User registered successfully:', userCredential.user.uid);
    return userCredential;
  } catch (error) {
    console.error('Registration error:', error.code, error.message);
    throw error;
  }
};

export const loginWithEmail = async (email, password) => {
  try {
    console.log('Attempting to login user with email:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in successfully:', userCredential.user.uid);
    return userCredential;
  } catch (error) {
    console.error('Login error:', error.code, error.message);
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    console.log('Attempting Google sign-in...');
    
    // Set custom parameters for better popup handling
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    
    const result = await signInWithPopup(auth, googleProvider);
    console.log('Google sign-in successful:', result.user.uid);
    
    // Get additional user info
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    // Check if user is new
    const isNewUser = result._tokenResponse?.isNewUser || false;
    
    return { 
      user: result.user, 
      isNewUser,
      token,
      credential 
    };
  } catch (error) {
    console.error('Google sign-in error:', error.code, error.message);
    throw error;
  }
};

export const signInWithFacebook = async () => {
  try {
    console.log('Attempting Facebook sign-in...');
    
    const result = await signInWithPopup(auth, facebookProvider);
    console.log('Facebook sign-in successful:', result.user.uid);
    
    // Get additional user info
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    // Check if user is new
    const isNewUser = result._tokenResponse?.isNewUser || false;
    
    return { 
      user: result.user, 
      isNewUser,
      token,
      credential 
    };
  } catch (error) {
    console.error('Facebook sign-in error:', error.code, error.message);
    throw error;
  }
};

export const signInWithApple = async () => {
  try {
    console.log('Attempting Apple sign-in...');
    
    const result = await signInWithPopup(auth, appleProvider);
    console.log('Apple sign-in successful:', result.user.uid);
    
    // Get additional user info
    const credential = OAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    
    // Check if user is new
    const isNewUser = result._tokenResponse?.isNewUser || false;
    
    return { 
      user: result.user, 
      isNewUser,
      token,
      credential 
    };
  } catch (error) {
    console.error('Apple sign-in error:', error.code, error.message);
    throw error;
  }
};

// Helper function to check auth state
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

// Helper function to sign out
export const signOut = async () => {
  try {
    await auth.signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
};

export { auth, app };