import React from 'react';
import './style.css'; // Assuming style.css contains the custom marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const ESFP = () => {
  return (
    <div>
      <Header />
      <div className="personality-container esfp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ESFP – The Entertainer</h1>
          <p className="personality-subtitle">
            The vibrant waves of the ocean: Enthusiastic, lively, and
            warm-hearted performers who light up every room.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ESFP Personalities</h2>
          <p className="section-description">
            Feel the vibrant energy and charm of these charismatic ESFP figures.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/marilyn_monroe_photo_alfred_eisenstaedt_pix_inc_the_life_picture_collection_getty_images_53376357_cropped.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                alt="Marilyn Monroe"
                className="character-image"
              />
              <h3 className="character-name">Marilyn Monroe</h3>
              <p className="character-description">
                The glamorous and playful icon who captured hearts with her
                warmth and spontaneity — a true ESFP entertainer.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://media.npr.org/assets/img/2021/11/10/will-smith-new-headshot-credit-lorenzo-agius_wide-e7290985cc97649f61eb4c28e84d6b272f69202d.jpg"
                alt="Will Smith"
                className="character-image"
              />
              <h3 className="character-name">Will Smith</h3>
              <p className="character-description">
                Known for his humor, charisma, and ability to connect with
                people, Will Smith embodies the lively and engaging ESFP spirit.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://ichef.bbci.co.uk/news/480/cpsprodpb/a604/live/d4ca44d0-42a8-11f0-88e1-3f1b11853089.jpg.webp"
                alt="Beyoncé"
                className="character-image"
              />
              <h3 className="character-name">Beyoncé</h3>
              <p className="character-description">
                A powerful performer who captivates audiences with passion and
                energy, Beyoncé shines as an ESFP star on stage and off.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Entertainer</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESFPs are the lively dolphins of the ocean, bringing joy,
                warmth, and spontaneity wherever they go. They live in the
                moment and cherish meaningful connections with others.
              </p>
              <p>
                Outgoing and affectionate, ESFPs are natural entertainers who
                love engaging with their environment and creating memorable
                experiences filled with laughter and excitement.
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_23-2149195759.jpg?semt=ais_hybrid&w=740"
              alt="ESFP Introduction Visual - a joyful dolphin leaping in the ocean"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ESFP Waves</h2>
          <p className="section-description">
            Exploring the vibrant and spontaneous nature of ESFPs.
          </p>
          <div className="content-with-image">

            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Energetic & Fun-Loving:</strong> ESFPs bring joy and
                  liveliness to social settings, making everyone feel included.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Empathetic & Warm:</strong> Naturally caring and
                  compassionate, they connect deeply with others’ feelings.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Spontaneous & Adventurous:</strong> They love trying
                  new things and embracing the unexpected.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Observant & Practical:</strong> ESFPs notice details
                  in their environment and respond with practical actions.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Dislike for Routine:</strong> Repetitive tasks can
                  feel stifling, making long-term focus a challenge.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Easily Bored:</strong> ESFPs may struggle to stay
                  engaged with slow or monotonous activities.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Tendency to Avoid Conflict:</strong> Their desire to
                  keep harmony might lead to ignoring important issues.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Impulsiveness:</strong> Acting on the spur of the
                  moment sometimes leads to overlooked consequences.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ESFPs</h2>
          <p className="section-description">
            ESFPs flourish in energetic, social, and hands-on roles where
            creativity and people skills are key.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESFPs thrive in careers that allow them to express their
                creativity, engage with others, and work in lively, dynamic
                settings.
              </p>
              <p>
                Jobs in entertainment, healthcare, education, or customer
                service fit their love for interaction and making an impact.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Performer/Actor/Musician:</strong> Expressing
                  creativity on stage or screen.
                </li>
                <li>
                  <strong>Event Planner/Host:</strong> Creating memorable and
                  fun experiences.
                </li>
                <li>
                  <strong>
                    Healthcare Professional (e.g., Nurse, Therapist):
                  </strong>{' '}
                  Providing compassionate care.
                </li>
                <li>
                  <strong>Sales & Marketing Specialist:</strong> Using charm and
                  energy to connect with customers.
                </li>
                <li>
                  <strong>Teacher/Educator:</strong> Inspiring students through
                  interactive learning.
                </li>
              </ul>
            </div>
            <img
              src="https://online.visual-paradigm.com/repository/images/25131f51-79f4-4928-b5a5-23cb5f6d4aa6/festival-illustration-design/music-performance-illustration.png"
              alt="Career paths visual - a lively concert, a vibrant classroom, a social gathering"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ESFP</h2>
          <p className="section-description">
            Discover detailed insights into the ESFP personality type through
            these curated videos.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-esfp-video-id' with an actual YouTube video ID for ESFP */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/vGtpFiGYBTI?si=5Fo4Pgbsy1nRQp2x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>

        {/* Famous ESFPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ESFPs in History & Fiction</h2>
          <p className="section-description">
            Vibrant entertainers and spontaneous adventurers, ESFP traits light
            up every room with enthusiasm and warmth.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/esfp-famous-people.png" // Placeholder for image
              alt="Famous ESFPs visual - a collage of lively performers and charismatic personalities"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Marilyn Monroe:</strong> Iconic actress known for her
                charm, warmth, and captivating presence.
              </li>
              <li>
                <strong>Elvis Presley:</strong> Legendary musician and
                performer, full of energy and charisma.
              </li>
              <li>
                <strong>Jamie Oliver:</strong> Celebrity chef who brings passion
                and spontaneity to cooking and media.
              </li>
              <li>
                <strong>Barney Stinson (How I Met Your Mother):</strong>{' '}
                Fun-loving and spontaneous friend who thrives on excitement.
              </li>
              <li>
                <strong>Jessica Rabbit (Who Framed Roger Rabbit):</strong>{' '}
                Charismatic and magnetic character with a lively personality.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ESFP
          </h2>
          <p className="section-description">
            Understanding the ESFP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div
                  className="bar-fill high"
                  style={{ width: '70%' }}
                ></div>
              </div>
              <span className="ocean-score-label">Medium-High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{ width: '50%' }}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{ width: '95%' }}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '80%' }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{ width: '45%' }}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            ESFPs typically show <strong>very high Extraversion</strong>,
            reflecting their energetic, social nature. Their{' '}
            <strong>medium-high Openness</strong> points to creativity and love
            for new experiences. They have{' '}
            <strong>medium Conscientiousness</strong>, balancing spontaneity
            with responsibility. Their <strong>high Agreeableness</strong>{' '}
            demonstrates warmth and friendliness, while{' '}
            <strong>medium Neuroticism</strong> indicates occasional emotional
            sensitivity.
          </p>
        </section>


      </div>
      <Footer />
    </div>
  );
};

export default ESFP;
