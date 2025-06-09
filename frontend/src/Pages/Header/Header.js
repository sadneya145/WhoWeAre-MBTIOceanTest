import React from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';
import mbtiTypes from '../../constants/mbtiTypes'; // Adjusted import path

const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">🧠 Who We Are?</div>

      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/home/quiz">Take Quiz</Link>

        <div className="nav-item dropdown-parent">
          <span className="dropdown-toggle">Personality Types ▾</span>
          <div className="dropdown-menu">
            {mbtiTypes.map((type) => (
              <Link key={type} to={`/personality/${type}`} className="dropdown-item">
                {type}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/home/faq">FAQ</Link>
        <Link to="/home/aboutus">About Us</Link>
      </nav>

      <div className="auth-section">
        {user ? (
          <Link to="/home/profile" className="profile-link">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email}`}
              alt="User Avatar"
              className="user-avatar"
            />
            <span className="user-name">{user.displayName || user.email}</span>
          </Link>
        ) : (
          <div className="auth-buttons">
            <button className="btn-outline" onClick={() => navigate('/')}>Login</button>
            <button className="btn-primary" onClick={() => navigate('/signup')}>Signup</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
