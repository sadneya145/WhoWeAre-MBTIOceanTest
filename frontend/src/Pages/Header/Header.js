import React, { useContext } from 'react';
import './Header.css';
import { useNavigate, Link } from 'react-router-dom';
import mbtiTypes from '../../constants/mbtiTypes';
import { AuthContext } from '../../Context/AuthContext'; // Import context

const Header = () => {
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  // console.log("User in Header:", user);

  return (
    <header className="header">
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src="/logo.png" alt="Logo" style={{ width: '60px', height: '60px' }} />
        <span> Who We Are?</span>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
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
          <Link
            to={`/home/profile/${encodeURIComponent(user.email)}`}
            className="profile-link"
          >
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email}`}
              alt="User Avatar"
              className="user-avatar-home"
            />
            <span className="user-name">{user.displayName || user.email}</span>
          </Link>
        ) : (
          <div className="auth-buttons">
            <button className="btn-outline" onClick={() => navigate('/login')}>Login</button>
            <button className="btn-primary" onClick={() => navigate('/signup')}>Signup</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
