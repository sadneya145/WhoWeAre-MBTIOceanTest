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

// Auth Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

// Auth Functions
export const registerWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const isNewUser = result._tokenResponse?.isNewUser || false;

    return { user: result.user, isNewUser };
  } catch (error) {
    throw error;
  }
};


export const signInWithFacebook = () => {
  return signInWithPopup(auth, facebookProvider);
};

export const signInWithApple = () => {
  return signInWithPopup(auth, appleProvider);
};

export { auth, app };
