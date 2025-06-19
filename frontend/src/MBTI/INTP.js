import React from 'react';
import './style.css';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const INTP = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container intp-theme">
        {/* Title and Subtitle */}
        <header className="personality-header">
          <h1 className="personality-title">INTP – The Thinker</h1>
          <p className="personality-subtitle">
            Analytical minds who explore ideas, patterns, and theories with
            logic and creativity.
          </p>
        </header>

        {/* Famous INTPs Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Famous INTPs</h2>
          <p className="section-description">
            Brilliant and curious thinkers who shaped science, art, and ideas.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/albert-einstein-gettyimages-123395987.jpg"
                alt="Albert Einstein"
                className="character-image"
              />
              <h3 className="character-name">Albert Einstein</h3>
              <p className="character-description">
                Visionary physicist known for his groundbreaking theories and
                independent thinking.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/bill-gates-discusses-his-new-book-how-to-prevent-the-next-news-photo-1742328104.pjpeg"
                alt="Bill Gates"
                className="character-image"
              />
              <h3 className="character-name">Bill Gates</h3>
              <p className="character-description">
                Analytical innovator who revolutionized technology with logic
                and foresight.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BZDQ3OWVkOGUtMjY1Yi00MjNjLThiMTYtYWMyN2ZhMmE4ZTA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                alt="Tina Fey"
                className="character-image"
              />
              <h3 className="character-name">Tina Fey</h3>
              <p className="character-description">
                Witty and inventive writer who blends humor with intelligent
                insight.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Who Are INTPs?</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                INTPs are independent and inventive thinkers, constantly
                analyzing the world around them.
              </p>
              <p>
                Known for their deep curiosity and love of ideas, they enjoy
                theories, logic, and abstract concepts.
              </p>
            </div>
            <img
              src="https://img.freepik.com/premium-vector/thinking-abstract-concept-vector-illustration_107173-24960.jpg?semt=ais_hybrid&w=740"
              alt="INTP introduction - abstract brain illustration with ideas"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Strengths & Challenges</h2>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Logical:</strong> Enjoys problem-solving and rational
                  thinking.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Innovative:</strong> Thinks outside the box and
                  embraces new theories.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Curious:</strong> Always seeking new knowledge and
                  insights.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Independent:</strong> Values autonomy and personal
                  freedom.
                </li>
              </ul>

              <h3 className="subsection-title">Challenges</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Socially Withdrawn:</strong> May struggle in
                  emotionally charged or social situations.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overthinker:</strong> Tends to analyze too much,
                  leading to indecision.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Insensitive:</strong> May unintentionally overlook
                  emotional needs of others.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Dislikes Routine:</strong> Avoids structured or
                  repetitive tasks.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Career Compass</h2>
          <p className="section-description">
            INTPs excel in careers that value abstract thinking, creativity, and
            independence.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <ul className="career-list">
                <li>
                  <strong>Scientist / Researcher:</strong> A perfect outlet for
                  curiosity and exploration.
                </li>
                <li>
                  <strong>Software Developer:</strong> Solving logic-based
                  problems in creative ways.
                </li>
                <li>
                  <strong>Philosopher / Theorist:</strong> Embraces abstract
                  ideas and big questions.
                </li>
                <li>
                  <strong>Inventor / Engineer:</strong> Designs unique solutions
                  to real-world challenges.
                </li>
                <li>
                  <strong>Writer / Novelist:</strong> Expresses imaginative and
                  intellectual depth.
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg?semt=ais_items_boosted&w=740"
              alt="INTP career image - tech and creativity"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Inside the INTP Mind</h2>
          <p className="section-description">
            Get a glimpse into the logic, wonder, and wit of INTP personalities.
          </p>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GcOeGJ5hFA0?si=ILRHWZWk7d4gkQAy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>
        {/* Famous INTPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable INTPs in History & Fiction</h2>
          <p className="section-description">
            Visionary thinkers and logical analysts, INTPs thrive on ideas,
            theories, and abstract exploration.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/intp-famous-people.png" // Placeholder for image
              alt="Famous INTPs visual - a collage of thinkers and inventors"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Albert Einstein:</strong> Revolutionary physicist whose
                imaginative intellect reshaped science.
              </li>
              <li>
                <strong>Bill Gates:</strong> Tech innovator and Microsoft
                founder, known for problem-solving brilliance.
              </li>
              <li>
                <strong>Marie Curie:</strong> Pioneering scientist in
                radioactivity, analytical and curious by nature.
              </li>
              <li>
                <strong>Neo (The Matrix):</strong> A quiet seeker of truth who
                questions reality and embraces deep knowledge.
              </li>
              <li>
                <strong>Abraham Lincoln:</strong> Thoughtful leader known for
                introspection, reason, and a principled mind.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the INTP
          </h2>
          <p className="section-description">
            Understanding the INTP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '90%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '40%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '25%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '50%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '55%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            INTPs rank <strong>very high in Openness to Experience</strong>,
            driven by curiosity, innovation, and a love for ideas. Their{' '}
            <strong>low Conscientiousness</strong> reflects flexibility and
            occasional disorganization. <strong>Low Extraversion</strong>{' '}
            suggests a preference for solitude and deep thought. With{' '}
            <strong>medium Agreeableness</strong>, they value honesty over
            harmony, and their <strong>medium Neuroticism</strong> reflects
            introspective emotional processing.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default INTP;
