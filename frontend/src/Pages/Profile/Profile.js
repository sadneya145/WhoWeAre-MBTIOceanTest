import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Profile = () => {
    const { email } = useParams();
    const [user, setUser] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Link to Google Fonts for a better typeface
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            // Clean up the font link on component unmount if necessary
            document.head.removeChild(link);
        };
    }, []); // Run once on mount

    useEffect(() => {
        if (!email) return;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const userRes = await axios.get(
                    `https://whoweare-mbtioceantest-backend.onrender.com/user/${encodeURIComponent(email)}`
                );
                const quizRes = await axios.get(
                    `https://whoweare-mbtioceantest-backend.onrender.com/quizzes/${encodeURIComponent(email)}`
                );

                setUser(userRes.data);
                setQuizzes(quizRes.data.reverse()); // Most recent first
            } catch (err) {
                setError('Failed to fetch profile data. Please try again.');
                console.error('Error fetching profile:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [email]);

    const renderScoreBars = (scores, isMBTI = false) => {
        if (!scores || Object.keys(scores).length === 0) {
            return <p className="no-scores-message">No scores available.</p>;
        }
        return Object.entries(scores).map(([key, val]) => (
            <div key={key} className="score-bar-container-profile">
                <span className="score-label-profile">{key.toUpperCase()}</span>
                <div className="score-bar-profile">
                    <div
                        className={`score-bar-fill-profile ${isMBTI ? 'mbti' : ''}`}
                        style={{ width: `${val}%` }}
                        title={`${val}%`}
                    />
                </div>
                <span className="score-value-profile">{val}%</span>
            </div>
        ));
    };

    if (loading) return <div className="profile-message">Loading profile...</div>;
    if (error) return <div className="profile-message error">{error}</div>;
    if (!user) return <div className="profile-message">User not found.</div>;

    if (quizzes.length === 0)
        return (
            <div className="profile-container-wrapper no-history">
                <div className="profile-header-no-quiz">
                    <Link to={`/home`}>
                        <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email
                                }`}
                            alt="User Avatar"
                            className="user-avatar-large"
                        />
                    </Link>
                    <h2>{user.name || user.email}</h2>
                    <p className="no-quiz-message">No quiz history found yet. Take a quiz to see your profile!</p>
                    <Link to="/quiz" className="start-quiz-btn">Start Your First Quiz</Link>
                </div>
            </div>
        );

    const latestQuiz = quizzes[0];

    return (
        <>      <Header user={user} />
            <div className="profile-container-wrapper">
                <div className="profile-card main-profile-section">
                    <div className="profile-left">
                        <Link to={`/home`}>
                            <img
                                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.displayName || user.email
                                    }`}
                                alt="User Avatar"
                                className="user-avatar"
                            />
                        </Link>
                        <h2 className="user-name-profile">{user.name || user.email}</h2>
                        {/* <p className="user-email">{user.email}</p> */}
                    </div>

                    <div className="profile-main">
                        <div className="type-tags-section">
                            <h4>Your Latest Personality Types</h4>
                            <div className="type-tags">
                                <div className="type-tag">
                                    <span className="tag-label">OCEAN Type:</span>
                                    <span className="tag-value">{latestQuiz.oceanTypeName || 'N/A'}</span>
                                </div>
                                <div className="type-tag">
                                    <span className="tag-label">MBTI Type:</span>
                                    <span className="tag-value">{latestQuiz.mbtiType || 'N/A'}</span>
                                </div>
                            </div>
                        </div>

                        <hr className="divider" />

                        <div className="score-section">
                            <h4>OCEAN Trait Scores</h4>
                            {renderScoreBars(latestQuiz.oceanScores)}
                        </div>

                        <div className="score-section">
                            <h4>MBTI Dimension Scores</h4>
                            {renderScoreBars(latestQuiz.mbtiScores, true)}
                        </div>

                        <Link className="full-report-btn" to={`/report/${latestQuiz._id}`}>
                            View Full Report <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                <div className="profile-card history-section">
                    <h3>Quiz History <i className="fas fa-history"></i></h3>
                    <ul className="history-list">
                        {quizzes.map(q => (
                            <li key={q._id} className="history-item">
                                <div className="history-details">
                                    <span className="history-date">
                                        <i className="far fa-calendar-alt"></i>{' '}
                                        {new Date(q.timestamp).toLocaleDateString()}
                                    </span>
                                    <span className="history-types">
                                        OCEAN: <strong>{q.oceanTypeName || 'N/A'}</strong> | MBTI: <strong>{q.mbtiType || 'N/A'}</strong>
                                    </span>
                                </div>
                                <Link className="mini-report-btn" to={`/report/${q._id}`}>
                                    Full Report <i className="fas fa-external-link-alt"></i>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
