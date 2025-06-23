import React from 'react';
import './style.css';
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const INFP = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container infp-theme">
        {/* Title */}
        <header className="personality-header">
          <h1 className="personality-title">INFP – The Mediator</h1>
          <p className="personality-subtitle">
            Gentle, creative, and deeply idealistic souls who dream of a better
            world.
          </p>
        </header>

        {/* Famous INFPs */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Famous INFPs</h2>
          <p className="section-description">
            Dreamers and artists who inspire the world through emotion and
            imagination.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://media.glamourmagazine.co.uk/photos/66d825f8783d04ba0b98a2d7/16:9/w_1920,h_1080,c_limit/JK%20ROWLING%20040924%20GettyImages-1061228896.jpg"
                alt="J.K. Rowling"
                className="character-image"
              />
              <h3 className="character-name">J.K. Rowling</h3>
              <p className="character-description">
                Author of Harry Potter, blending fantasy with emotional depth
                and empathy.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://images.bauerhosting.com/legacy/media/5f4e/1083/305f/c2b6/16cf/7d0d/Princess%20Diana.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
                alt="Princess Diana"
                className="character-image"
              />
              <h3 className="character-name">Princess Diana</h3>
              <p className="character-description">
                Known for her compassion and advocacy for humanitarian causes.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://cdn.britannica.com/27/262227-050-E8D701BC/John-Lennon-The-Beatles-1968.jpg?w=400&h=300&c=crop"
                alt="John Lennon"
                className="character-image"
              />
              <h3 className="character-name">John Lennon</h3>
              <p className="character-description">
                Musician and peace activist, using art to express inner values.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Who Are INFPs?</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                INFPs are imaginative and deeply feeling individuals who seek
                meaning and harmony in life.
              </p>
              <p>
                They value authenticity and strive to align their actions with
                their inner values and ideals.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1383929628/vector/childcare-stress-issues-family-parenting-couple-relationship-problems-affecting-child.jpg?s=612x612&w=0&k=20&c=uS6Es065mLYqVKMgfPu1FBtyPUdfTj0KKEHrv3ZuesY="
              alt="INFP intro"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Challenges */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Strengths & Challenges</h2>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Empathetic:</strong> Deeply understands and feels for
                  others.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Idealistic:</strong> Seeks positive change and
                  personal growth.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Creative:</strong> Expresses thoughts and feelings
                  through art, writing, or music.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Loyal:</strong> Fiercely dedicated to people and
                  causes they believe in.
                </li>
              </ul>

              <h3 className="subsection-title">Challenges</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Idealistic:</strong> Can become disappointed
                  when reality falls short.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Avoids Conflict:</strong> May suppress feelings to
                  keep peace.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Struggles with Practicality:</strong> Easily gets lost
                  in ideas and emotions.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Private:</strong> Tends to hide emotions and withdraw
                  under stress.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Compass */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Career Compass</h2>
          <p className="section-description">
            INFPs thrive in careers that allow self-expression and align with
            their values.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <ul className="career-list">
                <li>
                  <strong>Writer / Author:</strong> Explores inner worlds
                  through storytelling.
                </li>
                <li>
                  <strong>Psychologist / Counselor:</strong> Helps others find
                  peace and purpose.
                </li>
                <li>
                  <strong>Artist / Illustrator:</strong> Brings imagination and
                  emotion to life.
                </li>
                <li>
                  <strong>Nonprofit / Social Worker:</strong> Pursues causes
                  that serve the greater good.
                </li>
                <li>
                  <strong>Musician / Poet:</strong> Expresses emotion and vision
                  through creative arts.
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-music-notes-illustration_23-2151317638.jpg?semt=ais_items_boosted&w=740"
              alt="INFP careers"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Inside the INFP Mind</h2>
          <p className="section-description">
            A deeper look into the world of INFPs: passion, purpose, and poetic
            thought.
          </p>
          <div className="video-wrapper">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-3uRUEZnuA4?si=peCOUBvJusj0ed9r"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Famous INFPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable INFPs in History & Fiction</h2>
          <p className="section-description">
            Guided by ideals and inner values, INFPs are imaginative,
            introspective, and deeply compassionate individuals.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/infp-famous-people.png" // Placeholder for image
              alt="Famous INFPs visual - a collage of idealists, writers, and dreamers"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>J.R.R. Tolkien:</strong> Fantasy author and creator of
                Middle-earth, known for his rich inner world.
              </li>
              <li>
                <strong>Princess Diana:</strong> Beloved humanitarian,
                remembered for her empathy and advocacy.
              </li>
              <li>
                <strong>William Shakespeare:</strong> Literary genius whose work
                explores deep emotions and ideals.
              </li>
              <li>
                <strong>Amélie Poulain (Amélie):</strong> Fictional character
                known for her whimsical kindness and personal mission to bring
                joy to others.
              </li>
              <li>
                <strong>Frodo Baggins (The Lord of the Rings):</strong> A quiet
                but determined hero driven by purpose and integrity.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the INFP
          </h2>
          <p className="section-description">
            Understanding the INFP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '95%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '55%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '20%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '85%'}}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '60%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            INFPs show <strong>very high Openness to Experience</strong>, loving
            imagination, creativity, and exploring new ideas. Their{' '}
            <strong>medium Conscientiousness</strong> reflects thoughtful
            dedication, especially toward meaningful work.{' '}
            <strong>Low Extraversion</strong> reveals their introspective and
            reserved nature. With <strong>very high Agreeableness</strong>,
            they’re empathetic and cooperative, while{' '}
            <strong>medium Neuroticism</strong> suggests emotional sensitivity
            and depth.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default INFP;
