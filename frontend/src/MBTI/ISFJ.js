import React from 'react';
import './style.css'; // Using the same marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const ISFJ = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container isfj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ISFJ – The Defender</h1>
          <p className="personality-subtitle">
            The steadfast protectors of the fleet: Caring, reliable, and quietly
            devoted to the well-being of the crew.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ISFJ Personalities</h2>
          <p className="section-description">
            See how the ISFJ's loyalty and empathy create strong bonds and
            unwavering dedication.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaND4oHtjMMEALbyl4Zg-KdsXwYs85ykPEKw&s" // Image for Samwise Gamgee
                alt="Samwise Gamgee"
                className="character-image"
              />
              <h3 className="character-name">Samwise Gamgee</h3>
              <p className="character-description">
                From The Lord of the Rings, Sam is the loyal and selfless
                companion, dedicated to protecting Frodo and ensuring their
                mission’s success.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMe7X6QwCQLWqcf-B5fCrwhJ2Myg1YYaiQyg&s" // Image for Molly Weasley
                alt="Molly Weasley"
                className="character-image"
              />
              <h3 className="character-name">Molly Weasley</h3>
              <p className="character-description">
                A nurturing and protective mother figure in the Harry Potter
                series, Molly embodies the ISFJ’s warm-heartedness and fierce
                defense of family.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://ucarecdn.com/62cfcc26-7aba-4292-a577-21f031d33259/-/crop/420x420/30,0/-/preview/-/progressive/yes/-/format/auto/-/scale_crop/900x900/" // Image for Rosa Diaz
                alt="Rosa Diaz"
                className="character-image"
              />
              <h3 className="character-name">Rosa Diaz</h3>
              <p className="character-description">
                From Brooklyn Nine-Nine, Rosa shows ISFJ traits through her
                quiet dedication, loyalty to friends, and steadfast sense of
                justice.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Defender</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ISFJs are dependable caretakers who work behind the scenes to
                ensure harmony and stability. They value tradition, loyalty, and
                tangible ways to help those around them.
              </p>
              <p>
                Quiet but resolute, ISFJs combine a strong sense of
                responsibility with a gentle empathy, making them the steady
                anchors in turbulent times. They often focus on the practical
                needs of others, quietly supporting the crew so the ship sails
                smoothly.
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/global-data-security-personal-data-security-cyber-data-security-online-concept-illustration-internet-security-information-privacy-protection_1150-37375.jpg?semt=ais_items_boosted&w=740" // Placeholder for image
              alt="ISFJ Introduction Visual - a guardian quietly watching over"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ISFJ Landscape</h2>
          <p className="section-description">
            Understanding the strengths and vulnerabilities of these devoted
            protectors.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Loyal & Compassionate:</strong> ISFJs prioritize the
                  needs of others with heartfelt care and unwavering loyalty.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Detail-Oriented & Practical:</strong> They notice the
                  small things and work diligently to maintain order and
                  harmony.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Supportive & Reliable:</strong> They are the
                  dependable crew members who always have your back.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Patient & Observant:</strong> ISFJs listen carefully
                  and offer thoughtful, considerate help.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Reluctant to Change:</strong> ISFJs can resist new
                  ideas, preferring the safety of familiar routines.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Self-Sacrificing:</strong> They may put others’
                  needs ahead of their own, leading to burnout.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty Expressing Emotions:</strong> ISFJs often
                  keep feelings inside, making it hard for others to understand
                  them fully.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Can Be Overly Cautious:</strong> Their desire for
                  security might limit their willingness to take risks or try
                  new things.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ISFJs</h2>
          <p className="section-description">
            ISFJs excel in roles that allow them to provide tangible support and
            maintain stability for others.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                The Defender’s empathetic nature and attention to detail make
                them outstanding caregivers, administrators, and advisors. They
                value meaningful work that allows them to protect traditions and
                nurture growth.
              </p>
              <p>
                ISFJs prefer environments where their loyalty and
                conscientiousness contribute to the well-being of individuals
                and communities.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Healthcare Professional:</strong> Nurses, therapists,
                  and caregivers providing hands-on support.
                </li>
                <li>
                  <strong>Teacher/Educator:</strong> Guiding and nurturing
                  students with patience and dedication.
                </li>
                <li>
                  <strong>Social Worker/Counselor:</strong> Offering practical
                  help and emotional support.
                </li>
                <li>
                  <strong>Administrative Assistant:</strong> Keeping operations
                  running smoothly behind the scenes.
                </li>
                <li>
                  <strong>Archivist/Librarian:</strong> Preserving knowledge and
                  maintaining order.
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-vector/teacher-concept-illustration_114360-1638.jpg?semt=ais_hybrid&w=740" // Placeholder for image
              alt="Career paths visual - healthcare, education, social work"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ISFJ</h2>
          <p className="section-description">
            Explore in-depth perspectives on the ISFJ personality type through
            these videos.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-isfj-video-id' with an actual YouTube video ID */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qS2QePBN0OE?si=uP4HOHZR5oEgS6Yu"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Famous ISFJs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ISFJs in History & Fiction</h2>
          <p className="section-description">
            From nurturing caregivers to dependable protectors, ISFJ traits have
            quietly influenced both history and stories.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/isfj-famous-people.png" // Placeholder for image
              alt="Famous ISFJs visual - a collage of caring and loyal figures"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Mother Teresa:</strong> Renowned for her selfless
                compassion and dedication to helping the needy.
              </li>
              <li>
                <strong>Queen Elizabeth II:</strong> Known for her steady
                leadership, duty, and commitment to tradition.
              </li>
              <li>
                <strong>Rosa Parks:</strong> Courageous civil rights activist
                whose quiet strength sparked monumental change.
              </li>
              <li>
                <strong>Samwise Gamgee (The Lord of the Rings):</strong> Loyal
                and steadfast companion, embodying devotion and care.
              </li>
              <li>
                <strong>Dr. Watson (Sherlock Holmes):</strong> Reliable friend
                and practical supporter, balancing intellect with kindness.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ISFJ
          </h2>
          <p className="section-description">
            Understanding the ISFJ through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '30%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '90%'}}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '45%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{width: '85%'}}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '35%'}}></div>
              </div>
              <span className="ocean-score-label">Medium-Low</span>
            </div>
          </div>
          <p className="ocean-note">
            ISFJs usually score <strong>very high in Conscientiousness</strong>,
            showing their dependable and diligent nature. They have{' '}
            <strong>high Agreeableness</strong>, reflecting their caring,
            empathetic, and cooperative tendencies. Their{' '}
            <strong>medium Extraversion</strong> indicates they are warm but
            reserved in social settings. ISFJs tend to score{' '}
            <strong>low in Openness</strong>, favoring tradition and practical
            routines. Their <strong>medium-low Neuroticism</strong> suggests a
            generally calm and steady emotional state.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default ISFJ;
