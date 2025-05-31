// components/Header.js
import React from 'react';
import './Header.css';
import {useNavigate, Link} from 'react-router-dom';

const Header = ({user}) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">🧠 Who We Are?</div>

      <nav className="nav-links">
        {/* Personality Types Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Personality Types</button>
          <div className="dropdown-content">
            <Link to="/home/personality/ISTJ">ISTJ</Link>
            <Link to="/home/personality/ISFJ">ISFJ</Link>
            <Link to="/home/personality/INTJ">INTJ</Link>
            <Link to="/home/personality/INFJ">INFJ</Link>
            <Link to="/home/personality/ISTP">ISTP</Link>
            <Link to="/home/personality/ISFP">ISFP</Link>
            <Link to="/home/personality/INTP">INTP</Link>
            <Link to="/home/personality/INFP">INFP</Link>
            <Link to="/home/personality/ESTJ">ESTJ</Link>
            <Link to="/home/personality/ENTJ">ENTJ</Link>
            <Link to="/home/personality/ESFJ">ESFJ</Link>
            <Link to="/home/personality/ENFJ">ENFJ</Link>
            <Link to="/home/personality/ESTP">ESTP</Link>
            <Link to="/home/personality/ESFP">ESFP</Link>
            <Link to="/home/personality/ENTP">ENTP</Link>
            <Link to="/home/personality/ENFP">ENFP</Link>
          </div>
        </div>
        <Link to="/home/quiz">Take Quiz</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <div className="auth-section">
        {user ? (
          <Link
            to={`/home/profile/${encodeURIComponent(user.email)}`}
            className="profile-link"
          >
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                user.displayName || user.email
              }`}
              alt="User Avatar"
              className="user-avatar-home"
            />
            <span className="user-name">{user.displayName || user.email}</span>
          </Link>
        ) : (
          <div className="auth-buttons">
            <button className="btn-outline" onClick={() => navigate('/')}>
              Login
            </button>
            <button className="btn-primary" onClick={() => navigate('/signup')}>
              Signup
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
