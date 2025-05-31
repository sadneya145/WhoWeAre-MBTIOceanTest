import React from 'react';
import './style.css'; // Assuming style.css contains the custom styles
import Header from '../Pages/Header/Header';

const ENTJ = () => {
  return (
    <div>
      <Header />
      <div className="personality-container entj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ENTJ – The Commander</h1>
          <p className="personality-subtitle">
            Bold, imaginative, and strong-willed leaders, always finding a way –
            or making one.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ENTJ Personalities</h2>
          <p className="section-description">
            ENTJs are natural-born leaders, exemplified by these ambitious and
            strategic characters.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="/images/tony-stark.jpg"
                alt="Tony Stark"
                className="character-image"
              />
              <h3 className="character-name">Tony Stark (Iron Man)</h3>
              <p className="character-description">
                Known for his brilliance, charisma, and strategic thinking, Tony
                Stark demonstrates the bold innovation and leadership of an
                ENTJ.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/miranda-priestly.jpg"
                alt="Miranda Priestly"
                className="character-image"
              />
              <h3 className="character-name">Miranda Priestly</h3>
              <p className="character-description">
                The commanding editor-in-chief of *Runway*, Miranda is a
                high-powered executive with a no-nonsense attitude, exemplifying
                ENTJ assertiveness and vision.
              </p>
            </div>
            <div className="character-card">
              <img
                src="/images/tywin-lannister.jpg"
                alt="Tywin Lannister"
                className="character-image"
              />
              <h3 className="character-name">Tywin Lannister</h3>
              <p className="character-description">
                A strategic mastermind and strict patriarch, Tywin's commanding
                presence and forward-thinking make him a classic ENTJ in *Game
                of Thrones*.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to the Commander</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENTJs are natural leaders, known for their confidence, strategic
                thinking, and ability to organize people and processes. Their
                world revolves around logic, efficiency, and ambition.
              </p>
              <p>
                They thrive on challenges and see obstacles as opportunities for
                improvement. ENTJs are outspoken and direct, often taking charge
                in group settings and leading with vision and determination.
              </p>
            </div>
            <img
              src="/images/entj-intro.jpg"
              alt="ENTJ Introduction Visual - a person presenting with confidence"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ENTJ Landscape</h2>
          <p className="section-description">
            Understanding the powerhouse behind the ENTJ drive.
          </p>
          <div className="content-with-image">
            <img
              src="/images/entj-strengths-weaknesses.jpg"
              alt="Strengths and Weaknesses Visual - chess pieces or leadership imagery"
              className="section-image sw-image"
            />
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Efficient & Goal-Oriented:</strong> ENTJs thrive on
                  achievement and progress, always striving for excellence.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Confident & Charismatic:</strong> Natural leaders who
                  inspire others with their vision and drive.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Strategic Thinkers:</strong> They see the big picture
                  and plan far ahead.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Decisive:</strong> Quick and assertive
                  decision-makers, even under pressure.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Stubborn & Dominating:</strong> Their strong opinions
                  and leadership can overwhelm others.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Impatient:</strong> They expect quick results and can
                  be intolerant of inefficiency.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Insensitive:</strong> ENTJs may struggle to
                  acknowledge the emotional needs of others.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Critical:</strong> They can be hard on both
                  themselves and others when expectations aren’t met.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ENTJs</h2>
          <p className="section-description">
            ENTJs shine in dynamic, results-oriented careers where they can lead
            and innovate.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ENTJs seek out roles that allow them to set long-term goals and
                drive systemic change. They excel in high-pressure environments
                and enjoy managing people, processes, and innovation.
              </p>
              <p>
                They're best suited for fields where leadership, ambition, and
                strategy are crucial.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Executive/CEO:</strong> Leading organizations to
                  success with vision and decisiveness.
                </li>
                <li>
                  <strong>Entrepreneur:</strong> Innovating and taking
                  calculated risks to build empires.
                </li>
                <li>
                  <strong>Lawyer:</strong> Arguing with conviction and mastery
                  of strategy.
                </li>
                <li>
                  <strong>Project Manager:</strong> Driving initiatives with
                  efficiency and planning.
                </li>
                <li>
                  <strong>Consultant:</strong> Solving complex problems with
                  strategic insight.
                </li>
              </ul>
            </div>
            <img
              src="/images/entj-career.jpg"
              alt="Career paths visual - corporate offices, law, entrepreneurship"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ENTJ</h2>
          <p className="section-description">
            Discover more about what makes ENTJs powerful and effective leaders.
          </p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/IIDxXvJu7V8" // You can replace with a different relevant ENTJ video
              title="Understanding the ENTJ Personality Type"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="personality-video"
            ></iframe>
          </div>
          <p className="video-note">
            *Note: Replace the video ID with a preferred video if needed.
          </p>
        </section>

        {/* Famous ENTJs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ENTJs in History & Fiction</h2>
          <p className="section-description">
            ENTJs have left a lasting mark through leadership and innovation.
          </p>
          <div className="content-with-image">
            <img
              src="/images/entj-famous.jpg"
              alt="Famous ENTJs visual - powerful leaders and thinkers"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Steve Jobs:</strong> Visionary Apple co-founder with
                relentless innovation and drive.
              </li>
              <li>
                <strong>Margaret Thatcher:</strong> The "Iron Lady" who
                transformed British politics with her determination.
              </li>
              <li>
                <strong>Franklin D. Roosevelt:</strong> Strategic and
                charismatic U.S. President who led through crisis.
              </li>
              <li>
                <strong>Gordon Ramsay:</strong> Passionate and commanding
                celebrity chef known for his leadership and high standards.
              </li>
              <li>
                <strong>Walter White (Breaking Bad):</strong> Transforms into a
                strategic and goal-driven mastermind, mirroring ENTJ
                determination.
              </li>
            </ul>
          </div>
        </section>
        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ENTJ
          </h2>
          <p className="section-description">
            Understanding the ENTJ through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '80%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '90%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
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
                <div className="bar-fill low" style={{width: '35%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '45%'}}></div>
              </div>
              <span className="ocean-score-label">Medium-Low</span>
            </div>
          </div>
          <p className="ocean-note">
            ENTJs typically exhibit <strong>very high Conscientiousness</strong>, indicating
            strong planning, leadership, and goal-setting abilities. Their
            <strong>high Openness to Experience</strong> reflects their drive for innovation,
            strategic thinking, and openness to new ideas. High <strong>Extraversion</strong>
            is evident in their assertive, energetic, and sociable nature.
            <strong>Lower Agreeableness</strong> reflects their preference for challenge and
            debate over harmony, often focusing more on results than on
            feelings. Their <strong>Neuroticism</strong> tends to be moderate to low,
            indicating emotional control and resilience under pressure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ENTJ;
