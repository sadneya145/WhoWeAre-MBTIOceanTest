import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {useRef} from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Profile = () => {
  const {email} = useParams();
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const resultRef = useRef(null);

  //   const downloadQuizData = quiz => {
  //     const filename = `quiz-report-${new Date(
  //       quiz.timestamp
  //     ).toISOString()}.json`;
  //     const data = {
  //       id: quiz._id,
  //       date: new Date(quiz.timestamp).toLocaleString(),
  //       oceanType: quiz.oceanTypeName,
  //       mbtiType: quiz.mbtiType,
  //       oceanScores: quiz.oceanScores,
  //       mbtiScores: quiz.mbtiScores,
  //     };

  //     const blob = new Blob([JSON.stringify(data, null, 2)], {
  //       type: 'application/json',
  //     });
  //     const link = document.createElement('a');
  //     link.href = URL.createObjectURL(blob);
  //     link.download = filename;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  const downloadPDF = quizId => {
    const element = document.getElementById(`quiz-report-${quizId}`);
    if (!element) {
      console.error('Quiz report element not found.');
      return;
    }

    html2canvas(element, {scale: 2, useCORS: true})
      .then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('personality-report.pdf');
      })
      .catch(error => {
        console.error('Error generating PDF:', error);
      });
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    if (!email) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const userRes = await axios.get(
          `https://whoweare-mbtioceantest-backend.onrender.com/user/${encodeURIComponent(
            email
          )}`
        );
        const quizRes = await axios.get(
          `https://whoweare-mbtioceantest-results.onrender.com/quizzes/${encodeURIComponent(
            email
          )}`
        );
        setUser(userRes.data);
        setQuizzes(quizRes.data.reverse());
      } catch (err) {
        setError('Failed to fetch profile data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [email]);

  const renderScoreGraph = scores => {
    if (!scores || Object.keys(scores).length === 0) {
      return <p className="no-scores-message">No scores available.</p>;
    }

    const scoreArray = Object.entries(scores).map(([trait, value]) => ({
      trait,
      value: Number(value) * 10,
    }));

    return (
      <div className="scores-list">
        {scoreArray.map((item, index) => (
          <div key={index} className="score-item">
            <div className="score-label">
              <span className="trait-name">{item.trait}</span>
              <span className="score-value">{item.value}%</span>
            </div>
            <div className="score-bar">
              <div
                className="score-fill"
                style={{width: `${item.value}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) return <div className="profile-message">Loading profile...</div>;
  if (error) return <div className="profile-message error">{error}</div>;
  if (!user) return <div className="profile-message">User not found.</div>;

  const latestQuiz = quizzes[0];

  return (
    <>
      <Header user={user} />
      <div className="profile-container-wrapper">
        <div className="profile-grid">
          <div className="profile-card user-info-card">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                user.displayName || user.email
              }`}
              alt="User Avatar"
              className="user-avatar-big"
            />
            <h2>{user.name || user.email}</h2>
            {/* <p className="user-email-subtext">{user.email}</p> */}
          </div>

          <div className="profile-card type-summary-card">
            <h3>Your Latest Personality Types</h3>
            <div className="type-badges">
              <div className="type-badge">
                <span className="label">OCEAN</span>
                <span className="value">
                  {latestQuiz?.oceanTypeName || 'N/A'}
                </span>
              </div>
              <div className="type-badge">
                <span className="label">MBTI</span>
                <span className="value">{latestQuiz?.mbtiType || 'N/A'}</span>
              </div>
            </div>
            {latestQuiz?._id && (
              <Link
                className="full-report-btn"
                to={`/report/${latestQuiz._id}`}
              >
                View Full Report →
              </Link>
            )}
          </div>

          <div className="profile-card score-section">
            <h3>OCEAN Trait Scores</h3>
            {renderScoreGraph(latestQuiz?.oceanScores)}
          </div>

          {/* <div className="profile-card score-section">
            <h3>MBTI Dimension Scores</h3>
            {renderScoreGraph(latestQuiz?.mbtiScores)}
          </div> */}

          <div className="profile-card history-section">
            <h3>Quiz History</h3>
            <ul className="history-list">
              {quizzes.map(q => (
                <li key={q._id} className="history-item">
                  <div className="history-info">
                    <span>{new Date(q.timestamp).toLocaleDateString()}</span>
                    <span>
                      OCEAN: <strong>{q.oceanTypeName}</strong> | MBTI:{' '}
                      <strong>{q.mbtiType}</strong>
                    </span>
                  </div>
                  <button
                    className="download-btn"
                    onClick={() => downloadPDF(q._id)}
                  >
                    📄 Download Personality Report
                  </button>

                  {/* 🔽 Hidden report content to be used for PDF */}
                  <div
                    id={`quiz-report-${q._id}`}
                    style={{
                      position: 'absolute',
                      left: '-9999px',
                      top: '0',
                      width: '800px',
                      backgroundColor: 'white',
                      padding: '20px',
                    }}
                  >
                    <h2>Personality Report</h2>
                    <p>
                      <strong>Date:</strong>{' '}
                      {new Date(q.timestamp).toLocaleString()}
                    </p>
                    <p>
                      <strong>OCEAN Type:</strong> {q.oceanTypeName}
                    </p>
                    <p>
                      <strong>MBTI Type:</strong> {q.mbtiType}
                    </p>

                    <h3>OCEAN Trait Scores</h3>
                    {renderScoreGraph(q.oceanScores)}

                    <h3>MBTI Scores</h3>
                    {renderScoreGraph(q.mbtiScores)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
