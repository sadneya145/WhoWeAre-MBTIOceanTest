import React from 'react';
import './style.css';
import Header from '../Pages/Header/Header';

const ENFP = () => {
  return (
    <div>
      <Header />
      <div className="personality-container enfp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ENFP – The Campaigner</h1>
          <p className="personality-subtitle">
            The vibrant voyagers of the ocean currents: Enthusiastic,
            imaginative, and endlessly inspiring.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ENFP Personalities</h2>
          <p className="section-description">
            Meet the charismatic and creative spirits who embody the ENFP
            essence.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="/images/enfp-robin-williams.jpg"
                alt="Robin Williams"
                className="character-image"
              />
              <h3 className="character-name">Robin Williams</h3>
              <p className="character-description">
                Bursting with energy and spontaneity, Robin captivated audiences
                with his imagination and heart.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/enfp-ellen-degeneres.jpg"
                alt="Ellen DeGeneres"
                className="character-image"
              />
              <h3 className="character-name">Ellen DeGeneres</h3>
              <p className="character-description">
                A lively and empathetic host who inspires with kindness, humor,
                and creative spirit.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/enfp-will-smith.jpg"
                alt="Will Smith"
                className="character-image"
              />
              <h3 className="character-name">Will Smith</h3>
              <p className="character-description">
                Known for his charm and versatility, Will brings enthusiasm and
                warmth to every role.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Campaigner</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENFPs are vibrant explorers of ideas and emotions, navigating
                the seas of possibility with boundless enthusiasm and
                creativity.
              </p>
              <p>
                Warm, imaginative, and curious, they thrive on connection and
                inspire others with their passion and optimism.
              </p>
            </div>
            <img
              src="/images/enfp-intro.jpg"
              alt="ENFP Introduction Visual - colorful ocean waves symbolizing creativity and energy"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Strengths & Challenges of ENFPs</h2>
          <p className="section-description">
            Explore the energetic and imaginative nature of ENFPs.
          </p>
          <div className="content-with-image">
            <img
              src="/images/enfp-strengths-weaknesses.jpg"
              alt="Strengths and Weaknesses Visual - a bright lighthouse and waves representing guidance and challenges"
              className="section-image sw-image"
            />
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Enthusiastic & Inspiring:</strong> They motivate
                  others with their infectious energy and optimism.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Creative & Imaginative:</strong> ENFPs bring
                  innovative ideas and fresh perspectives to any challenge.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Empathetic & Caring:</strong> They easily connect with
                  others’ feelings and offer genuine support.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Curious & Open-minded:</strong> ENFPs love learning
                  and exploring new possibilities.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Challenges</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Easily Distracted:</strong> Their many interests can
                  sometimes lead to scattered focus.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Idealistic:</strong> ENFPs may have high
                  expectations that are hard to meet.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Struggle with Routine:</strong> Repetitive tasks can
                  drain their energy and enthusiasm.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Can Take Criticism Personally:</strong> Their
                  sensitive nature might make feedback feel like a personal
                  attack.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Career Currents for ENFPs</h2>
          <p className="section-description">
            ENFPs excel in careers where creativity, connection, and inspiration
            flow freely.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENFPs thrive in dynamic environments that allow them to express
                their ideas, support others, and lead with passion.
              </p>
              <p>
                They seek meaningful work where they can make a positive impact
                and keep their curiosity alive.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Creative Director/Artist:</strong> Bringing innovative
                  visions to life.
                </li>
                <li>
                  <strong>Counselor/Therapist:</strong> Helping others explore
                  and grow emotionally.
                </li>
                <li>
                  <strong>Motivational Speaker:</strong> Inspiring audiences
                  with passion and stories.
                </li>
                <li>
                  <strong>Journalist/Writer:</strong> Sharing stories that
                  matter with heart and imagination.
                </li>
                <li>
                  <strong>Marketing & Public Relations:</strong> Crafting
                  engaging campaigns and connections.
                </li>
              </ul>
            </div>
            <img
              src="/images/enfp-career.jpg"
              alt="Career paths visual - vibrant brainstorming and connecting people"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Explore ENFP Insights Through Video</h2>
          <p className="section-description">
            Watch these videos to understand the unique qualities and strengths
            of the ENFP personality.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-enfp-video-id' with an actual YouTube video ID */}
            <iframe
              src="https://www.youtube.com/embed/your-enfp-video-id"
              title="Understanding the ENFP Personality Type"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="personality-video"
            ></iframe>
          </div>
          <p className="video-note">
            *Note: Replace "your-enfp-video-id" with a relevant YouTube video ID
            for ENFP content.
          </p>
        </section>

        {/* Famous ENFPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ENFPs in History & Fiction</h2>
          <p className="section-description">
            Enthusiastic visionaries and spontaneous adventurers, ENFPs inspire
            others with their creativity and passion for new ideas.
          </p>
          <div className="content-with-image">
            <img
              src="/images/enfp-famous.jpg" // Placeholder for image
              alt="Famous ENFPs visual - a collage of charismatic and inspiring personalities"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Robin Williams:</strong> Beloved actor and comedian
                known for his energetic and imaginative performances.
              </li>
              <li>
                <strong>Walt Disney:</strong> Creative pioneer who brought
                imagination to life through animation and storytelling.
              </li>
              <li>
                <strong>Anne Frank:</strong> Inspirational diarist who shared a
                hopeful and heartfelt perspective amid adversity.
              </li>
              <li>
                <strong>Peter Parker / Spider-Man:</strong> Relatable and
                spirited hero who embraces his responsibilities with heart.
              </li>
              <li>
                <strong>Elizabeth Bennet (Pride and Prejudice):</strong>{' '}
                Intelligent and lively character known for her wit and
                independent spirit.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ENFP
          </h2>
          <p className="section-description">
            Understanding the ENFP through the lens of the widely recognized
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
                <div className="bar-fill medium" style={{width: '50%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '95%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '80%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '50%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            ENFPs typically have{' '}
            <strong>very high Openness to Experience</strong>, reflecting their
            imaginative and curious nature. Their{' '}
            <strong>very high Extraversion</strong> showcases their enthusiasm
            and sociability. Medium Conscientiousness balances spontaneity with
            focus, while <strong>high Agreeableness</strong> highlights their
            warmth and empathy. Medium Neuroticism points to occasional
            emotional sensitivity.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ENFP;
