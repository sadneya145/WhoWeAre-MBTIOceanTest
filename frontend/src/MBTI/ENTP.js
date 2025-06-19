import React from 'react';
import './style.css'; // Assuming style.css contains the custom marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const ENTP = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container entp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ENTP – The Debater</h1>
          <p className="personality-subtitle">
            The clever explorers of the ocean depths: Curious, inventive, and
            endlessly curious navigators of ideas.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ENTP Personalities</h2>
          <p className="section-description">
            Witness the quick-witted and innovative spirit of these inspiring
            ENTP figures.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://static1.srcdn.com/wordpress/wp-content/uploads/2019/05/Tony-Stark-from-Iron-Man.jpg"
                alt="Tony Stark"
                className="character-image"
              />
              <h3 className="character-name">Tony Stark (Iron Man)</h3>
              <p className="character-description">
                The inventive genius who loves to challenge the status quo and
                come up with groundbreaking ideas — a true ENTP visionary.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://d3i6fh83elv35t.cloudfront.net/static/2018/10/GettyImages-538349053-1024x760.jpg"
                alt="Thomas Edison"
                className="character-image"
              />
              <h3 className="character-name">Thomas Edison</h3>
              <p className="character-description">
                Known for his relentless curiosity and prolific inventions,
                Edison embodies the ENTP's innovative and problem-solving
                nature.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://compote.slate.com/images/b484abd8-5ae6-47e3-bc4e-f80b31893b03.jpeg?crop=3529%2C2353%2Cx0%2Cy0"
                alt="Sacha Baron Cohen"
                className="character-image"
              />
              <h3 className="character-name">Sacha Baron Cohen</h3>
              <p className="character-description">
                The master of improvisation and satire, using sharp wit and
                creativity to challenge conventions and entertain.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Debater</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENTPs are the curious explorers of the mental seas, always eager
                to dive into new ideas and challenge existing beliefs. Their
                quick thinking and enthusiasm fuel lively debates and innovative
                problem-solving.
              </p>
              <p>
                Energetic and clever, ENTPs enjoy exploring all angles of a
                situation and using their creativity to navigate complex
                intellectual currents.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1351079728/vector/millennial-girl-student-engaged-in-creative-thinking.jpg?s=612x612&w=0&k=20&c=RP4r90DUQFCgWcwsu5gmZH5EOmFmO9zLAoBKAAfziKM="
              alt="ENTP Introduction Visual - a thinker analyzing complex ideas with excitement"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ENTP Waters</h2>
          <p className="section-description">
            Exploring the innovative and dynamic nature of ENTPs.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Innovative & Visionary:</strong> ENTPs excel at
                  generating creative ideas and exploring new possibilities.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Quick Thinkers:</strong> They rapidly analyze
                  information and adapt their strategies on the fly.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Charismatic & Enthusiastic:</strong> Their energy and
                  charm engage others and inspire collaboration.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Debaters & Problem Solvers:</strong> ENTPs love
                  intellectual challenges and are skilled at seeing all sides.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Argumentative:</strong> Their love of debate can
                  sometimes come off as confrontational or insensitive.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Easily Bored:</strong> ENTPs may lose interest in
                  routine tasks or projects that lack novelty.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overthinkers:</strong> Their tendency to explore many
                  ideas can lead to indecisiveness or scattered focus.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Insensitive to Details:</strong> ENTPs sometimes
                  overlook details in favor of big-picture thinking.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ENTPs</h2>
          <p className="section-description">
            ENTPs flourish in roles that value innovation, debate, and
            intellectual challenge.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENTPs thrive in environments where they can brainstorm,
                strategize, and experiment. They enjoy varied tasks and careers
                that let them lead through ideas and inspire change.
              </p>
              <p>
                Fast-paced, flexible roles that reward creativity and
                unconventional thinking are ideal.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Entrepreneur/Innovator:</strong> Creating new ventures
                  and pushing boundaries.
                </li>
                <li>
                  <strong>Consultant:</strong> Advising organizations with fresh
                  perspectives.
                </li>
                <li>
                  <strong>Lawyer/Debater:</strong> Engaging in intellectual
                  challenges and persuasion.
                </li>
                <li>
                  <strong>Journalist/Writer:</strong> Investigating and
                  communicating complex ideas.
                </li>
                <li>
                  <strong>Marketing Strategist:</strong> Crafting creative
                  campaigns to influence audiences.
                </li>
              </ul>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/005/412/000/non_2x/public-speaker-concept-free-vector.jpg"
              alt="Career paths visual - brainstorming sessions, public speaking, innovation labs"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ENTP</h2>
          <p className="section-description">
            Discover detailed insights into the ENTP personality type through
            these curated videos.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-entp-video-id' with an actual YouTube video ID for ENTP */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Gck8fW9dNoI?si=0NSB4D3Z8WkOrHKU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="video-note">
            *Note: Replace "your-entp-video-id" with a relevant YouTube video ID
            for optimal content.
          </p>
        </section>

        {/* Famous ENTPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ENTPs in History & Fiction</h2>
          <p className="section-description">
            Innovative debaters and idea generators, ENTPs thrive on creativity,
            curiosity, and challenging the status quo.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/entp-famous-people.png" // Placeholder for image
              alt="Famous ENTPs visual - a collage of innovative thinkers and charismatic debaters"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Thomas Edison:</strong> Prolific inventor and
                entrepreneur, known for his creative problem-solving.
              </li>
              <li>
                <strong>Mark Twain:</strong> Witty author and social critic with
                a sharp sense of humor.
              </li>
              <li>
                <strong>Steve Jobs:</strong> Visionary entrepreneur who
                revolutionized technology and design.
              </li>
              <li>
                <strong>Tony Stark / Iron Man (Marvel):</strong> Charismatic
                innovator and quick thinker who loves a challenge.
              </li>
              <li>
                <strong>The Joker (Batman):</strong> Unpredictable and clever
                mastermind, thriving on chaos and wit.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ENTP
          </h2>
          <p className="section-description">
            Understanding the ENTP through the lens of the widely recognized
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
                <div className="bar-fill low" style={{width: '25%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '85%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
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
                <div className="bar-fill medium" style={{width: '45%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            ENTPs typically score{' '}
            <strong>very high in Openness to Experience</strong>, showing
            creativity and curiosity. Their <strong>high Extraversion</strong>{' '}
            reflects sociability and enthusiasm. They tend to have{' '}
            <strong>low Conscientiousness</strong>, favoring flexibility over
            strict planning. Medium Agreeableness points to a balanced social
            approach, while medium Neuroticism indicates occasional emotional
            fluctuations.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default ENTP;
