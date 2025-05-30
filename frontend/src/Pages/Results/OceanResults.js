import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './OceanResults.css';

const OceanResults = ({ oceanScores, mbtiType }) => {
  // Sample data - replace with your actual props
  const defaultOceanData = [
    { trait: 'Openness', value: 75 },
    { trait: 'Conscientiousness', value: 68 },
    { trait: 'Extraversion', value: 45 },
    { trait: 'Agreeableness', value: 82 },
    { trait: 'Neuroticism', value: 35 }
  ];

  const oceanData = oceanScores || defaultOceanData;
  const personalityType = mbtiType || "INFP";

  // MBTI descriptions mapping
  const mbtiDescriptions = {
    "INFP": {
      shortDesc: "The Mediator - Creative idealists with a strong sense of personal values and a desire to make the world a better place.",
      description: "INFPs are imaginative idealists, guided by their own core values and beliefs. They are creative, introspective, and driven by a desire to understand themselves and the world around them. They seek meaning and authenticity in their relationships and endeavors, often serving as catalysts for positive change.",
      strengths: [
        "Strong personal values and integrity",
        "Creative and imaginative thinking",
        "Empathetic and compassionate",
        "Flexible and adaptable",
        "Passionate about causes they believe in"
      ],
      weaknesses: [
        "Can be overly idealistic",
        "Sensitive to criticism",
        "Difficulty with routine tasks",
        "May procrastinate on important decisions",
        "Can take things too personally"
      ],
      careers: [
        "Writer/Author",
        "Counselor/Therapist",
        "Artist/Designer",
        "Social Worker",
        "Human Resources",
        "Psychology",
        "Non-profit work"
      ],
      communicationTips: [
        "Be genuine and authentic in your interactions",
        "Listen actively and show empathy",
        "Avoid being too critical or confrontational",
        "Express your values and beliefs clearly",
        "Give others space to share their perspectives"
      ],
      learningStyle: "Learn best through hands-on experience, personal connection to material, and creative expression. Prefer flexible learning environments that allow for self-direction.",
      compatibleTypes: ["ENFP", "ENTP", "INFJ", "ENFJ"],
      leastCompatible: ["ESTJ", "ESFJ", "ISTJ", "ISFJ"],
      celebrities: ["Johnny Depp", "Tim Burton", "J.K. Rowling", "Kurt Cobain", "Princess Diana"]
    }
    // Add more MBTI types as needed
  };

  const currentType = mbtiDescriptions[personalityType] || mbtiDescriptions["INFP"];

  const getOceanDescription = () => {
    return "Your OCEAN personality profile reveals a unique combination of traits that shape how you interact with the world, process information, and approach life's challenges. Each dimension represents a spectrum of behaviors and preferences that contribute to your overall personality.";
  };

  return (
    <div className="ocean-results-container">
      <div className="results-header">
        <h1>Your Personality Results</h1>
        <p>Discover your unique personality profile based on the Big Five (OCEAN) model</p>
      </div>

      {/* OCEAN Scores and Radar Chart */}
      <div className="ocean-section">
        <div className="ocean-content">
          <div className="ocean-scores">
            <h2>Your OCEAN Scores</h2>
            <div className="scores-list">
              {oceanData.map((item, index) => (
                <div key={index} className="score-item">
                  <div className="score-label">
                    <span className="trait-name">{item.trait}</span>
                    <span className="score-value">{item.value}%</span>
                  </div>
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="radar-chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={oceanData}>
                <PolarGrid stroke="#3E5879" />
                <PolarAngleAxis 
                  dataKey="trait" 
                  tick={{ fill: '#213555', fontSize: 12 }}
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: '#3E5879', fontSize: 10 }}
                />
                <Radar
                  name="Personality"
                  dataKey="value"
                  stroke="#213555"
                  fill="#3E5879"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="ocean-description">
          <p>{getOceanDescription()}</p>
        </div>
      </div>

      {/* MBTI Type */}
      <div className="mbti-section">
        <div className="mbti-header">
          <h2>Your Personality Type</h2>
          <div className="mbti-type">{personalityType}</div>
        </div>
        <p className="mbti-short-desc">{currentType.shortDesc}</p>
      </div>

      {/* Detailed Description */}
      <div className="detailed-section">
        <div className="detail-card">
          <h3>Personality Description</h3>
          <p>{currentType.description}</p>
        </div>

        <div className="detail-grid">
          <div className="detail-card">
            <h3>Strengths</h3>
            <ul>
              {currentType.strengths.map((strength, index) => (
                <li key={index}>{strength}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3>Areas for Growth</h3>
            <ul>
              {currentType.weaknesses.map((weakness, index) => (
                <li key={index}>{weakness}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3>Career Paths</h3>
            <ul>
              {currentType.careers.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>
          </div>

          <div className="detail-card">
            <h3>Communication Tips</h3>
            <ul>
              {currentType.communicationTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-card">
          <h3>Learning Style</h3>
          <p>{currentType.learningStyle}</p>
        </div>

        <div className="compatibility-section">
          <div className="detail-card">
            <h3>Most Compatible Types</h3>
            <div className="type-tags">
              {currentType.compatibleTypes.map((type, index) => (
                <span key={index} className="type-tag compatible">{type}</span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3>Challenging Matches</h3>
            <div className="type-tags">
              {currentType.leastCompatible.map((type, index) => (
                <span key={index} className="type-tag challenging">{type}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="detail-card">
          <h3>Famous People with Your Type</h3>
          <div className="celebrities">
            {currentType.celebrities.map((celebrity, index) => (
              <span key={index} className="celebrity-tag">{celebrity}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OceanResults;
