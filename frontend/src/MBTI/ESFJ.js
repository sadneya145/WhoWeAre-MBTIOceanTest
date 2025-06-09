import React from 'react';
import './style.css'; // Assuming style.css contains the custom styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';

const ESFJ = () => {
  return (
    <div>
      <Header />
      <div className="personality-container esfj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ESFJ – The Consul</h1>
          <p className="personality-subtitle">
            Warm-hearted, conscientious, and cooperative — the social glue of
            any community.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ESFJ Personalities</h2>
          <p className="section-description">
            Discover the beloved characters who embody ESFJ's warmth and
            dedication to others.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://blog.siegfriedgroup.com/wp-content/uploads/2018/04/Leslie-Knope_3x2.jpg"
                alt="Leslie Knope"
                className="character-image"
              />
              <h3 className="character-name">Leslie Knope</h3>
              <p className="character-description">
                Enthusiastic, organized, and deeply committed to her community,
                Leslie Knope from "Parks and Recreation" exemplifies the ESFJ's
                dedication to service and connection.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfzSc5KW5HMviERLdJeZOXp9pFlS5JOmpYg&s"
                alt="Monica Geller"
                className="character-image"
              />
              <h3 className="character-name">Monica Geller</h3>
              <p className="character-description">
                Monica’s nurturing nature, love of order, and desire to care for
                her friends highlight classic ESFJ traits of loyalty and
                practical support.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/03/harry-potter-molly-weasley.jpeg?q=70&fit=contain&w=1200&h=628&dpr=1"
                alt="Molly Weasley"
                className="character-image"
              />
              <h3 className="character-name">Molly Weasley</h3>
              <p className="character-description">
                The epitome of warmth and maternal care, Molly Weasley from the
                Harry Potter series is a caring, devoted ESFJ who places family
                above all.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to the Consul</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESFJs, known as Consuls, are the caring, social organizers of
                society. They are driven by a strong sense of duty to others and
                thrive on creating harmony and stability within their
                communities.
              </p>
              <p>
                Warm and conscientious, ESFJs are attuned to the needs of those
                around them and excel at providing practical help and emotional
                support. They enjoy traditions and value cooperation, often
                going the extra mile to maintain social bonds.
              </p>
            </div>
            <img
              src="https://media.istockphoto.com/id/1412778148/vector/online-meeting.jpg?s=612x612&w=0&k=20&c=bTK4nlDMQE-MBPzxVbzGt_FJYvkVVVmitVRW17zWXiI="
              alt="ESFJ Introduction Visual - a person helping others and organizing community"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ESFJ Landscape</h2>
          <p className="section-description">
            Key traits that define the ESFJ personality type.
          </p>
          <div className="content-with-image">

            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Highly Sociable & Empathetic:</strong> ESFJs thrive on
                  connection and can intuitively understand others’ feelings.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Organized & Dutiful:</strong> They excel at planning
                  and following through on responsibilities, often ensuring
                  group cohesion.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Warm & Supportive:</strong> ESFJs are natural
                  caregivers, always willing to lend a helping hand or listening
                  ear.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Practical & Realistic:</strong> They focus on
                  realistic solutions and what works best for everyone involved.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Need for Approval:</strong> ESFJs may be overly
                  concerned with pleasing others and struggle with criticism.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Reluctance to Change:</strong> They often prefer
                  traditions and may resist unfamiliar ideas or methods.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Overly Self-Sacrificing:</strong> Their tendency to
                  put others first can lead to burnout or neglecting their own
                  needs.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty Handling Conflict:</strong> ESFJs may avoid
                  confrontation, sometimes at the expense of addressing
                  important issues.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ESFJs</h2>
          <p className="section-description">
            Careers that leverage ESFJs’ interpersonal skills, organization, and
            desire to help others.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESFJs excel in professions where they can directly impact
                people's well-being and foster community. They often flourish in
                roles requiring strong social skills, structure, and dedication.
              </p>
              <p>
                Their natural warmth and reliability make them excellent team
                players and leaders who ensure harmony and productivity.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Teacher/Educator:</strong> Guiding and nurturing
                  students.
                </li>
                <li>
                  <strong>Healthcare Professional:</strong> Nursing, social
                  work, or counseling.
                </li>
                <li>
                  <strong>Event Planner:</strong> Organizing social gatherings
                  and celebrations.
                </li>
                <li>
                  <strong>Human Resources Specialist:</strong> Managing
                  workplace relations.
                </li>
                <li>
                  <strong>Customer Service Manager:</strong> Ensuring client
                  satisfaction and support.
                </li>
                <li>
                  <strong>Religious Leader/Clergy:</strong> Providing guidance
                  and community support.
                </li>
              </ul>
            </div>
            <img
              src="https://online.visual-paradigm.com/repository/images/6748adf2-f238-4d5a-8fe4-6939312c4408/healthcare-illustration-design/hospital-illustration.png"
              alt="Career paths visual - healthcare, education, and social events"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ESFJ</h2>
          <p className="section-description">
            Learn more about the ESFJ personality through engaging videos.
          </p>
          <div className="video-wrapper">
            {/* Replace with an actual YouTube video ID about ESFJ */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/h-LKxyJE6YY?si=hbjEuipq8bD6VxlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>

        {/* Famous ESFJs Section */}
        <section className="personality-section famous-esfjs-section">
          <h2 className="section-title">Notable ESFJs in History & Fiction</h2>
          <p className="section-description">
            Warm-hearted and socially engaged, ESFJ traits have inspired
            leaders, performers, and beloved characters.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/esfj-famous-people.png"
              alt="Famous ESFJs visual - a collage of well-known personalities and characters"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Bill Clinton:</strong> 42nd President of the United
                States, known for his charismatic and people-oriented leadership
                style.
              </li>
              <li>
                <strong>Selena Gomez:</strong> Singer and actress admired for
                her warmth, empathy, and connection with fans.
              </li>
              <li>
                <strong>Taylor Swift:</strong> Musician and songwriter
                celebrated for her storytelling and engaging presence.
              </li>
              <li>
                <strong>Jennifer Garner:</strong> Actress known for her friendly
                and approachable persona.
              </li>
              <li>
                <strong>Samwise Gamgee (Lord of the Rings):</strong> Loyal
                friend and steadfast protector, exemplifying dedication and
                support.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ESFJ
          </h2>
          <p className="section-description">
            Understanding the ESFJ through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{ width: '55%' }}></div>
              </div>
              <span className="ocean-score-label">Moderate</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '85%' }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: '90%' }}></div>
              </div>
              <span className="ocean-score-label">High</span>
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
                <div className="bar-fill medium" style={{ width: '50%' }}></div>
              </div>
              <span className="ocean-score-label">Moderate</span>
            </div>
          </div>
          <p className="ocean-note">
            ESFJs typically show <strong>high Extraversion</strong>, reflecting
            their sociable and energetic nature. Their{' '}
            <strong>high Conscientiousness</strong> highlights a responsible and
            organized approach to life. Moderate <strong>Openness</strong>{' '}
            indicates a balanced appreciation for tradition and new experiences.
            Their <strong>high Agreeableness</strong> demonstrates warmth and
            cooperativeness, while moderate <strong>Neuroticism</strong>{' '}
            suggests some sensitivity to emotions but generally stable under
            pressure.
          </p>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ESFJ;
