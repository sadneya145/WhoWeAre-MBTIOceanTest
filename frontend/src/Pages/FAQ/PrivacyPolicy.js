import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getAuth } from 'firebase/auth';

const PrivacyPolicyPage = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return (
        <>
            <Header user={user} />
            <div style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>Privacy Policy</h1>
                    <p style={styles.lastUpdated}><strong>Last updated:</strong> [Insert Date]</p>

                    <p style={styles.paragraph}>
                        Welcome to <strong>WhoWeAre</strong>. Your privacy is important to us. This policy explains what information we collect, how we use it, and how we protect your data.
                    </p>

                    <h2 style={styles.heading}>1. Information We Collect</h2>
                    <p style={styles.paragraph}>We collect the following types of information:</p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><strong>Personal Information:</strong> Name, Email address (via Google or Firebase authentication)</li>
                        <li style={styles.listItem}><strong>Quiz Data:</strong> OCEAN trait scores, MBTI type, quiz answers, and history</li>
                        <li style={styles.listItem}><strong>Technical Information:</strong> Device, browser, IP address (collected by Firebase or analytics tools)</li>
                    </ul>

                    <h2 style={styles.heading}>2. Why We Collect This Information</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>To generate personalized OCEAN and MBTI personality results</li>
                        <li style={styles.listItem}>To store and display quiz history</li>
                        <li style={styles.listItem}>To improve the website's performance and personalization</li>
                        <li style={styles.listItem}>To support research on personality types (using anonymized data)</li>
                        <li style={styles.listItem}>To secure user login via Firebase authentication</li>
                    </ul>

                    <h2 style={styles.heading}>3. How We Collect Information</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>When you sign up or log in using Firebase (Google login)</li>
                        <li style={styles.listItem}>When you take the quiz and submit your responses</li>
                        <li style={styles.listItem}>Automatically through cookies, Firebase, or analytics tools</li>
                    </ul>

                    <h2 style={styles.heading}>4. How We Use Your Data</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>To display your quiz results on the Profile and Result pages</li>
                        <li style={styles.listItem}>To track your quiz history and allow re-viewing of past quizzes</li>
                        <li style={styles.listItem}>To classify your personality type using clustering algorithms</li>
                        <li style={styles.listItem}>To deliver personalized insights and recommendations</li>
                        <li style={styles.listItem}>To support backend improvements and system analytics</li>
                    </ul>

                    <h2 style={styles.heading}>5. Changes to This Privacy Policy</h2>
                    <p style={styles.paragraph}>We may update this Privacy Policy from time to time. When we do, we will:</p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>Notify users via a message on the login screen</li>
                        <li style={styles.listItem}>Update the "Last updated" date at the top of this page</li>
                        <li style={styles.listItem}>Optionally send an email if you have opted in</li>
                    </ul>

                    <h2 style={styles.heading}>6. Contact Us</h2>
                    <p style={styles.paragraph}>If you have any questions or concerns about this policy, feel free to contact us:</p>
                    <p style={styles.paragraph}>
                        <strong>Email:</strong> whoweare@gmail.com<br />
                        <strong>Contact Page:</strong> Visit our <a href="/about" style={styles.link}>About Us</a> section and use the contact form.
                    </p>

                    <h2 style={styles.heading}>7. Our Commitment to Data Protection</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>All authentication is securely handled by Firebase</li>
                        <li style={styles.listItem}>We do not sell or share personal data with third parties</li>
                        <li style={styles.listItem}>Quiz and personality data is stored securely</li>
                        <li style={styles.listItem}>All analytics are performed on anonymized data only</li>
                        <li style={styles.listItem}>You may request deletion of your data at any time</li>
                    </ul>

                    <p style={styles.thanksMessage}>
                        <strong>Thank you</strong> for trusting us with your personal insights. We are committed to protecting your privacy as you explore who you are.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: 'auto',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        color: '#333',
        minHeight: '100vh'
    },
    content: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
    },
    title: {
        color: 'rgba(30, 58, 138, 0.8)',
        fontSize: '2.5rem',
        marginBottom: '1rem'
    },
    heading: {
        color: 'rgba(30, 58, 138, 0.8)',
        fontSize: '1.5rem',
        marginTop: '2rem',
        marginBottom: '1rem'
    },
    paragraph: {
        marginBottom: '1rem'
    },
    lastUpdated: {
        marginBottom: '1.5rem',
        fontStyle: 'italic'
    },
    list: {
        paddingLeft: '1.5rem',
        marginBottom: '1rem'
    },
    listItem: {
        marginBottom: '0.5rem'
    },
    link: {
        color: '#2e7d32',
        textDecoration: 'none'
    },
    thanksMessage: {
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: 'rgba(214, 221, 240, 0.8)',
        borderRadius: '4px',
        border: '1px solid rgba(32, 55, 121, 0.8)'
    }
};

export default PrivacyPolicyPage;