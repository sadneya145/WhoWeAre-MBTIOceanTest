import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OceanQuiz.css';
import { getAuth } from 'firebase/auth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const OceanQuiz = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  const sections = [
    {
      title: "Extraversion",
      description: "How you interact with the world and gain energy",
      questions: [
        { id: 'EXT1', text: 'I am the life of the party' },
        { id: 'EXT2', text: "I don't talk a lot" },
        { id: 'EXT3', text: 'I feel comfortable around people' },
        { id: 'EXT4', text: 'I keep in the background' },
        { id: 'EXT5', text: 'I start conversations' },
        { id: 'EXT6', text: 'I have little to say' },
        { id: 'EXT7', text: 'I talk to a lot of different people at parties' },
        { id: 'EXT8', text: "I don't like to draw attention to myself" },
        { id: 'EXT9', text: "I don't mind being the center of attention" },
        { id: 'EXT10', text: 'I am quiet around strangers' }
      ]
    },
    {
      title: "Emotional Stability",
      description: "How you handle stress and emotions",
      questions: [
        { id: 'EST1', text: 'I get stressed out easily' },
        { id: 'EST2', text: 'I am relaxed most of the time' },
        { id: 'EST3', text: 'I worry about things' },
        { id: 'EST4', text: 'I seldom feel blue' },
        { id: 'EST5', text: 'I am easily disturbed' },
        { id: 'EST6', text: 'I get upset easily' },
        { id: 'EST7', text: 'I change my mood a lot' },
        { id: 'EST8', text: 'I have frequent mood swings' },
        { id: 'EST9', text: 'I get irritated easily' },
        { id: 'EST10', text: 'I often feel blue' }
      ]
    },
    {
      title: "Agreeableness",
      description: "How you relate to and care about others",
      questions: [
        { id: 'AGR1', text: 'I feel little concern for others' },
        { id: 'AGR2', text: 'I am interested in people' },
        { id: 'AGR3', text: 'I insult people' },
        { id: 'AGR4', text: "I sympathize with others' feelings" },
        { id: 'AGR5', text: "I am not interested in other people's problems" },
        { id: 'AGR6', text: 'I have a soft heart' },
        { id: 'AGR7', text: 'I am not really interested in others' },
        { id: 'AGR8', text: 'I take time out for others' },
        { id: 'AGR9', text: "I feel others' emotions" },
        { id: 'AGR10', text: 'I make people feel at ease' }
      ]
    },
    {
      title: "Conscientiousness",
      description: "How organized and disciplined you are",
      questions: [
        { id: 'CSN1', text: 'I am always prepared' },
        { id: 'CSN2', text: 'I leave my belongings around' },
        { id: 'CSN3', text: 'I pay attention to details' },
        { id: 'CSN4', text: 'I make a mess of things' },
        { id: 'CSN5', text: 'I get chores done right away' },
        { id: 'CSN6', text: 'I often forget to put things back in their proper place' },
        { id: 'CSN7', text: 'I like order' },
        { id: 'CSN8', text: 'I shirk my duties' },
        { id: 'CSN9', text: 'I follow a schedule' },
        { id: 'CSN10', text: 'I am exacting in my work' }
      ]
    },
    {
      title: "Openness",
      description: "How open you are to new experiences and ideas",
      questions: [
        { id: 'OPN1', text: 'I have a rich vocabulary' },
        { id: 'OPN2', text: 'I have difficulty understanding abstract ideas' },
        { id: 'OPN3', text: 'I have a vivid imagination' },
        { id: 'OPN4', text: 'I am not interested in abstract ideas' },
        { id: 'OPN5', text: 'I have excellent ideas' },
        { id: 'OPN6', text: 'I do not have a good imagination' },
        { id: 'OPN7', text: 'I am quick to understand things' },
        { id: 'OPN8', text: 'I use difficult words' },
        { id: 'OPN9', text: 'I spend time reflecting on things' },
        { id: 'OPN10', text: 'I am full of ideas' }
      ]
    }
  ];

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSection]);

  const handleResponse = (questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };


const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    const response = await fetch('http://localhost:4000/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: user?.email,
        answers: responses })
    });

    const data = await response.json();

    // Optional: Save to localStorage if needed
    localStorage.setItem('oceanResults', JSON.stringify(data));

    // Navigate to result page with state
    navigate('/home/results', { state: { resultData: data } });
  } catch (error) {
    console.error('Error submitting quiz:', error);
    alert('Submission failed. Try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const isCurrentSectionComplete = () => {
    const currentQuestions = sections[currentSection].questions;
    return currentQuestions.every(q => responses[q.id] !== undefined);
  };

  const getProgress = () => {
    return ((currentSection + 1) / sections.length) * 100;
  };

  const RadioButton = ({ questionId, value, selected, onChange }) => {
    const labels = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];

    return (
      <div className="radio-button-container">
        <button
          onClick={() => onChange(questionId, value)}
          className={`radio-button ${selected ? 'selected' : ''}`}
        >
          {selected && <div className="radio-button-inner"></div>}
        </button>
        <span className="radio-label">{labels[value - 1]}</span>
      </div>
    );
  };

  return (
    <><Header user={user} />
      <div className={`ocean-quiz-container section-${currentSection}`}>
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-text">Progress</span>
            <span className="progress-text">{currentSection + 1} of {sections.length}</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${getProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Current Section */}
        <div className="quiz-card">
          <div className="section-header">
            <h2 className="section-title-quiz">{sections[currentSection].title}</h2>
            <p className="section-description">{sections[currentSection].description}</p>
          </div>

          {/* Questions */}
          <div className="questions-container">
            {sections[currentSection].questions.map((question, index) => (
              <div key={question.id} className="question-item">
                <div className="question-text">
                  <p> {question.text}</p>
                </div>

                {/* Rating Scale */}
                <div className="rating-scale">
                  <span className="scale-label">Disagree</span>
                  <div className="radio-buttons">
                    {[1, 2, 3, 4, 5].map(value => (
                      <RadioButton
                        key={value}
                        questionId={question.id}
                        value={value}
                        selected={responses[question.id] === value}
                        onChange={handleResponse}
                      />
                    ))}
                  </div>
                  <span className="scale-label">Agree</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="navigation-section">
          {currentSection < sections.length - 1 ? (
            <button
              onClick={handleNext}
              disabled={!isCurrentSectionComplete()}
              className="nav-button next-button"
            >
              <span>Next Section</span>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isCurrentSectionComplete()}
              className="nav-button submit-button"
            >
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Submit Quiz</span>
            </button>
          )}
        </div>

        {/* Section Navigation Dots */}
        <div className="dots-container">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSection
                ? 'current'
                : index < currentSection
                  ? 'completed'
                  : 'pending'
                }`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OceanQuiz;
