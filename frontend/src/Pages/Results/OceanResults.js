import React, { useEffect, useState, Suspense } from 'react';
import './OceanResults.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

// Dynamic MBTI Component Loader
const getMBTIComponent = (type) => {
  try {
    return React.lazy(() => import(`../../MBTI/${type}.js`));
  } catch (error) {
    return null;
  }
};

const OceanResults = () => {
  const [oceanScores, setOceanScores] = useState([]);
  const [mbtiType, setMbtiType] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://whoweare-mbtioceantest-results.onrender.com/results')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          const latest = data[0];

          const oceanOrder = ['O', 'C', 'E', 'A', 'N'];
          const traitMap = {
            O: 'Openness',
            C: 'Conscientiousness',
            E: 'Extraversion',
            A: 'Agreeableness',
            N: 'Neuroticism',
          };

          const scoresArray = oceanOrder.map(trait => ({
            trait: traitMap[trait],
            value: Number(latest.scores[trait]) * 10,
          }));

          setOceanScores(scoresArray);
          setMbtiType(latest.mbti);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching results:', error);
        setLoading(false);
      });
  }, []);

  const oceanData = oceanScores.length
    ? oceanScores
    : [
        { trait: 'Openness', value: 75 },
        { trait: 'Conscientiousness', value: 68 },
        { trait: 'Extraversion', value: 45 },
        { trait: 'Agreeableness', value: 82 },
        { trait: 'Neuroticism', value: 35 },
      ];

  const MBTIComponent = mbtiType ? getMBTIComponent(mbtiType) : null;

  if (loading) return <div className="loading">Loading your results...</div>;

  return (
    <div className="heading">
      <Header />
      <div className="ocean-results-container">
        <div className="results-header">
          <h1>Your Personality Results</h1>
          <p>
            Discover your unique personality profile based on the Big Five (OCEAN) model
          </p>
        </div>

        {/* OCEAN Score Section */}
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
                  <PolarAngleAxis dataKey="trait" tick={{ fill: '#213555', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#3E5879', fontSize: 10 }} />
                  <Radar name="Personality" dataKey="value" stroke="#213555" fill="#3E5879" fillOpacity={0.3} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="ocean-description">
            <p>
              Your OCEAN personality profile reveals a unique combination of traits that shape how you interact with the world, process information, and approach life's challenges.
            </p>
          </div>
        </div>

        {/* Dynamically Render MBTI Type Page */}
        <div className="mbti-fullpage">
          <Suspense fallback={<div className="loading">Loading MBTI page...</div>}>
            {MBTIComponent ? <MBTIComponent standalone={false} /> : <p>No MBTI profile available.</p>}
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OceanResults;
