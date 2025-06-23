import React from 'react';
import './style.css'; // Assuming style.css contains the custom marine-themed styles
import Header from '../Pages/Header/Header';
import Footer from '../Pages/Footer/Footer';
const ESTP = ({standalone = true}) => {
  return (
    <div>
      {standalone && <Header />}
      <div className="personality-container estp-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ESTP – The Entrepreneur</h1>
          <p className="personality-subtitle">
            The bold navigators of the seas: Energetic, spontaneous, and
            adaptable captains who thrive in the moment.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ESTP Personalities</h2>
          <p className="section-description">
            Witness the adventurous spirit and quick wit of these dynamic ESTP
            figures.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://cdn.marvel.com/content/1x/002irm_ons_inl_06_0.jpg"
                alt="Tony Stark"
                className="character-image"
              />
              <h3 className="character-name">Tony Stark (Iron Man)</h3>
              <p className="character-description">
                The brilliant and charismatic inventor, Tony thrives on
                innovation, risk-taking, and living on the edge — a true ESTP
                entrepreneur of the modern era.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://eachother.org.uk/wp-content/uploads/2017/09/eleanorroosevelt_640x400-1.jpg"
                alt="Eleanor Roosevelt"
                className="character-image"
              />
              <h3 className="character-name">Eleanor Roosevelt</h3>
              <p className="character-description">
                Known for her activism and courage, Eleanor was a bold and
                pragmatic leader who embraced challenges with resourcefulness.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://c.files.bbci.co.uk/fa50/live/0428c650-fca1-11ef-8e22-8daeea0feb09.jpg"
                alt="James Bond"
                className="character-image"
              />
              <h3 className="character-name">James Bond</h3>
              <p className="character-description">
                The daring secret agent who combines quick thinking, charm, and
                adaptability to navigate high-stakes situations with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to The Entrepreneur</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESTPs are the action-oriented sailors who thrive on excitement,
                practical solutions, and seizing opportunities as they arise.
                They have a knack for thinking on their feet and adapting
                swiftly to changing tides.
              </p>
              <p>
                Bold and energetic, ESTPs love to experience life fully, often
                diving into challenges headfirst. Their resourcefulness and
                charm make them natural problem-solvers and spontaneous leaders
                who keep the ship moving, even in stormy waters.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/ship-captain-illustration-download-in-svg-png-gif-file-formats--female-cruise-woman-pack-people-illustrations-4538025.png"
              alt="ESTP Introduction Visual - a captain steering a ship with confidence"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ESTP Waters</h2>
          <p className="section-description">
            Exploring the energetic and adaptable nature of ESTPs.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Energetic & Adventurous:</strong> ESTPs bring
                  enthusiasm and excitement to new challenges, inspiring those
                  around them.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Practical & Realistic:</strong> They excel at finding
                  immediate, effective solutions grounded in the present moment.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Adaptable & Resourceful:</strong> Quick to adjust
                  plans and tactics when conditions change, they thrive in
                  dynamic environments.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Social & Charismatic:</strong> With natural charm and
                  confidence, ESTPs engage easily with others and build
                  connections.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Impulsive & Risk-Taking:</strong> Their love for
                  excitement can sometimes lead to hasty decisions without fully
                  considering consequences.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Dislike for Routine:</strong> ESTPs often struggle
                  with long-term planning or repetitive tasks, preferring
                  spontaneity.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Insensitive at Times:</strong> They may overlook
                  others’ feelings when focusing on practical outcomes.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty with Commitment:</strong> Their need for
                  freedom and new experiences can make sustained commitments
                  challenging.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ESTPs</h2>
          <p className="section-description">
            ESTPs flourish in fast-paced, hands-on roles where adaptability and
            quick decisions are rewarded.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ESTPs excel in careers that allow them to be active, practical,
                and engaging. They enjoy environments that provide variety,
                excitement, and the opportunity to influence outcomes directly.
              </p>
              <p>
                Roles that involve crisis management, sales, entrepreneurship,
                or any fast-moving field suit their dynamic approach.
              </p>
              <ul className="career-list">
                <li>
                  <strong>Entrepreneur/Business Owner:</strong> Taking risks to
                  build new ventures.
                </li>
                <li>
                  <strong>Sales Representative:</strong> Using charm and
                  persuasion to close deals.
                </li>
                <li>
                  <strong>Emergency Medical Technician (EMT):</strong>{' '}
                  Responding quickly in critical situations.
                </li>
                <li>
                  <strong>Detective/Investigator:</strong> Solving problems with
                  hands-on investigation.
                </li>
                <li>
                  <strong>Event Planner/Promoter:</strong> Managing dynamic
                  projects and people.
                </li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-vector/wedding-planner-concept-illustration_114360-2560.jpg"
              alt="Career paths visual - a bustling marketplace, emergency responders, a business meeting"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ESTP</h2>
          <p className="section-description">
            Discover detailed insights into the ESTP personality type through
            these curated videos.
          </p>
          <div className="video-wrapper">
            {/* Replace 'your-estp-video-id' with an actual YouTube video ID for ESTP */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9Q92mX44S5s?si=xwHv6eyY_l3E-NdW"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </section>

        {/* Famous ESTPs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ESTPs in History & Fiction</h2>
          <p className="section-description">
            Energetic risk-takers and action-oriented problem solvers, ESTP
            traits bring excitement and adaptability to real-world challenges.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/estp-famous-people.png" // Placeholder for image
              alt="Famous ESTPs visual - a collage of dynamic leaders and adventurous figures"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>Ernest Hemingway:</strong> Adventurous writer known for
                his bold, direct style and love for excitement.
              </li>
              <li>
                <strong>Madonna:</strong> Bold performer and trendsetter with a
                fearless approach to creativity.
              </li>
              <li>
                <strong>Donald Trump:</strong> Assertive and pragmatic
                businessman and political figure, known for his decisive
                actions.
              </li>
              <li>
                <strong>Tony Stark / Iron Man (Marvel):</strong> Charismatic,
                quick-thinking innovator who thrives on excitement and
                challenges.
              </li>
              <li>
                <strong>James Bond:</strong> Resourceful and adaptable spy with
                a flair for high-stakes situations.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">
            The Big Five: Deconstructing the ESTP
          </h2>
          <p className="section-description">
            Understanding the ESTP through the lens of the widely recognized
            OCEAN (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '60%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill low" style={{width: '30%'}}></div>
              </div>
              <span className="ocean-score-label">Low</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div
                  className="bar-fill very-high"
                  style={{width: '95%'}}
                ></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{width: '55%'}}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
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
            ESTPs usually score <strong>very high in Extraversion</strong>,
            reflecting their energetic and outgoing nature. Their{' '}
            <strong>medium Openness</strong> shows curiosity and adaptability.
            They tend to have <strong>low Conscientiousness</strong>, favoring
            spontaneity over strict planning. Medium Agreeableness indicates a
            balanced approach to cooperation, while low Neuroticism suggests
            emotional resilience under pressure.
          </p>
        </section>
      </div>
      {standalone && <Footer />}
    </div>
  );
};

export default ESTP;
