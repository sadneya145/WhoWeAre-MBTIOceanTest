// pages/Home.js
import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import {getAuth} from 'firebase/auth';

const Home = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <>
      <Header user={user} />
      <section className="home-hero">
        <div className="hero-content">
          <h1>
            Discover Your <span>True Personality</span>
          </h1>
          <p>
            Dive into the science of MBTI & OCEAN traits to explore who you
            really are and connect with compatible minds.
          </p>
          <div className="home-buttons">
            <button className="btn-primary">Take the Quiz</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
        <img
          src="https://img.freepik.com/free-vector/flat-style-personality-types-illustration_23-2149237130.jpg"
          alt="personality"
          className="hero-img"
        />
      </section>
    </>
  );
};

export default Home;
