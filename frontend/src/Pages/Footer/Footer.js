import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                {/* Add Font Awesome CDN to your HTML head first */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />

                <div className="footer-content">
                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="/home/aboutus">About Us</a></li>
                            <li><a href="/home/privacy">Privacy Policy</a></li>
                            <li><a href="/home/faq">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <div className="contact-info">
                            <p>
                                <i className="fas fa-envelope contact-icon"></i>
                                <a href="mailto:whoweare@gmail.com">whoweare@gmail.com</a>
                            </p>
                            <div className="contact-social">
                                <a href="https://www.linkedin.com/company/107940180/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/whoweare.in/?igsh=MWhpemFzbmpiem12dA%3D%3D&utm_source=qr#" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="mailto:whoweare.in@gmail.com">
                                    <i className="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Optional Message */}
                    <div className="footer-newsletter">
                        <h3>Have Questions?</h3>
                        <p>Reach out via email or social media</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PersonalityAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
