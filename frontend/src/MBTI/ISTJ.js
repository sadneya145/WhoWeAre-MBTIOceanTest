import React from "react";
import "./style.css"; // Assuming style.css contains the custom styles
import Header from "../Pages/Header/Header";
import Footer from '../Pages/Footer/Footer';

const ISTJ = () => {
  return (
    <div>
      <Header></Header>
      <div className="personality-container istj-theme">
        {/* Page Title and Slogan */}
        <header className="personality-header">
          <h1 className="personality-title">ISTJ – The Logistician</h1>
          <p className="personality-subtitle">
            The bedrock of society: Responsible, detail-oriented, and keepers of
            tradition and order.
          </p>
        </header>

        {/* Character Showcase Section */}
        <section className="personality-section character-showcase">
          <h2 className="section-title">Iconic ISTJ Personalities</h2>
          <p className="section-description">
            See how the ISTJ's dedication to duty and meticulous nature are
            reflected in these beloved characters.
          </p>
          <div className="character-grid">
            <div className="character-card">
              <img
                src="https://contentful.harrypotter.com/usf1vwtuqyxm/4tNCXEveHBZWp1AgccZg52/39c30ab4bc67842362b78ca5ab8e0eef/HP-F4-goblet-of-fire-hermione-great-hall-smiling-book-web-landscape?w=1200&fit=fill&f=top"
                alt="Hermione Granger"
                className="character-image"
              />
              <h3 className="character-name">Hermione Granger</h3>
              <p className="character-description">
                Her unwavering adherence to rules, thirst for knowledge, and
                systematic approach to magic make her a quintessential ISTJ. She
                is the logical anchor of the Golden Trio.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://www.cnet.com/a/img/resize/62164797d88c658f2b774f7b3afd9156797b7526/hub/2017/08/03/75c3b0ae-5a2d-4d75-b72b-055247b4378f/marvelinfinitywar-captainamerica.jpg?auto=webp&fit=crop&height=900&width=1200"
                alt="Captain America"
                className="character-image"
              />
              <h3 className="character-name">Captain America (Steve Rogers)</h3>
              <p className="character-description">
                A man of honor, duty, and unwavering principles, Captain America
                embodies the ISTJ's strong sense of responsibility and commitment
                to what is right, even in the face of immense challenges.
              </p>
            </div>
            <div className="character-card">
              <img
                src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/c/c5/Eddard_stark_and_ice.jpg"
                alt="Ned Stark"
                className="character-image"
              />
              <h3 className="character-name">Ned Stark</h3>
              <p className="character-description">
                Known for his stern adherence to justice, family duty, and a strong moral compass, Ned Stark from Game of Thrones exemplifies the traditional and principled nature of an ISTJ.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="personality-section introduction-section">
          <h2 className="section-title">Introduction to the Logistician</h2>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                ISTJs, or Logisticians, are the anchors of reliability in our
                world. They are characterized by their deep respect for facts,
                tradition, and a meticulously organized approach to life. For an
                ISTJ, efficiency and practicality aren't just preferences –
                they're fundamental principles. They thrive in environments where
                clarity, structure, and a clear set of rules are present.
              </p>
              <p>
                While often perceived as reserved, their quiet demeanor belies a
                powerful sense of duty and an impressive capacity for hard work.
                They are the individuals who ensure tasks are completed correctly
                and on time, valuing integrity and consistency above all else.
              </p>
            </div>
            <img
              src="https://img.freepik.com/free-vector/organizing-projects-concept-illustration_114360-632.jpg"
              alt="ISTJ Introduction Visual - a person meticulously organizing documents"
              className="section-image intro-image"
            />
          </div>
        </section>

        {/* Strengths & Weaknesses Section */}
        <section className="personality-section strengths-weaknesses-section">
          <h2 className="section-title">Navigating the ISTJ Landscape</h2>
          <p className="section-description">
            Understanding the core traits that define Logisticians.
          </p>
          <div className="content-with-image">
            <div className="text-content">
              <h3 className="subsection-title">Core Strengths</h3>
              <ul className="strength-list">
                <li>
                  <span className="icon">✔️</span>
                  <strong>Highly Responsible & Dependable:</strong> When an ISTJ
                  commits to something, consider it done. Their word is their bond,
                  and they take their obligations seriously.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Detail-Oriented & Accurate:</strong> With an eye for
                  precision, ISTJs excel at tasks requiring meticulous attention
                  and accuracy, ensuring high-quality outcomes.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Logical & Practical:</strong> They approach problems
                  with a grounded, realistic mindset, favoring proven methods and
                  tangible solutions over abstract theories.
                </li>
                <li>
                  <span className="icon">✔️</span>
                  <strong>Calm & Steady Under Pressure:</strong> In chaotic
                  situations, ISTJs remain composed, focusing on practical steps
                  to restore order.
                </li>
              </ul>

              <h3 className="subsection-title">Potential Weaknesses</h3>
              <ul className="weakness-list">
                <li>
                  <span className="icon">❌</span>
                  <strong>Difficulty with Emotional Expression:</strong> While
                  they feel deeply, ISTJs may struggle to articulate their emotions,
                  leading to misunderstandings.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Can Be Inflexible/Overly Traditional:</strong> Their
                  strong adherence to established methods can sometimes make them
                  resistant to new ideas or spontaneous changes.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>May Overlook the Big Picture:</strong> Their focus on
                  details can occasionally lead them to miss broader implications or
                  alternative perspectives.
                </li>
                <li>
                  <span className="icon">❌</span>
                  <strong>Prone to Self-Blame:</strong> Due to their high standards,
                  ISTJs can be overly critical of themselves when things go wrong,
                  even if it's beyond their control.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Career Paths Section */}
        <section className="personality-section career-paths-section">
          <h2 className="section-title">Ideal Career Landscapes for ISTJs</h2>
          <p className="section-description">
            ISTJs thrive in environments that reward their precision, reliability,
            and commitment to established procedures.
          </p>
          <div className="content-with-image reverse-on-mobile">
            <div className="text-content">
              <p>
                The Logistician's natural inclination towards order, logic, and
                meticulous execution makes them invaluable in professions that
                demand precision and adherence to established protocols. They are
                often the backbone of any organization, ensuring that systems run
                smoothly and efficiently.
              </p>
              <p>
                Ideal career paths often include roles where structure, clear
                expectations, and a logical progression of tasks are paramount.
                They are excellent at managing data, enforcing regulations, and
                maintaining operational integrity.
              </p>
              <ul className="career-list">
                <li><strong>Administrator/Office Manager:</strong> Their organizational skills shine.</li>
                <li><strong>Accountant/Auditor:</strong> Precision and detail are key.</li>
                <li><strong>Judge/Law Enforcement:</strong> Upholding rules and seeking justice.</li>
                <li><strong>Military Officer:</strong> Discipline, hierarchy, and duty are central.</li>
                <li><strong>Engineer:</strong> Applying logical principles to solve practical problems.</li>
                <li><strong>Data Analyst:</strong> Managing and interpreting complex data sets.</li>
              </ul>
            </div>
            <img
              src="https://img.freepik.com/free-vector/flat-engineering-construction_52683-59211.jpg?semt=ais_hybrid&w=740"
              alt="Career paths visual - a variety of professional settings like an office, a courtroom, a military setting"
              className="section-image career-image"
            />
          </div>
        </section>

        {/* Interactive Video Section */}
        <section className="personality-section video-section">
          <h2 className="section-title">Dive Deeper: Videos on the ISTJ</h2>
          <p className="section-description">
            Explore comprehensive insights into the ISTJ personality type through
            these curated videos.
          </p>
          <div className="video-wrapper">
            {/* Replace 0 with an actual YouTube video ID for ISTJ */}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BSIPI8jOwvg?si=mLCgKYZo7DQfmHPx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </section>

        {/* Famous ISTJs Section */}
        <section className="personality-section famous-istjs-section">
          <h2 className="section-title">Notable ISTJs in History & Fiction</h2>
          <p className="section-description">
            From stoic leaders to methodical thinkers, ISTJ traits have shaped
            history and captivated audiences.
          </p>
          <div className="content-with-image">
            <img
              src="https://static1.personality-database.com/famous-people/istj-famous-people.png"
              alt="Famous ISTJs visual - a collage of historical figures and fictional characters"
              className="section-image famous-image"
            />
            <ul className="famous-list text-content">
              <li>
                <strong>George Washington:</strong> The first U.S. President,
                known for his disciplined leadership and unwavering commitment to
                establishing a stable nation.
              </li>
              <li>
                <strong>Angela Merkel:</strong> Former German Chancellor,
                recognized for her pragmatic, methodical, and data-driven approach
                to politics.
              </li>
              <li>
                <strong>Queen Elizabeth II:</strong> A monarch dedicated to duty,
                tradition, and unwavering service throughout her reign.
              </li>
              <li>
                <strong>John D. Rockefeller:</strong> An industrialist known for
                his meticulous planning and systematic approach to building his
                empire.
              </li>
              <li>
                <strong>Katniss Everdeen (The Hunger Games):</strong> While initially appearing
                stoic, her strong sense of responsibility for her family and her
                practical, survival-oriented mindset align with ISTJ traits.
              </li>
            </ul>
          </div>
        </section>

        {/* OCEAN Mapping Section */}
        <section className="personality-section ocean-mapping-section">
          <h2 className="section-title">The Big Five: Deconstructing the ENFJ</h2>
          <p className="section-description">
            Understanding the ENFJ through the lens of the widely recognized OCEAN
            (Big Five) personality traits.
          </p>
          <div className="ocean-traits">
            <div className="ocean-bar-container">
              <label className="ocean-label">Openness to Experience</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: "85%" }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Conscientiousness</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: "80%" }}></div>
              </div>
              <span className="ocean-score-label">High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Extraversion</label>
              <div className="bar-bg">
                <div className="bar-fill high" style={{ width: "90%" }}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Agreeableness</label>
              <div className="bar-bg">
                <div className="bar-fill very-high" style={{ width: "95%" }}></div>
              </div>
              <span className="ocean-score-label">Very High</span>
            </div>
            <div className="ocean-bar-container">
              <label className="ocean-label">Neuroticism</label>
              <div className="bar-bg">
                <div className="bar-fill medium" style={{ width: "50%" }}></div>
              </div>
              <span className="ocean-score-label">Medium</span>
            </div>
          </div>
          <p className="ocean-note">
            ENFJs generally score <strong>very high in Extraversion and Agreeableness</strong>, reflecting their warm, outgoing, and compassionate nature. Their <strong>high Openness to Experience</strong> indicates creativity and openness to new ideas, while a <strong>high level of Conscientiousness</strong> highlights their organized, responsible approach. Neuroticism tends to be moderate, allowing ENFJs to manage stress effectively while remaining sensitive to the emotions of others.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ISTJ;