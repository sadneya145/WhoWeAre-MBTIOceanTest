import React from 'react';
import './style.css';
import Header from '../Pages/Header/Header';

const ISTP = () => {
  return (
    <div>
      <Header />
      <div className="personality-container istp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ISTP – The Virtuoso</h1>
          <p className="personality-subtitle">
            Masters of tools and tactics: Practical, spontaneous, and cool under
            pressure.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ISTP Personalities</h2>
          <p className="section-description">
            Discover the skilled and adventurous individuals who embody the ISTP
            spirit.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="/images/istp-clint-eastwood.jpg"
                alt="Clint Eastwood"
                className="character-image"
              />
              <h3 className="character-name">Clint Eastwood</h3>
              <p className="character-description">
                Known for his cool, calm, and practical approach both on and off
                screen.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/istp-bruce-lee.jpg"
                alt="Bruce Lee"
                className="character-image"
              />
              <h3 className="character-name">Bruce Lee</h3>
              <p className="character-description">
                A master of martial arts and physical prowess, blending skill
                with fluid spontaneity.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/istp-amelia-earhart.jpg"
                alt="Amelia Earhart"
                className="character-image"
              />
              <h3 className="character-name">Amelia Earhart</h3>
              <p className="character-description">
                Adventurous pilot who pushed the limits of exploration with
                fearless determination.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Virtuoso</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ISTPs are practical problem-solvers who love working with their
                hands and tools.
              </p>
              <p>
                Independent and action-oriented, they thrive on hands-on
                challenges and quick thinking.
              </p>
            </div>
            <img
              src="/images/istp-intro.jpg"
              alt="ISTP Introduction Visual - sleek mechanical gears symbolizing skill and precision"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Strengths & Challenges of ISTPs</h2>
          <p className="section-description">
            Explore the cool, adaptable, and skillful nature of ISTPs.
          </p>
          <div className="content-with-image">
            <img
              src="/images/istp-strengths-weaknesses.jpg"
              alt="Strengths and Weaknesses Visual - mechanical tools and calm sea representing capability and challenges"
              className="section-image sw-image"
            />
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Practical & Efficient:</strong> ISTPs excel at solving
                  real-world problems quickly and effectively.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Adaptable & Spontaneous:</strong> They are ready to
                  pivot and respond to unexpected situations.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Calm Under Pressure:</strong> Their cool-headed nature
                  helps in emergencies and fast decisions.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Independent & Self-reliant:</strong> ISTPs prefer
                  hands-on work with minimal supervision.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Challenges</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Aloof & Private:</strong> ISTPs can seem distant or
                  hard to read emotionally.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Risk-taking Tendencies:</strong> Their love for
                  excitement can sometimes lead to reckless choices.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty Expressing Emotions:</strong> They may
                  struggle to communicate feelings openly.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Dislike for Routine:</strong> Monotonous tasks can
                  make them lose interest quickly.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Career Currents for ISTPs</h2>
          <p className="section-description">
            ISTPs excel in hands-on, practical careers where quick thinking and
            skill matter.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ISTPs seek careers with tangible results, autonomy, and
                opportunities for action.
              </p>
              <p>
                They shine in environments that allow them to work independently
                and apply their talents.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Engineer/Technician:</strong> Crafting and fixing with
                  precision and skill.
                </li>
                <li>
                  <strong>Mechanic/Automotive Specialist:</strong> Hands-on
                  troubleshooting and repair.
                </li>
                <li>
                  <strong>Emergency Services (Firefighter, Paramedic):</strong>{' '}
                  Staying calm and acting fast under pressure.
                </li>
                <li>
                  <strong>Pilot/Aviator:</strong> Independent, action-driven
                  roles with a need for cool judgment.
                </li>
                <li>
                  <strong>Craftsman/Artisan:</strong> Creating practical and
                  beautiful work with hands and tools.
                </li>
              </ul>
            </div>
            <img
              src="/images/istp-career.jpg"
              alt="Career paths visual - mechanical and technical tools with action"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Explore ISTP Insights Through Video</h2>
          <p className="section-description">
            Watch these videos to understand the practical and adaptable nature
            of the ISTP personality.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-istp-video-id' with an actual YouTube video ID */}
            <iframe
              src="https://www.youtube.com/embed/your-istp-video-id"
              title="Understanding the ISTP Personality Type"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="personality-video"
            ></iframe>
          </div>
          <p className="video-note">
            *Note: Replace "your-istp-video-id" with a relevant YouTube video ID
            for ISTP content.
          </p>
        </section>
        {/* Famous ISTPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ISTPs in History & Fiction</h2>
          <p className="section-description">
            Practical problem-solvers and independent thinkers, ISTPs excel at
            hands-on challenges and adaptability.
          </p>
          <div className="content-with-image">
            <img
              src="/images/istp-famous.jpg" // Placeholder for image
              alt="Famous ISTPs visual - a collage of skilled and independent individuals"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Clint Eastwood:</strong> Actor and director known for
                his cool, pragmatic approach and strong independence.
              </li>
              <li>
                <strong>Amelia Earhart:</strong> Aviation pioneer who
                demonstrated courage and resourcefulness.
              </li>
              <li>
                <strong>Steve Jobs:</strong> Innovative tech entrepreneur with a
                hands-on and practical style.
              </li>
              <li>
                <strong>James Bond:</strong> Fictional secret agent known for
                his quick thinking and skilled action.
              </li>
              <li>
                <strong>Lara Croft (Tomb Raider):</strong> Adventurous and
                resourceful hero, adept at solving complex challenges.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ISTP
          </h2>
          <p className="section-description">
            Understanding the ISTP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '55%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
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
                  className="bar-fill medium-low"
                  style={{width: '40%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Medium-Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div
                  className="bar-fill medium-low"
                  style={{width: '40%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Medium-Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '25%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
          </div>
          <p className="ocean-note">
            ISTPs tend to score{' '}
            <strong>medium in Openness to Experience</strong>, showing a balance
            between curiosity and practicality. Their{' '}
            <strong>medium Conscientiousness</strong> reflects a flexible but
            responsible style. With <strong>medium-low Extraversion</strong>,
            they are often reserved but effective in social settings. Medium-low
            Agreeableness points to straightforward and independent
            interactions, while <strong>low Neuroticism</strong> indicates calm
            and stable emotional responses.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ISTP;
