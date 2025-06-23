import React from 'react';
import './style.css'; // Assuming style.css contains the custom marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
const INTJ = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container intj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">INTJ – The Architect</h1>
          <p className="personality-subtitle">
            The master strategists of the fleet: Visionary, independent, and
            always planning the next move.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic INTJ Personalities</h2>
          <p className="section-description">
            See how INTJ's brilliant minds and long-term vision shape their
            actions and leadership.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://resizing.flixster.com/6wVX06rR-DNuugJUZ7HBIODls8s=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8992561_i_h9_ab.jpg"
                alt="Sherlock Holmes"
                className="character-image"
              />
              <h3 className="character-name">Sherlock Holmes</h3>
              <p className="character-description">
                The legendary detective, known for his analytical mind,
                relentless logic, and strategic thinking.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-12/27/full/1735282259-0748.jpg"
                alt="Magnus Carlsen"
                className="character-image"
              />
              <h3 className="character-name">Magnus Carlsen</h3>
              <p className="character-description">
                World Chess Champion, a master strategist who anticipates and
                outmaneuvers opponents with precision.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://static.toiimg.com/thumb/62981209/Peter-Dinklage-aka-Tyrion-Lannister-is-in-Kashmir-and-we-cannot-keep-calm.jpg?width=1200&height=900"
                alt="Tyrion Lannister"
                className="character-image"
              />
              <h3 className="character-name">Tyrion Lannister</h3>
              <p className="character-description">
                From Game of Thrones, a cunning and resourceful strategist,
                always thinking several steps ahead.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Architect</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                INTJs, or Architects, are the brilliant masterminds and
                visionary captains guiding their ships through unknown waters.
                They prize knowledge, insight, and foresight, often plotting
                intricate strategies to achieve their long-term goals.
              </p>
              <p>
                Independent and confident, INTJs trust logic and reason over
                emotions, crafting plans that others may not immediately see.
                They are not afraid to challenge convention, always aiming to
                improve and innovate.
              </p>
            </div>
            <img
              src="https://slidemodel.com/wp-content/uploads/02-action-plan-illustration-01.png"
              alt="INTJ Introduction Visual - a captain plotting a course with a map and compass"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the INTJ Landscape</h2>
          <p className="section-description">
            Delve into the core traits that empower and challenge INTJs.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Strategic Visionaries:</strong> INTJs excel at
                  long-term planning and foreseeing potential outcomes.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Independent Thinkers:</strong> They trust their own
                  insights and are confident in their unique perspective.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Logical & Objective:</strong> Emotions rarely cloud
                  their judgment; they prioritize facts and reason.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Innovative Problem Solvers:</strong> Constantly
                  looking for better, more efficient ways to tackle challenges.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Socially Reserved:</strong> INTJs can come off as
                  distant or aloof, preferring solitude to social gatherings.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Critical:</strong> Their high standards can
                  lead to frustration with others who don’t meet their
                  expectations.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Struggle with Emotions:</strong> May find it difficult
                  to express feelings or empathize with emotional situations.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Perfectionist Tendencies:</strong> Their desire for
                  perfection can slow progress or cause unnecessary stress.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for INTJs</h2>
          <p className="section-description">
            INTJs flourish in roles that demand creativity, independence, and
            strategic thinking.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                Their analytical skills and ability to envision the big picture
                make INTJs natural leaders in complex environments. They prefer
                careers that challenge their intellect and allow them to
                innovate and implement transformative ideas.
              </p>
              <p>
                INTJs thrive in positions where autonomy is valued and where
                they can set their own course toward ambitious goals.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Scientist/Researcher:</strong> Investigating and
                  discovering new knowledge.
                </li>
                <li>
                  <strong>Engineer/Architect:</strong> Designing systems,
                  structures, or technologies.
                </li>
                <li>
                  <strong>Strategic Consultant:</strong> Advising organizations
                  on long-term planning and problem-solving.
                </li>
                <li>
                  <strong>Entrepreneur:</strong> Building innovative businesses
                  from the ground up.
                </li>
                <li>
                  <strong>Professor/Academic:</strong> Teaching and advancing
                  knowledge in specialized fields.
                </li>
              </ul>
            </div>
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/461/674/non_2x/male-architect-presenting-project-concept-cartoon-illustration-man-engineer-standing-near-drawing-board-explaining-project-draft-and-building-flat-illustration-vector.jpg"
              alt="Career paths visual - laboratory, blueprint drafting, business strategy meeting"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the INTJ</h2>
          <p className="section-description">
            Explore in-depth perspectives and analyses of the INTJ personality
            type.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-intj-video-id' with an actual YouTube video ID for INTJ */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/p71m6O1uo3I?si=oGdAiehxK7N5mvWn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Famous INTJs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable INTJs in History & Fiction</h2>
          <p className="section-description">
            Visionary strategists and independent thinkers, INTJ traits have
            shaped innovation and inspired stories.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/intj-famous-people.png" // Placeholder for image
              alt="Famous INTJs visual - a collage of visionary leaders and thinkers"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Elon Musk:</strong> Entrepreneur and innovator known for
                his futuristic vision and strategic thinking.
              </li>
              <li>
                <strong>Isaac Newton:</strong> Groundbreaking scientist,
                embodying deep analytical thought and independent
                problem-solving.
              </li>
              <li>
                <strong>Hillary Clinton:</strong> Strategic and determined
                political leader with a focus on long-term goals.
              </li>
              <li>
                <strong>Professor Moriarty (Sherlock Holmes):</strong>{' '}
                Mastermind villain with complex planning and intellectual
                superiority.
              </li>
              <li>
                <strong>Arya Stark (Game of Thrones):</strong> Independent,
                focused, and driven by personal goals and principles.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the INTJ
          </h2>
          <p className="section-description">
            Understanding the INTJ through the lens of the widely recognized
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
                <div className="bar-fill high" style={{width: '90%'}}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '25%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
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
                <div className="bar-fill medium" style={{width: '40%'}}></div>
              </div>
              <span className="ocean-score-label">Medium-Low</span>
            </div>
          </div>
          <p className="ocean-note">
            INTJs typically score{' '}
            <strong>high in Openness to Experience</strong>, highlighting their
            imaginative and innovative mindset. Their{' '}
            <strong>very high Conscientiousness</strong> reflects strong
            self-discipline and goal orientation. They tend to have{' '}
            <strong>low Extraversion</strong>, favoring introspection and
            independence over social engagement. Their{' '}
            <strong>medium Agreeableness</strong> indicates a pragmatic and
            straightforward style, while <strong>medium-low Neuroticism</strong>{' '}
            suggests emotional stability and resilience.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default INTJ;
