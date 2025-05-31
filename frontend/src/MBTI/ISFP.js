import React from 'react';
import './style.css';
import Header from '../Pages/Header/Header';

const ISFP = () => {
  return (
    <div>
      <Header />
      <div className="personality-container isfp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ISFP – The Adventurer</h1>
          <p className="personality-subtitle">
            Gentle, creative souls who explore life through aesthetics and
            emotion.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Famous ISFPs</h2>
          <p className="section-description">
            Passionate, artistic individuals who embody the ISFP personality.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="/images/isfp-marilyn-monroe.jpg"
                alt="Marilyn Monroe"
                className="character-image"
              />
              <h3 className="character-name">Marilyn Monroe</h3>
              <p className="character-description">
                Emotionally expressive and gentle with a love for beauty and
                elegance.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/isfp-bob-ross.jpg"
                alt="Bob Ross"
                className="character-image"
              />
              <h3 className="character-name">Bob Ross</h3>
              <p className="character-description">
                A calm, artistic soul who shared peaceful moments through
                painting.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/isfp-lana-del-rey.jpg"
                alt="Lana Del Rey"
                className="character-image"
              />
              <h3 className="character-name">Lana Del Rey</h3>
              <p className="character-description">
                Expressive, sensitive, and emotionally rich in music and
                aesthetic.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Adventurer</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ISFPs are introverted free spirits who live to explore beauty
                and creativity.
              </p>
              <p>
                They are observant, spontaneous, and have a strong aesthetic
                sense, often expressing themselves through art or music.
              </p>
            </div>
            <img
              src="/images/isfp-intro.jpg"
              alt="ISFP introduction visual - colorful brush strokes and calm sea"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Strengths & Challenges</h2>
          <p className="section-description">
            The ISFP personality brings emotional depth and creative brilliance.
          </p>
          <div className="content-with-image">
            <img
              src="/images/isfp-strengths.jpg"
              alt="ISFP strengths and challenges visual - artistic ocean flow"
              className="section-image sw-image"
            />
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Creative & Artistic:</strong> ISFPs thrive on
                  expressing themselves through beauty and art.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Compassionate:</strong> Deeply in tune with others’
                  feelings.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Adaptable:</strong> Go with the flow in a relaxed,
                  open way.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Observant:</strong> Aware of subtle details and
                  emotional cues.
                </li>
              </ul>

              <h3 className="subsection-title">Challenges</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Conflict Avoidant:</strong> Tends to withdraw from
                  arguments or confrontation.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Private:</strong> May struggle to share deeper
                  thoughts.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Indecisive:</strong> Difficulty making long-term plans
                  or commitments.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Dislikes Structure:</strong> May feel constrained by
                  strict schedules or systems.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Career Currents</h2>
          <p className="section-description">
            ISFPs shine in careers that allow for creativity, flexibility, and
            hands-on experience.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <ul className="career-list">
                <li>
                  <strong>Artist / Illustrator:</strong> Expressive and visual
                  creativity.
                </li>
                <li>
                  <strong>Musician / Performer:</strong> Emotionally rich
                  performances.
                </li>
                <li>
                  <strong>Interior / Fashion Designer:</strong> Combining
                  aesthetics with practicality.
                </li>
                <li>
                  <strong>Chef / Culinary Artist:</strong> Flavor meets
                  expression.
                </li>
                <li>
                  <strong>Animal Care / Vet Tech:</strong> Compassionate and
                  gentle nature thrives here.
                </li>
              </ul>
            </div>
            <img
              src="/images/isfp-career.jpg"
              alt="ISFP career - art, music, and nature"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Discover ISFP in Action</h2>
          <p className="section-description">
            See how ISFPs express their uniqueness through the world around
            them.
          </p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/your-isfp-video-id"
              title="ISFP Personality Explained"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="personality-video"
            ></iframe>
          </div>
          <p className="video-note">
            *Replace "your-isfp-video-id" with a real YouTube video ID.
          </p>
        </section>

        {/* Famous ISFPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ISFPs in History & Fiction</h2>
          <p className="section-description">
            Quietly creative and deeply attuned to beauty, ISFPs express
            themselves through art, emotion, and compassion.
          </p>
          <div className="content-with-image">
            <img
              src="/images/isfp-famous.jpg" // Placeholder for image
              alt="Famous ISFPs visual - a collage of artists and sensitive individuals"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Bob Dylan:</strong> Influential singer-songwriter known
                for emotional expression and artistic innovation.
              </li>
              <li>
                <strong>Frida Kahlo:</strong> Iconic painter whose deeply
                personal art reflects pain, resilience, and creativity.
              </li>
              <li>
                <strong>Britney Spears:</strong> Pop artist celebrated for her
                expressive performances and individuality.
              </li>
              <li>
                <strong>Aurora (Disney's Sleeping Beauty):</strong> A gentle,
                idealistic dreamer with a deep connection to nature.
              </li>
              <li>
                <strong>Michael Jackson:</strong> A musical and creative genius,
                sensitive and expressive in his art and persona.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ISFP
          </h2>
          <p className="section-description">
            Understanding the ISFP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '75%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
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
                <div className="bar-fill low" style={{width: '30%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
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
                <div className="bar-fill medium" style={{width: '55%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            ISFPs score <strong>high in Openness to Experience</strong>,
            embracing creativity, aesthetics, and rich emotional life. Their{' '}
            <strong>medium Conscientiousness</strong> reflects a balance between
            spontaneity and reliability. With <strong>low Extraversion</strong>,
            they are introspective and reserved.{' '}
            <strong>High Agreeableness</strong> highlights their empathy and
            kindness, while <strong>medium Neuroticism</strong> shows they may
            experience emotional ups and downs but remain compassionate.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ISFP;
