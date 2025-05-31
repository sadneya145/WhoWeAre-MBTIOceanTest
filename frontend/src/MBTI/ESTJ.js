import React from "react";
import "./style.css"; // Assuming style.css contains the custom marine-themed styles
import Header from "../Pages/Header/Header";

const ESTJ = () => {
  return (
    <div>
        <Header/>
    <div className="personality-container estj-theme">
      {/* Page Title and Slogan */}
      <header className="personality-header">
        <h1 className="personality-title">ESTJ – The Executive</h1>
        <p className="personality-subtitle">
          The natural leaders of the fleet: Organized, disciplined, and
          committed to keeping the ship running efficiently.
        </p>
      </header>

      {/* Character Showcase Section */}
      <section className="personality-section character-showcase">
        <h2 className="section-title">Iconic ESTJ Personalities</h2>
        <p className="section-description">
          Observe how the ESTJ's powerful drive for order and effective
          leadership manifests in these prominent figures.
        </p>
        <div className="character-grid">
          <div className="character-card">
            <img
              src="/images/estj-dwight-schrute.jpg" // Image for Dwight Schrute
              alt="Dwight Schrute"
              className="character-image"
            />
            <h3 className="character-name">Dwight Schrute</h3>
            <p className="character-description">
              From The Office, Dwight's unwavering adherence to rules,
              hierarchical thinking, and drive to enforce order within Dunder
              Mifflin are classic ESTJ traits. He's the loyal, by-the-book
              first mate.
            </p>
          </div>
          <div className="character-card">
            <img
              src="/images/estj-sandra-bullock-the-blind-side.jpg" // Image for Sandra Bullock (The Blind Side)
              alt="Leigh Anne Tuohy (Sandra Bullock)"
              className="character-image"
            />
            <h3 className="character-name">Leigh Anne Tuohy</h3>
            <p className="character-description">
              As portrayed by Sandra Bullock in The Blind Side, Leigh Anne is a
              force of nature, taking charge and creating structure and opportunity
              for Michael Oher with her practical, no-nonsense approach.
            </p>
          </div>
          <div className="character-card">
            <img
              src="/images/estj-boromir.jpg" // Image for Boromir
              alt="Boromir"
              className="character-image"
            />
            <h3 className="character-name">Boromir</h3>
            <p className="character-description">
              In The Lord of the Rings, Boromir is a valiant and dutiful leader
              of men, always focused on practical solutions and protecting his
              people, embodying the ESTJ's commitment to responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="personality-section introduction-section">
        <h2 className="section-title">Introduction to The Executive</h2>
        <div className="content-with-image reverse-on-mobile">
          <div className="text-content">
            <p>
              ESTJs, or Executives, are the steadfast navigators and captains
              of any endeavor. They thrive on establishing order, upholding
              tradition, and ensuring that systems run smoothly and efficiently.
              For an ESTJ, a clear plan, defined roles, and measurable results
              are the keys to success, much like a well-charted course for a ship.
            </p>
            <p>
              They are direct, decisive, and dedicated to their responsibilities,
              often stepping into leadership roles naturally. Their strong work
              ethic and belief in proven methods make them invaluable in
              bringing stability and structure to any organization or community.
              They are the ones who ensure the ship stays on course through any storm.
            </p>
          </div>
          <img
            src="/images/estj-intro.jpg" // Placeholder for image
            alt="ESTJ Introduction Visual - a captain confidently commanding a ship"
            className="section-image intro-image"
          />
        </div>
      </section>

      {/* Strengths & Weaknesses Section */}
      <section className="personality-section strengths-weaknesses-section">
        <h2 className="section-title">Navigating the ESTJ Landscape</h2>
        <p className="section-description">
          Understanding the core traits that define these resolute leaders.
        </p>
        <div className="content-with-image">
          <img
            src="/images/estj-strengths-weaknesses.jpg" // Placeholder for image
            alt="Strengths and Weaknesses Visual - an anchor representing stability and a compass representing direction"
            className="section-image sw-image"
          />
          <div className="text-content">
            <h3 className="subsection-title">Core Strengths</h3>
            <ul className="strength-list">
              <li>
                <span className="icon">✔️</span>
                <strong>Strong-Willed & Dutiful:</strong> They possess a deep sense of
                duty and responsibility, relentlessly pursuing goals and upholding commitments.
              </li>
              <li>
                <span className="icon">✔️</span>
                <strong>Excellent Organizers:</strong> ESTJs excel at creating and maintaining
                systems, ensuring clarity, efficiency, and productivity. They chart the course.
              </li>
              <li>
                <span className="icon">✔️</span>
                <strong>Direct & Honest:</strong> They communicate clearly and without
                pretense, valuing straightforwardness in all interactions.
              </li>
              <li>
                <span className="icon">✔️</span>
                <strong>Dedicated & Traditional:</strong> They respect established hierarchies and
                proven methods, making them reliable pillars of society.
              </li>
            </ul>

            <h3 className="subsection-title">Potential Weaknesses</h3>
            <ul className="weakness-list">
              <li>
                <span className="icon">❌</span>
                <strong>Inflexible & Stubborn:</strong> Their strong adherence to rules can make
                them resistant to new ideas or spontaneous changes, like a ship unable to turn quickly.
              </li>
              <li>
                <span className="icon">❌</span>
                <strong>Judgmental:</strong> They may quickly form opinions and struggle to accept
                alternative perspectives, especially if they deviate from what they consider "right."
              </li>
              <li>
                <span className="icon">❌</span>
                <strong>Difficulty with Emotions:</strong> ESTJs may struggle to express or
                understand complex emotions, both their own and others', prioritizing logic over feelings.
              </li>
              <li>
                <span className="icon">❌</span>
                <strong>Can Be Overly Controlling:</strong> Their desire for order can sometimes
                manifest as a need to micromanage or dictate others' actions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="personality-section career-paths-section">
        <h2 className="section-title">Ideal Career Landscapes for ESTJs</h2>
        <p className="section-description">
          ESTJs thrive in structured environments where their leadership,
          organizational prowess, and commitment to clear objectives are valued.
        </p>
        <div className="content-with-image reverse-on-mobile">
          <div className="text-content">
            <p>
              The Executive's natural inclination towards leadership, efficiency,
              and logical decision-making makes them invaluable in roles that
              require managing people and projects effectively. They are excellent
              at creating and enforcing policies, ensuring accountability, and
              driving results.
            </p>
            <p>
              They seek careers where their practical approach and dedication to
              order can make a tangible impact, acting as the reliable backbone of
              any organization. They are the captains who ensure the vessel of a
              company reaches its destination.
            </p>
            <ul className="career-list">
              <li><strong>Manager/Executive:</strong> Directing teams and operations.</li>
              <li><strong>Law Enforcement Officer:</strong> Upholding laws and maintaining order.</li>
              <li><strong>Military Leader:</strong> Commanding units and executing strategies.</li>
              <li><strong>Financial Officer:</strong> Managing resources with precision and responsibility.</li>
              <li><strong>Teacher/Administrator:</strong> Structuring learning environments and enforcing policies.</li>
            </ul>
          </div>
          <img
            src="/images/estj-career.jpg" // Placeholder for image
            alt="Career paths visual - a bustling office, a military commander, a courtroom"
            className="section-image career-image"
          />
        </div>
      </section>

      {/* Interactive Video Section */}
      <section className="personality-section video-section">
        <h2 className="section-title">Dive Deeper: Videos on the ESTJ</h2>
        <p className="section-description">
          Explore comprehensive insights into the ESTJ personality type through
          these curated videos.
        </p>
        <div className="video-wrapper">
          {/* Replace 'your-estj-video-id' with an actual YouTube video ID for ESTJ */}
          <iframe
            src="https://www.youtube.com/embed/your-estj-video-id"
            title="Understanding the ESTJ Personality Type"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="personality-video"
          ></iframe>
        </div>
        <p className="video-note">
          *Note: Replace "your-estj-video-id" with a relevant YouTube video ID
          for optimal content.
        </p>
      </section>

      {/* Famous ESTJs Section */}
      <section className="personality-section famous-istjs-section">
        <h2 className="section-title">Notable ESTJs in History & Fiction</h2>
        <p className="section-description">
          From decisive leaders to organized figures, ESTJ traits have shaped
          history and influenced narratives.
        </p>
        <div className="content-with-image">
          <img
            src="/images/estj-famous.jpg" // Placeholder for image
            alt="Famous ESTJs visual - a collage of leaders and organized figures"
            className="section-image famous-image"
          />
          <ul className="famous-list text-content">
            <li>
              <strong>George W. Bush:</strong> Former U.S. President, known for his
              decisive leadership and emphasis on clear objectives.
            </li>
            <li>
              <strong>Martha Stewart:</strong> Media personality and businesswoman,
              embodying meticulous organization and high standards.
            </li>
            <li>
              <strong>Michelle Obama:</strong> Former First Lady, recognized for her
              practicality, discipline, and community leadership.
            </li>
            <li>
              <strong>Vito Corleone (The Godfather):</strong> A disciplined and
              traditional leader, maintaining order within his complex organization.
            </li>
            <li>
              <strong>Judge Judy Sheindlin:</strong> Known for her no-nonsense,
              direct, and logical approach to law and order.
            </li>
          </ul>
        </div>
      </section>

      {/* OCEAN Mapping Section */}
      <section className="personality-section ocean-mapping-section">
        <h2 className="section-title">The Big Five: Deconstructing the ESTJ</h2>
        <p className="section-description">
          Understanding the ESTJ through the lens of the widely recognized OCEAN
          (Big Five) personality traits.
        </p>
        <div className="ocean-traits">
          <div className="ocean-bar-container">
            <label className="ocean-label">Openness to Experience</label>
            <div className="bar-bg">
              <div className="bar-fill low" style={{ width: "35%" }}></div>
            </div>
            <span className="ocean-score-label">Low</span>
          </div>
          <div className="ocean-bar-container">
            <label className="ocean-label">Conscientiousness</label>
            <div className="bar-bg">
              <div className="bar-fill high" style={{ width: "95%" }}></div>
            </div>
            <span className="ocean-score-label">Very High</span>
          </div>
          <div className="ocean-bar-container">
            <label className="ocean-label">Extraversion</label>
            <div className="bar-bg">
              <div className="bar-fill high" style={{ width: "80%" }}></div>
            </div>
            <span className="ocean-score-label">High</span>
          </div>
          <div className="ocean-bar-container">
            <label className="ocean-label">Agreeableness</label>
            <div className="bar-bg">
              <div className="bar-fill medium" style={{ width: "45%" }}></div>
            </div>
            <span className="ocean-score-label">Medium-Low</span>
          </div>
          <div className="ocean-bar-container">
            <label className="ocean-label">Neuroticism</label>
            <div className="bar-bg">
              <div className="bar-fill medium" style={{ width: "40%" }}></div>
            </div>
            <span className="ocean-score-label">Medium-Low</span>
          </div>
        </div>
        <p className="ocean-note">
          ESTJs typically score <strong>very high in Conscientiousness</strong>, reflecting
          their highly organized, disciplined, and dutiful nature. Their <strong>high
          Extraversion</strong> indicates their assertive, sociable, and leadership-oriented
          tendencies. They tend to have <strong>low Openness to Experience</strong>, preferring
          established methods and traditional approaches. Their scores in Agreeableness
          and Neuroticism are often in the lower-to-medium range, indicating a direct,
          no-nonsense approach and relatively stable emotional responses.
        </p>
      </section>

      {/* Call to Action/Footer */}
      <footer className="personality-footer">
        <p>
          Ready to navigate more personality types?
          <a href="/explore" className="footer-link">
            Chart Your Course!
          </a>
        </p>
      </footer>
    </div>
    </div>
  );
};

export default ESTJ;