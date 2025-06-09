import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getAuth } from 'firebase/auth';

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
            <button className="btn-primary1">Take the Quiz</button>
            <button className="btn-outline1">Learn More</button>
          </div>
        </div>
      </section>

      <section className="introduction-section">
        <div className="container">
          <h2 className="section-title">Discover Your Personality</h2>
          <p className="section-description">
            Understanding yourself better starts with knowing your personality traits.
            Our AI-powered quiz analyzes your responses to predict your
            <strong> MBTI (Myers-Briggs Type Indicator)</strong> and
            <strong> OCEAN (Big Five) personality traits</strong>.
          </p>

          <div className="intro-cards">
            {/* MBTI Card */}
            <div className="intro-card">
              <h3>What is MBTI?</h3>
              <p>
                The Myers-Briggs Type Indicator (MBTI) categorizes personalities into 16 types based on
                four dichotomies: <strong>Extraversion (E) vs. Introversion (I)</strong>,
                <strong> Sensing (S) vs. Intuition (N)</strong>,
                <strong> Thinking (T) vs. Feeling (F)</strong>, and
                <strong> Judging (J) vs. Perceiving (P)</strong>.
              </p>
            </div>

            {/* OCEAN Card */}
            <div className="intro-card">
              <h3>What is the OCEAN Model?</h3>
              <p>
                The Big Five personality traits (OCEAN) measure:
                <strong> Openness</strong>, <strong>Conscientiousness</strong>,
                <strong> Extraversion</strong>, <strong>Agreeableness</strong>, and
                <strong> Neuroticism</strong>. Unlike MBTI, it represents traits on a spectrum.
              </p>
            </div>

            {/* AI Prediction Card */}
            <div className="intro-card">
              <h3>How Does AI Predict Your Personality?</h3>
              <p>
                Our machine learning model analyzes your quiz responses, compares them with
                psychological research, and predicts your traits with high accuracy.
                The more honest you are, the better the results!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ocean section */}
      <section className="ocean-section1">
        <div className="container">
          <h2 className="section-title">Understanding OCEAN</h2>
          <p className="ocean-intro">
            The OCEAN model, also known as the Big Five, measures five key dimensions of personality:
          </p>
          <div className="ocean-traits1">
            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">O</div>
                <h3 className="trait-name">Openness</h3>
                <p className="trait-description">
                  Your willingness to experience new things, embrace creativity, and think abstractly.
                  People high in openness are curious, imaginative, and enjoy exploring novel ideas and experiences.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://plus.unsplash.com/premium_vector-1721387157785-c0b4a04a3ec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydGlzdGljfGVufDB8fDB8fHww"
                  alt="Openness"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">C</div>
                <h3 className="trait-name">Conscientiousness</h3>
                <p className="trait-description">
                  Your level of organization, self-discipline, and goal-oriented behavior.
                  Highly conscientious individuals are reliable, hardworking, and excellent at planning and following through on commitments.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://plus.unsplash.com/premium_vector-1683121880682-a5ea77411f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1vdGlvbmFsfGVufDB8fDB8fHww"
                  alt="Conscientiousness"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">E</div>
                <h3 className="trait-name">Extraversion</h3>
                <p className="trait-description">
                  Your tendency to seek stimulation from the outside world and social interactions.
                  Extraverts are energized by social situations, enjoy being around people, and tend to be outgoing and assertive.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://plus.unsplash.com/premium_vector-1745406463103-198828bb9d72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG91dGdvaW5nfGVufDB8fDB8fHww"
                  alt="Extraversion"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">A</div>
                <h3 className="trait-name">Agreeableness</h3>
                <p className="trait-description">
                  Your inclination to be compassionate, cooperative, and trusting of others.
                  Agreeable people are empathetic, helpful, and value harmony in relationships and social situations.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/girl-taking-hypnosis-therapy-illustration-download-in-svg-png-gif-file-formats--expression-surprised-personality-abstract-pack-miscellaneous-illustrations-10162948.png"
                  alt="Agreeableness"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">N</div>
                <h3 className="trait-name">Neuroticism</h3>
                <p className="trait-description">
                  Your emotional stability and tendency to experience negative emotions.
                  Those high in neuroticism may be more prone to anxiety, mood swings, and stress responses.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://cdni.iconscout.com/illustration/premium/thumb/girl-in-confusion-illustration-download-svg-png-gif-file-formats--woman-brainstorming-thinking-something-creative-new-think-people-pack-illustrations-4437648.png?f=webp"
                  alt="Neuroticism"
                  className="trait-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MBTI section */}
      <section className="ocean-section1">
        <div className="container">
          <h2 className="section-title">Understanding MBTI</h2>
          <p className="ocean-intro">
            The Myers-Briggs Type Indicator (MBTI) measures four key dimensions of personality preferences:
          </p>
          <div className="ocean-traits1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">E/I</div>
                <h3 className="trait-name">Extraversion vs Introversion</h3>
                <p className="trait-description">
                  How you direct your energy and attention - outward toward the external world or inward toward your inner world.
                  Extraverts gain energy from interaction with others, while introverts recharge through solitude and reflection.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://miro.medium.com/v2/resize:fit:2000/1*pQc7SYlftVwQ-7zpvShfaQ.png"
                  alt="Extraversion vs Introversion"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">S/N</div>
                <h3 className="trait-name">Sensing vs Intuition</h3>
                <p className="trait-description">
                  How you take in and process information - through concrete facts and details or through patterns and possibilities.
                  Sensors focus on present realities and practical applications, while intuitives explore future potential and abstract concepts.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://www.shutterstock.com/image-vector/business-woman-illustration-making-observations-600nw-2130212735.jpg"
                  alt="Sensing vs Intuition"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">T/F</div>
                <h3 className="trait-name">Thinking vs Feeling</h3>
                <p className="trait-description">
                  How you make decisions - through logical analysis and objective criteria or through personal values and emotional considerations.
                  Thinkers prioritize fairness and consistency, while feelers emphasize harmony and individual impact.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://img.freepik.com/premium-vector/woman-thinking-concept_118813-2550.jpg?semt=ais_hybrid&w=740"
                  alt="Thinking vs Feeling"
                  className="trait-image"
                />
              </div>
            </div>

            <div className="trait-card">
              <div className="trait-left">
                <div className="trait-letter">J/P</div>
                <h3 className="trait-name">Judging vs Perceiving</h3>
                <p className="trait-description">
                  How you approach the outside world - with structure and closure or with flexibility and openness.
                  Judgers prefer planned, organized approaches and clear decisions, while perceivers enjoy spontaneity and keeping options open.
                </p>
              </div>
              <div className="trait-right">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXEtNY4qlmlYYpLi2cC--5uHChKBq_ahRqew&s"
                  alt="Judging vs Perceiving"
                  className="trait-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-fixed">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Discover your personality in 3 simple steps</p>

          <div className="timeline-fixed">
            {/* Step 1 */}
            <div className="timeline-step">
              <div className="step-circle">1</div>
              <div className="step-content">
                <h3>Take the Quiz</h3>
                <p>Answer questions about your preferences and behaviors</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="timeline-step">
              <div className="step-circle">2</div>
              <div className="step-content">
                <h3>AI Analysis</h3>
                <p>Our model processes your responses using machine learning</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="timeline-step">
              <div className="step-circle">3</div>
              <div className="step-content">
                <h3>Get Results</h3>
                <p>Receive your detailed MBTI and OCEAN personality report</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Take This Quiz?</h2>

          <div className="benefits-grid">
            {/* Benefit 1 */}
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Free & Fast</h3>
              <p>No long forms! Get results in minutes without any cost.</p>
            </div>

            {/* Benefit 2 */}
            <div className="benefit-card">
              <div className="benefit-icon">🤖</div>
              <h3>AI-Powered Accuracy</h3>
              <p>Our machine learning model provides more accurate results than generic quizzes.</p>
            </div>

            {/* Benefit 3 */}
            <div className="benefit-card">
              <div className="benefit-icon">🔍</div>
              <h3>Understand Yourself Better</h3>
              <p>Gain insights for your career, relationships, and personal growth.</p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="secondary-cta">
            <button className="cta-button">
              Start the Quiz Now →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
