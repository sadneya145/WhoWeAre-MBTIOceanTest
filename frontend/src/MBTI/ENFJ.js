import React from 'react';
import './style.css'; // Use the same style.css
import Header from '../Pages/Header/Header';

const ENFJ = () => {
  return (
    <div>
      <Header />
      <div className="personality-container enfj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ENFJ – The Protagonist</h1>
          <p className="personality-subtitle">
            Charismatic, inspiring, and altruistic — natural-born leaders who
            empower others.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ENFJ Personalities</h2>
          <p className="section-description">
            Explore beloved characters who showcase the ENFJ's passion and
            vision.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="/images/mr-feeny.jpg"
                alt="Mr. Feeny"
                className="character-image"
              />
              <h3 className="character-name">Mr. Feeny</h3>
              <p className="character-description">
                Wise, encouraging, and deeply committed to guiding others, Mr.
                Feeny from "Boy Meets World" embodies the ENFJ’s mentor spirit.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/melinda-may.jpg"
                alt="Melinda May"
                className="character-image"
              />
              <h3 className="character-name">Melinda May</h3>
              <p className="character-description">
                Strong and protective, Melinda May from "Agents of S.H.I.E.L.D."
                shows the ENFJ's blend of leadership and empathy.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/morales-spiderman.jpg"
                alt="Miles Morales"
                className="character-image"
              />
              <h3 className="character-name">Miles Morales</h3>
              <p className="character-description">
                Courageous and inspiring, Miles Morales from "Spider-Man: Into
                the Spider-Verse" captures the ENFJ’s drive to make the world
                better.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to the Protagonist</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENFJs, called Protagonists, are passionate, empathetic leaders
                who motivate and inspire those around them. They thrive on
                meaningful connections and strive to create positive change.
              </p>
              <p>
                With their natural charisma and insight into others' emotions,
                ENFJs are excellent communicators and organizers. They are
                deeply committed to causes and people they care about.
              </p>
            </div>
            <img
              src="/images/enfj-intro.jpg"
              alt="ENFJ Introduction Visual - a leader inspiring a group"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ENFJ Landscape</h2>
          <p className="section-description">
            Key traits that define the ENFJ personality type.
          </p>
          <div className="content-with-image">
            <img
              src="/images/enfj-strengths-weaknesses.jpg"
              alt="Strengths and Weaknesses Visual - hands helping and vision imagery"
              className="section-image sw-image"
            />
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Charismatic & Inspiring:</strong> ENFJs naturally
                  energize and motivate others toward shared goals.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Empathetic & Insightful:</strong> They understand
                  emotions and connect deeply with others.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Organized & Visionary:</strong> ENFJs plan effectively
                  to bring ideas into reality.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Supportive & Loyal:</strong> They build strong
                  relationships and are devoted to their communities.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Idealistic:</strong> ENFJs can set unrealistic
                  goals and expectations for themselves and others.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>People-Pleasing Tendencies:</strong> They may neglect
                  their own needs to avoid conflict.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Struggle with Boundaries:</strong> ENFJs might take on
                  too much responsibility for others' problems.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty with Criticism:</strong> They can be
                  sensitive to negative feedback.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ENFJs</h2>
          <p className="section-description">
            Careers that benefit from ENFJs’ leadership, empathy, and vision.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENFJs thrive in roles that allow them to inspire others and
                foster growth. They often excel in leadership, counseling, and
                social advocacy.
              </p>
              <p>
                Their ability to combine warmth with strong organizational
                skills makes them natural leaders and mentors.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Teacher/Educator:</strong> Inspiring and nurturing
                  students.
                </li>
                <li>
                  <strong>Counselor/Psychologist:</strong> Providing emotional
                  support and guidance.
                </li>
                <li>
                  <strong>Community Organizer:</strong> Mobilizing groups for
                  social causes.
                </li>
                <li>
                  <strong>Public Relations Specialist:</strong> Managing image
                  and communication.
                </li>
                <li>
                  <strong>Human Resources Manager:</strong> Leading and
                  supporting workplace culture.
                </li>
                <li>
                  <strong>Motivational Speaker/Coach:</strong> Inspiring others
                  to achieve their potential.
                </li>
              </ul>
            </div>
            <img
              src="/images/enfj-career.jpg"
              alt="Career paths visual - leadership, education, and community"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ENFJ</h2>
          <p className="section-description">
            Learn more about the ENFJ personality through engaging videos.
          </p>
          <div className="video-wrapper">
            {/* Replace with an actual YouTube video ID about ENFJ */}
            <iframe
              src="https://www.youtube.com/embed/your-enfj-video-id"
              title="Understanding the ENFJ Personality Type"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="personality-video"
            ></iframe>
          </div>
          <p className="video-note">
            *Note: Replace "your-enfj-video-id" with a relevant YouTube video ID
            for the best experience.
          </p>
        </section>

        {/* Famous ENFJs Section */}
        <section className="personality-section famous-enfjs-section">
          <h2 className="section-title">Notable ENFJs in History & Fiction</h2>
          <p className="section-description">
            Influential ENFJs who have inspired with their leadership and
            warmth.
          </p>
          <div className="content-with-image">
            <img
              src="/images/enfj-famous.jpg"
              alt="Famous ENFJs visual - a collage of influential figures"
              className="section-image famous-image"
            />
            <ul className="famous-list">
              <li>
                Barack Obama - 44th U.S. President known for inspiring
                leadership
              </li>
              <li>
                Oprah Winfrey - Media mogul and advocate for social change
              </li>
              <li>
                Martin Luther King Jr. - Civil rights leader and powerful orator
              </li>
              <li>
                Elizabeth Bennet (Pride & Prejudice) - A fictional ENFJ known
                for wit and warmth
              </li>
              <li>Mufasa (The Lion King) - The wise and nurturing king</li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ENFJ
          </h2>
          <p className="section-description">
            Understanding the ENFJ through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '85%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '80%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '90%'}}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '95%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
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
            ENFJs generally score{' '}
            <strong>very high in Extraversion and Agreeableness</strong>,
            reflecting their warm, outgoing, and compassionate nature. Their{' '}
            <strong>high Openness to Experience</strong> indicates creativity
            and openness to new ideas, while a{' '}
            <strong>high level of Conscientiousness</strong> highlights their
            organized, responsible approach. Neuroticism tends to be moderate,
            allowing ENFJs to manage stress effectively while remaining
            sensitive to the emotions of others.
          </p>
        </section>

        {/* Call to Action/Footer */}
        <footer className="personality-footer">
          <p>
            Ready to explore more personality types?
            <a href="/explore" className="footer-link">
              Discover Your Type!
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ENFJ;
