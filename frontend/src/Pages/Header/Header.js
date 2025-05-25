// components/Header.js
import React from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">🧠 Who We Are?</div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/quiz">Take Quiz</Link>
        <Link to="/about">About Us</Link>
      </nav>

      <div className="auth-section">
        {user ? (
          <Link to="/home/profile" className="profile-link">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email}`}
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="user-name">
              {user.displayName || user.email}
            </span>
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
