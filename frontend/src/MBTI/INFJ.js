import React from 'react';
import './style.css'; // Assuming style.css contains the custom marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
const INFJ = () => {
  return (
    <div>
      <Header />
      <div className="personality-container infj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">INFJ – The Advocate</h1>
          <p className="personality-subtitle">
            The quiet visionaries of the fleet: Insightful, compassionate, and
            driven by deep ideals.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic INFJ Personalities</h2>
          <p className="section-description">
            Discover how INFJ's empathy and foresight inspire change and
            meaningful connections.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://api.time.com/wp-content/uploads/2020/07/nelson-mandela.jpg"
                alt="Nelson Mandela"
                className="character-image"
              />
              <h3 className="character-name">Nelson Mandela</h3>
              <p className="character-description">
                The transformational leader who exemplified vision, compassion,
                and unwavering principles.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0Pss_cOXjnes62lELQ6r1iIKbVy9Tut1dw&s"
                alt="Mother Teresa"
                className="character-image"
              />
              <h3 className="character-name">Mother Teresa</h3>
              <p className="character-description">
                A selfless humanitarian whose deep empathy and dedication
                changed countless lives.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcAUgHOsvp5_xrveLUrKX6VRZ-JpaDPNJfA&s"
                alt="Carl Jung"
                className="character-image"
              />
              <h3 className="character-name">Carl Jung</h3>
              <p className="character-description">
                The visionary psychologist who explored the depths of human
                consciousness and archetypes.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Advocate</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                INFJs are deeply insightful and idealistic individuals who
                strive to make the world a better place. They possess a rare
                blend of empathy, intuition, and a strong sense of integrity.
              </p>
              <p>
                Often reserved but passionately driven, INFJs seek meaningful
                connections and are motivated by a desire to help others realize
                their potential and live authentically.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1486091842/vector/woman-with-hands-on-her-heart-self-love-concept-happy-calm-girl-feeling-of-bliss-harmony.jpg?s=612x612&w=0&k=20&c=qs7fGo8FX07bIvdzVt0kkZsL8H7j4m7vzu6U_04Mj-g="
              alt="INFJ Introduction Visual - a person gazing thoughtfully into the horizon with a soft light"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the INFJ Landscape</h2>
          <p className="section-description">
            Explore the profound strengths and sensitive challenges that shape
            INFJs.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Empathetic Visionaries:</strong> INFJs deeply
                  understand others’ emotions and envision a better future.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Principled & Idealistic:</strong> Guided by strong
                  morals and a commitment to authenticity.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Creative & Insightful:</strong> Skilled at uncovering
                  hidden meanings and crafting innovative solutions.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Determined & Passionate:</strong> Persistent in
                  pursuing goals that align with their values.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Idealistic:</strong> May struggle with
                  disappointment when reality falls short of expectations.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Private & Reserved:</strong> Tends to keep feelings
                  guarded, making it hard for others to truly know them.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Sensitive to Criticism:</strong> Can take feedback
                  personally and feel hurt deeply.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Perfectionism:</strong> High standards sometimes cause
                  stress or delay.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for INFJs</h2>
          <p className="section-description">
            INFJs thrive in roles that allow them to inspire, guide, and create
            meaningful change.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                With their ability to understand complex human dynamics and
                envision possibilities, INFJs excel in careers that blend
                creativity and compassion.
              </p>
              <p>
                They flourish in environments that respect their values and
                offer opportunities to support others' growth.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Counselor/Therapist:</strong> Helping others navigate
                  emotional and psychological challenges.
                </li>
                <li>
                  <strong>Writer/Author:</strong> Expressing profound insights
                  through storytelling and communication.
                </li>
                <li>
                  <strong>Educator:</strong> Inspiring and mentoring students
                  toward personal and intellectual growth.
                </li>
                <li>
                  <strong>Humanitarian/Advocate:</strong> Working for social
                  justice and meaningful causes.
                </li>
                <li>
                  <strong>Psychologist:</strong> Studying and applying knowledge
                  of human behavior and thought.
                </li>
              </ul>
            </div>
            <img
              src="https://media.istockphoto.com/id/1272543982/vector/teacher-giving-lesson-to-her-students-in-classroom-teaching-concept-illustration.jpg?s=612x612&w=0&k=20&c=FTS7uba-ZbkHlZ6AaParLSMcY98msD2-J1qO2I5eFh0="
              alt="Career paths visual - classroom, writing desk, humanitarian work"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the INFJ</h2>
          <p className="section-description">
            Watch detailed insights and personal stories about the INFJ
            personality.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-infj-video-id' with an actual YouTube video ID for INFJ */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6kim0QlO0H0?si=EYmY7k7qdN5UXAe5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </section>

        {/* Famous INFJs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable INFJs in History & Fiction</h2>
          <p className="section-description">
            Compassionate visionaries and insightful idealists, INFJ traits have
            inspired profound change and storytelling.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/infj-famous-people.png" // Placeholder for image
              alt="Famous INFJs visual - a collage of compassionate leaders and thoughtful figures"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Martin Luther King Jr.:</strong> Influential civil
                rights leader, known for his deep empathy and visionary
                activism.
              </li>
              <li>
                <strong>Mother Teresa:</strong> Renowned for her compassion,
                selflessness, and dedication to humanitarian causes.
              </li>
              <li>
                <strong>Lady Gaga:</strong> Artist and advocate, embodying
                creativity, passion, and emotional depth.
              </li>
              <li>
                <strong>Albus Dumbledore (Harry Potter):</strong> Wise, caring,
                and strategic mentor guiding others with insight.
              </li>
              <li>
                <strong>Atticus Finch (To Kill a Mockingbird):</strong> Moral
                compass and principled defender of justice.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the INFJ
          </h2>
          <p className="section-description">
            Understanding the INFJ through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '90%' }}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '80%' }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{ width: '20%' }}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '75%' }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{ width: '55%' }}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            INFJs typically score{' '}
            <strong>very high in Openness to Experience</strong>, reflecting
            their rich imagination and deep insight. Their{' '}
            <strong>high Conscientiousness</strong> shows strong dedication and
            reliability. They often have <strong>low Extraversion</strong>,
            preferring meaningful, one-on-one interactions. Their{' '}
            <strong>high Agreeableness</strong> highlights their empathy and
            concern for others. Moderate Neuroticism suggests emotional
            sensitivity balanced by resilience.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default INFJ;
