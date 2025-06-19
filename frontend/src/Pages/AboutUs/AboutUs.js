// AboutUs.js
import React from 'react';
import './AboutUs.css';
import Header from '../Header/Header';
import { getAuth } from 'firebase/auth';
import Footer from '../Footer/Footer';

// about us 
const AboutUs = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const teamMembers = [
    {
      name: "Anshi Tiwari",
      role: "ML Engineer & Project Lead",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHcWPLo01KbYA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720016435672?e=1755129600&v=beta&t=XiLR6OkGXuNy2rRexDeel5Xq1OKjdEG87xy9_INtenQ",
      description: "Led project vision and built the AI personality engine."
    },
    {
      name: "Sadneya Samant",
      role: "Technical Lead & Backend Engineer",
      image: "./sadu_image.png",
      description: "Designed backend systems and databases."
    },
    {
      name: "Nikita Chhabria",
      role: "Software Engineer (Frontend)",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGK44EBhA2FKA/profile-displayphoto-shrink_800_800/B56ZcqNsCeHgAg-/0/1748759922283?e=1755129600&v=beta&t=KKYfJQg_lomBgGBuZHnGZikFgA4XPF1ebmiRb1KtQiY",
      description: "Built all user interfaces and designs."
    },
    {
      name: "Anish Kulkarni",
      role: "Software Engineer (Quiz & Testing)",
      image: "/anish_image.png",
      description: "Developed the quiz logic and testing."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Accuracy",
      description: "Our assessments are based on validated psychological research and proven methodologies."
    },
    {
      icon: "🔒",
      title: "Privacy",
      description: "Your personal data and quiz results are completely confidential and secure."
    },
    {
      icon: "🌟",
      title: "Insight",
      description: "We provide meaningful, actionable insights to help you understand yourself better."
    },
    {
      icon: "🤝",
      title: "Support",
      description: "Our team is dedicated to helping you on your journey of self-discovery."
    }
  ];

  return (
    <>      <Header user={user} />
      <div className="about-us">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1 className="hero-title">About <i>'Who We Are'</i></h1>
            <p className="hero-subtitle">
              Discover your unique personality profile through our scientifically-backed assessments
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <div className="mission-text">
                <h2 className="section-title">Our Mission</h2>
                <p className="mission-description">
                  We believe that understanding your personality is the key to unlocking your potential.
                  Our personality quiz is designed to provide you with deep insights into your
                  character traits, helping you make better decisions in your personal and professional life.
                </p>
                <p className="mission-description">
                  Built on the foundation of the Big Five (OCEAN) and MBTI personality model, our assessments are
                  scientifically validated and used by millions of people worldwide to gain
                  self-awareness, choose the right career path and improve their relationships.
                </p>
              </div>
              <div className="mission-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Team collaboration" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="team-intro">
              A team of college seniors building this passion project at the intersection of software development, machine learning, and human personality exploration.
            </p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <h2 className="cta-title">Ready to Discover Your Personality?</h2>
            <p className="cta-description">
              Take our comprehensive OCEAN personality quiz and unlock insights about yourself.
            </p>
            <button className="cta-button">Start Your Quiz</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );

};

export default AboutUs;