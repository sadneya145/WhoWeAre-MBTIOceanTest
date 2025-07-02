import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getAuth } from 'firebase/auth';


const faqData = [
    {
        question: "What is MBTI?",
        answer: "MBTI (Myers-Briggs Type Indicator) is a personality framework based on Carl Jung's theories that categorizes people into 16 personality types based on 4 dichotomies: Extraversion/Introversion, Sensing/Intuition, Thinking/Feeling, and Judging/Perceiving.",
    },
    {
        question: "What is the purpose of MBTI?",
        answer: "MBTI is commonly used for self-awareness, career guidance, relationship compatibility, and team dynamics.",
    },
    {
        question: "Who invented MBTI?",
        answer: "The MBTI was developed by Isabel Briggs Myers and her mother, Katharine Cook Briggs, based on Carl Jung's theories.",
    },
    {
        question: "Is MBTI scientifically valid?",
        answer: "While MBTI has been popular and useful in some contexts, it is often criticized for its lack of strong scientific validity and reliability.",
    },
    {
        question: "What is the OCEAN model?",
        answer: "OCEAN, also known as the Big Five, is a widely accepted model in psychology that measures five broad personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
    },
    {
        question: "Who created the OCEAN model?",
        answer: "The Big Five traits were identified through decades of research by multiple psychologists, with key contributions by Lewis Goldberg, Robert McCrae, and Paul Costa.",
    },
    {
        question: "Is the OCEAN model scientifically valid?",
        answer: "Yes, the OCEAN model is considered one of the most empirically supported frameworks in personality psychology.",
    },
    {
        question: "How does your website determine my type?",
        answer: "We use machine learning models trained on behavioral data and response patterns to estimate your scores and type classification.",
    },
    {
        question: "What kind of machine learning do you use?",
        answer: "We use supervised models trained on thousands of quiz responses and personality labels to identify patterns and predict accurate scores.",
    },
    {
        question: "How accurate are your results?",
        answer: "Our models show over 85% alignment with users' self-reported types in internal validation tests.",
    },
    {
        question: "Can my type change over time?",
        answer: "Yes, personality can evolve due to life experiences, maturity, or deliberate change, though core traits often remain stable.",
    },
    {
        question: "Do you store my data?",
        answer: "No, we do not store or share your personal responses or results. All processing is anonymous and private.",
    },
    {
        question: "Is this quiz free?",
        answer: "Yes, our quiz and detailed results are 100% free.",
    },
    {
        question: "Can I retake the test?",
        answer: "Absolutely! You can retake the quiz as many times as you'd like.",
    },
    {
        question: "Why do I get different results sometimes?",
        answer: "Your mood, mindset, or interpretation of questions can affect your responses and lead to slight variations.",
    },
    {
        question: "Are MBTI and OCEAN related?",
        answer: "They both aim to measure personality but use different models. OCEAN is more research-based, while MBTI focuses on type-based distinctions.",
    },
    {
        question: "Which is more accurate: MBTI or OCEAN?",
        answer: "OCEAN is more scientifically validated, but MBTI remains useful for understanding preferences and communication styles.",
    },
    {
        question: "Can I share my results?",
        answer: "Yes! We provide easy sharing options so you can post your type on social media.",
    },
    {
        question: "Do companies use these models?",
        answer: "Yes. MBTI is popular in HR and team-building. OCEAN is used in psychology research and hiring assessments.",
    },
    {
        question: "Do psychologists support MBTI?",
        answer: "Many psychologists prefer OCEAN, but MBTI is still used widely in personal development and coaching.",
    },
    {
        question: "What does E vs I mean?",
        answer: "Extraversion vs Introversion refers to whether you gain energy from interacting with people or from spending time alone.",
    },
    {
        question: "What does T vs F mean?",
        answer: "Thinking vs Feeling describes how you make decisions—either more logically or based on emotions and values.",
    },
    {
        question: "What is Neuroticism in OCEAN?",
        answer: "Neuroticism measures emotional stability—how easily you experience stress, anxiety, or mood swings.",
    },
    {
        question: "Is this based on astrology?",
        answer: "No. Personality psychology is not related to astrology. It uses behavioral and cognitive science.",
    },
    {
        question: "Can I improve my traits?",
        answer: "Yes! While your baseline may be natural, traits like conscientiousness or openness can be developed over time.",
    },
    {
        question: "Is this quiz for kids?",
        answer: "Our quiz is designed for users aged 13 and above. Parental guidance is advised for younger users.",
    },
    {
        question: "Can I use this for career planning?",
        answer: "Yes, both MBTI and OCEAN insights are helpful in identifying work styles and ideal job environments.",
    },
    {
        question: "How long does the quiz take?",
        answer: "It usually takes 5–7 minutes to complete each quiz.",
    },
    {
        question: "Can I see detailed results?",
        answer: "Yes! We provide full breakdowns and explanations for each trait after the quiz.",
    },
    {
        question: "Will you add more quizzes in the future?",
        answer: "Yes, we’re working on more interactive tools and psychology-based content. Stay tuned!"
    },
];


const FaqPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const auth = getAuth();
    const user = auth.currentUser;

    return (
        <>
            <Header user={user} />
            <div style={styles.container}>
                {/* Hero Section */}
                <section style={styles.hero}>
                    <div style={styles.heroOverlay}>
                        <div style={styles.heroContent}>
                            <div style={styles.heroIcon}>?</div>
                            <h1 style={styles.heroTitle}>FAQs</h1>
                            <p style={styles.heroSubtitle}>
                                Everything you need to know about our services
                            </p>
                            <div style={styles.heroTag}>
                                ✨ Quick answers to common questions
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Content Section */}
                <section style={styles.faqSection}>
                    <div style={styles.faqContainer}>
                        {/* Section Header */}
                        <div style={styles.sectionHeader}>
                            <h2 style={styles.sectionTitle}>
                                Frequently Asked Questions
                            </h2>
                            <div style={styles.divider}></div>
                            <p style={styles.sectionSubtitle}>
                                Can't find what you're looking for? Feel free to reach out to us directly.
                            </p>
                        </div>

                        {/* FAQ List */}
                        <div style={styles.faqList}>
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.faqItem,
                                        ...(activeIndex === index ? styles.faqItemActive : {})
                                    }}
                                >
                                    <button
                                        style={styles.faqQuestion}
                                        onClick={() => toggleIndex(index)}
                                    >
                                        <div style={styles.questionContent}>
                                            <div style={{
                                                ...styles.questionNumber,
                                                ...(activeIndex === index ? styles.questionNumberActive : {})
                                            }}>
                                                {index + 1}
                                            </div>
                                            <h3 style={styles.questionText}>
                                                {item.question}
                                            </h3>
                                        </div>
                                        <div style={{
                                            ...styles.toggleIcon,
                                            ...(activeIndex === index ? styles.toggleIconActive : {})
                                        }}>
                                            {activeIndex === index ? '−' : '+'}
                                        </div>
                                    </button>

                                    {activeIndex === index && (
                                        <div style={styles.faqAnswer}>
                                            <div style={styles.answerContent}>
                                                <p style={styles.answerText}>
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Call to Action */}
                        <div style={styles.ctaSection}>
                            <h3 style={styles.ctaTitle}>Still have questions?</h3>
                            <p style={styles.ctaText}>
                                We're here to help! Don't hesitate to reach out to our team for personalized assistance.
                            </p>

                            {/* Contact Info */}
                            <div style={styles.contactSection}>
                                <h3 style={styles.contactTitle}>Contact Us</h3>
                                <div style={styles.contactInfo}>
                                    <link
                                        rel="stylesheet"
                                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                                    />
                                    <p style={styles.contactEmail}>
                                        <span style={styles.contactIcon}>✉</span>
                                        <a href="mailto:whoweare.in@gmail.com" style={styles.emailLink}>
                                            whoweare.in@gmail.com
                                        </a>
                                    </p>
                                    <div style={styles.contactSocial}>
                                        <a href="https://www.linkedin.com/company/107940180/admin/dashboard/" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                                            <i className="fab fa-linkedin" style={{ fontSize: '24px', color: 'white' }}></i>
                                        </a>
                                        <a href="https://www.instagram.com/whoweare.in/?igsh=MWhpemFzbmpiem12dA%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer" style={styles.socialLink} className="social-link">
                                            <i className="fab fa-instagram" style={{ fontSize: '24px', color: 'white' }}></i>
                                        </a>
                                        <a href="mailto:whoweare@gmail.com" style={styles.socialLink} className="social-link">
                                            <i className="fas fa-envelope" style={{ fontSize: '24px', color: 'white' }}></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

const styles = {
    container: {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, rgba(215, 216, 217, 0.8) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(240, 239, 248, 0.8) 100%)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    hero: {
        position: 'relative',
        height: '400px',
        backgroundImage: 'url(https://images.unsplash.com/photo-1610581726640-2b30da764840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F2ZXMlMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
    },
    heroOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #1f4c75, #2e6f9e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    heroContent: {
        textAlign: 'center',
        color: 'white',
        padding: '20px'
    },
    heroIcon: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40px',
        fontWeight: 'bold',
        margin: '0 auto 20px',
        animation: 'bounce 2s infinite'
    },
    heroTitle: {
        fontSize: '4rem',
        fontWeight: 'bold',
        margin: '0 0 15px',
        background: 'linear-gradient(to right, #ffffff,rgb(255, 255, 255),rgb(255, 255, 255))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        opacity: 0.9,
        marginBottom: '20px',
        maxWidth: '600px',
        margin: '0 auto 20px'
    },
    heroTag: {
        display: 'inline-block',
        background: 'rgba(255, 255, 255, 0.15)',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: '500'
    },
    faqSection: {
        padding: '80px 20px',
        position: 'relative'
    },
    faqContainer: {
        maxWidth: '900px',
        margin: '0 auto'
    },
    sectionHeader: {
        textAlign: 'center',
        marginBottom: '60px'
    },
    sectionTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: '15px'
    },
    divider: {
        width: '80px',
        height: '4px',
        background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
        margin: '0 auto 20px',
        borderRadius: '2px'
    },
    sectionSubtitle: {
        fontSize: '1.1rem',
        color: '#6b7280',
        maxWidth: '600px',
        margin: '0 auto'
    },
    faqList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    faqItem: {
        background: 'rgba(255, 255, 255, 0.8)',
        borderRadius: '16px',
        border: '1px solid rgba(229, 231, 235, 0.5)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        overflow: 'hidden'
    },
    faqItemActive: {
        background: 'linear-gradient(135deg, rgba(239, 246, 255, 0.8) 0%, #ffffff 50%, rgba(245, 243, 255, 0.8) 100%)',
        boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(59, 130, 246, 0.3)',
        transform: 'translateY(-2px)'
    },
    faqQuestion: {
        width: '100%',
        padding: '24px 32px',
        background: 'none',
        border: 'none',
        textAlign: 'left',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease'
    },
    questionContent: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        marginRight: '16px'
    },
    questionNumber: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#f3f4f6',
        color: '#6b7280',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '14px',
        marginRight: '16px',
        transition: 'all 0.3s ease'
    },
    questionNumberActive: {
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        color: 'white',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    },
    questionText: {
        fontSize: '1.125rem',
        fontWeight: '600',
        color: '#374151',
        margin: 0
    },
    toggleIcon: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#e5e7eb',
        color: '#6b7280',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease'
    },
    toggleIconActive: {
        background: '#3b82f6',
        color: 'white',
        transform: 'rotate(180deg)'
    },
    faqAnswer: {
        padding: '0 32px 24px',
        animation: 'slideDown 0.3s ease-out'
    },
    answerContent: {
        marginLeft: '56px',
        padding: '20px',
        background: 'linear-gradient(135deg, #f9fafb, rgba(239, 246, 255, 0.5))',
        borderRadius: '12px',
        borderLeft: '4px solid #3b82f6'
    },
    answerText: {
        color: '#4b5563',
        lineHeight: 1.6,
        margin: 0,
        fontSize: '1rem'
    },
    ctaSection: {
        marginTop: '60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1f4c75, #2e6f9e)',
        borderRadius: '20px',
        padding: '40px',
        color: 'white'
    },
    ctaTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '15px'
    },
    ctaText: {
        opacity: 0.9,
        marginBottom: '25px',
        maxWidth: '600px',
        margin: '0 auto 25px'
    },
    contactSection: {
        marginTop: '30px',
        padding: '30px',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    contactTitle: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: 'white'
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
    },
    contactEmail: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        margin: 0,
        fontSize: '1.1rem'
    },
    contactIcon: {
        fontSize: '18px',
        opacity: 0.9
    },
    emailLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'opacity 0.3s ease'
    },
    contactSocial: {
        display: 'flex',
        gap: '15px'
    },
    socialLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45px',
        height: '45px',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    socialIcon: {
        fontSize: '20px'
    }
};

// Add keyframes for animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
        }
        40%, 43% {
            transform: translate3d(0,-15px,0);
        }
        70% {
            transform: translate3d(0,-7px,0);
        }
        90% {
            transform: translate3d(0,-2px,0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .faq-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    
    .cta-button:hover {
        background: #f0f9ff !important;
        transform: scale(1.3);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
    }
    
    .email-link:hover {
        opacity: 0.8 !important;
    }
    
    .social-link:hover {
        background: rgba(255, 255, 255, 0.3) !important;
        transform: scale(1.3);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(styleSheet);

export default FaqPage;
